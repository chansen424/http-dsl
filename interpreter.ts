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
  e: parser.ExpressionContext
): Promise<ExpressionValue> {
  if (e.request()) {
    if (e.request()!.GET()) {
      return await getRequest(e.request()!.STRING().text);
    }
    return null;
  } else if (e.value()) {
    return evaluateValue(e.value()!);
  } else if (e.print()) {
    const v = evaluateExpression(e.print()!.expression());
    Promise.resolve(v).then((val) => console.log(val));
    return null;
  } else {
    let stringExpression = e.text;
    return removeQuotes(stringExpression);
  }
}

function evaluateValue(t: parser.ValueContext): ExpressionValue {
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
