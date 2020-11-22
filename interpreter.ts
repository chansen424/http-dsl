import { CharStreams, CommonTokenStream } from "antlr4ts";
import fetch from "node-fetch";
import * as lexer from "./generated/httpLexer";
import * as parser from "./generated/httpParser";


type Value = number | string | Object | null | Array<Value>;

function isNumeric(s: string): boolean {
  return !isNaN(parseFloat(s));
}

function removeQuotes(s: string): string {
  return s.substr(1, s.length - 2);
}

async function getRequest(s: string): Promise<Object> {
  const url = new URL(removeQuotes(s));
  return fetch(url).then((res) => res.json());
}

async function postRequest(s: string, body: Object): Promise<Object> {
  const url = new URL(removeQuotes(s))
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
}

async function evaluateCommand(
  c: parser.CommandContext,
  context: any = {}
): Promise<void> {
  if (c.assign()) {
    const value = evaluateExpression(c.assign()!.expression(), context);
    await Promise.resolve(value).then(v => context[c.assign()!.var().text] = v);
  } else if (c.print()) {
    const value = evaluateExpression(c.print()!.expression(), context);
    await Promise.resolve(value).then(v => console.log(v));
  } else {
    evaluateCommand(c.command()[0], context)
      .then(() => evaluateCommand(c.command()[1], context));
  }
}

async function evaluateExpression(
  e: parser.ExpressionContext,
  context: any = {}
): Promise<Value> {
  if (e.request()) {
    if (e.request()!.GET()) {
      return await getRequest(e.request()!.STRING().text); }
    // } else {
    //   return await postRequest(e.request()!.STRING().text, evaluateValue(e.request()!.json(), context))
    // }
    return null;
  } else if (e.value()) {
    return evaluateValue(e.value()!, context);
  }
  return null;
}

function evaluateValue(t: parser.ValueContext, context: any): Value {
  if (t.var()) {
    if (context[t.var()!.text]) {
      return context[t.var()!.text]
    } else {
      throw new Error("Undefined variable")
    }
  }
  const content = t.text;
  if (!content) {
    return null;
  } else if (isNumeric(content)) {
    return parseFloat(content);
  } else if (t.STRING()) {
    return removeQuotes(content);
  } else if (t.json()) {
    return JSON.parse(t.json()!.text, function(_, value) {
      if (typeof(value) === 'string' && value[0] === '$'){
        const variableName = value.substr(1)
        return context[variableName]
      }
      return value
    });
  } else if (t.array()) {
    return JSON.parse(t.array()!.text);
  } else {
    return content;
  }
}

async function interpret(codeString: string) {
  let inputStream = CharStreams.fromString(codeString);
  let l = new lexer.httpLexer(inputStream);
  let tokenStream = new CommonTokenStream(l);
  let p = new parser.httpParser(tokenStream);

  let result = p.command();
  return await evaluateCommand(result);
}

export default interpret;
