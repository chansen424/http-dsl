import { CharStreams, CommonTokenStream } from "antlr4ts";
import * as lexer from "./httpLexer";
import * as parser from "./httpParser";

let code = "print(5)";
let inputStream = CharStreams.fromString(code);
let l = new lexer.httpLexer(inputStream);
let tokenStream = new CommonTokenStream(l);
let p = new parser.httpParser(tokenStream);

let result = p.statement();
evaluateStatement(result);

type ExpressionValue = number | string | null;

function evaluateExpression(e: parser.ExpressionContext): ExpressionValue {
  if (e.request()) {
    return null;
  } else if (e.VALUE()) {
    return e.VALUE()!.text;
  } else {
    // Our grammar is super simple, it's always a string between double quotes.
    let stringExpression = e.text;
    return stringExpression.substr(1, stringExpression.length - 2);
  }
}

function evaluateStatement(s: parser.StatementContext) {
  if (s.print()) {
    const v = evaluateExpression(s.print()!.expression());
    console.log(v);
  }
}
