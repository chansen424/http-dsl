import { CharStreams, CommonTokenStream } from "antlr4ts";
import fetch from "node-fetch";
import * as lexer from "./generated/httpLexer";
import * as parser from "./generated/httpParser";


type Value = number | string | Object | null;

function isNumeric(s: string): boolean {
  return !isNaN(parseFloat(s));
}

function removeQuotes(s: string): string {
  return s.substr(1, s.length - 2);
}

function getRequest(s: string): Promise<Object> {
  const url = new URL(removeQuotes(s));
  return fetch(url).then((res) => res.json());
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
      return await getRequest(e.request()!.STRING().text);
    }
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
    return JSON.parse(t.json()!.text);
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
