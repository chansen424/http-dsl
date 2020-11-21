import { CharStreams, CommonTokenStream } from "antlr4ts";
import fetch from "node-fetch";
import * as lexer from "./generated/httpLexer";
import * as parser from "./generated/httpParser";

// let code = 'print({ "age" : 5, "type" : "a" })';
// let code = 'print(GET from "https://aws.random.cat/meow?ref=apilist.fun")';

type ExpressionValue = number | string | Object | null;

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

/* Need to change this somehow so that everything that gets printed
   doesn't wrap itself in Promise { }.
*/
async function evaluateExpression(
  e: parser.ExpressionContext,
  context: any = {}
): Promise<ExpressionValue> {
  // console.log(e.text)
  if (e.request()) {
    if (e.request()!.GET()) {
      return await getRequest(e.request()!.STRING().text);
    }
    return null;
  } else if (e.value()) {
    return evaluateValue(e.value()!, context);
  } else if (e.print()) {
    const v = evaluateExpression(e.print()!.expression(), context);
    Promise.resolve(v).then((val) => console.log(val));
    return null;
  } else if (e.assign()) {
    const assignedExpression = e.assign()!.expression().expression();
    // checking for sequences to make sure that we only ever assign the first
    // element of a sequence to the let expression's variable
    const isSequence = 1 in assignedExpression;
    const toEvaluate = isSequence ? e.assign()!.expression().expression()[0] : e.assign()!.expression();
    const v = evaluateExpression(toEvaluate, context);
    // console.log(e.assign()!.expression().text)
    const newContext = await Promise.resolve(v).then((val) => {
      context[e.assign()!.var().text] = val;
      return context;
    });
    if (isSequence) {
      evaluateExpression(e.assign()!.expression().expression()[1], newContext);
    }
    return null;
  } else if (e.expression()) {
    const v1 = evaluateExpression(e.expression()[0], context)
    let v2_promise;
    let result = null;
    await Promise.resolve(v1).then(() => v2_promise = evaluateExpression(e.expression()[1], context))
    await Promise.resolve(v2_promise).then(v2 => result = v2);
    return result
  } else {
    let stringExpression = e.text;
    return removeQuotes(stringExpression);
  }
}

function evaluateValue(t: parser.ValueContext, context: any): ExpressionValue {
  // console.log(context)
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

  let result = p.expression();
  return await evaluateExpression(result);
}

export default interpret;
