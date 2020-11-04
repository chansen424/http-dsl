import { CharStreams, CommonTokenStream } from "antlr4ts";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import * as lexer from "./httpLexer";
import * as parser from "./httpParser";

let code = 'print({ age : 5, type : "a" })';
let inputStream = CharStreams.fromString(code);
let l = new lexer.httpLexer(inputStream);
let tokenStream = new CommonTokenStream(l);
let p = new parser.httpParser(tokenStream);

let result = p.statement();
evaluateStatement(result);

type ExpressionValue = number | string | Object | null;

function isNumeric(s: string): boolean {
  return !isNaN(parseFloat(s));
}

function evaluateExpression(e: parser.ExpressionContext): ExpressionValue {
  if (e.request()) {
    return null;
  } else if (e.value()) {
    return evaluateValue(e.value()!);
  } else {
    let stringExpression = e.text;
    return stringExpression.substr(1, stringExpression.length - 2);
  }
}

function evaluateValue(t: parser.ValueContext): ExpressionValue {
  const content = t.text;
  if (!content) {
    return null;
  } else if (isNumeric(content)) {
    return parseFloat(content);
  } else if (t.json()) {
    console.log(t.json()!.text);
    return JSON.parse(t.json()!.text);
  } else {
    return content;
  }
}

function evaluateStatement(s: parser.StatementContext) {
  if (s.print()) {
    const v = evaluateExpression(s.print()!.expression());
    console.log(v);
  }
}
