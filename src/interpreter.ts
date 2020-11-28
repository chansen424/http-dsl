import { CharStreams, CommonTokenStream } from "antlr4ts";
import fetch from "node-fetch";
import * as lexer from "../generated/httpLexer";
import * as parser from "../generated/httpParser";

import { parseArray, parseJson, removeEnclosing } from "./utils";
import { Value } from "./types";
import { VAR_NOT_FOUND, ILLEGAL_EXTRACTION, ILLEGAL_SET } from "./errors";

async function getRequest(s: string): Promise<Object> {
  const url = new URL(removeEnclosing(s));
  return fetch(url).then((res) => res.json());
}

async function postRequest(s: string, body: Object): Promise<Object> {
  const url = new URL(removeEnclosing(s));
  console.log(url);
  console.log(body);
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

async function evaluateCommand(
  c: parser.CommandContext,
  context: any = {}
): Promise<void> {
  if (c.assign()) {
    const value = evaluateExpression(c.assign()!.expression(), context);
    await Promise.resolve(value).then(
      (v) => (context[c.assign()!.var().text] = v)
    );
  } else if (c.print()) {
    const value = evaluateExpression(c.print()!.expression(), context);
    await Promise.resolve(value).then((v) => console.log(v));
  } else if (c.assign_field()) {
    const v1 = await evaluateExpression(
      c.assign_field()!.expression()[0],
      context
    );
    if (typeof v1 !== "object") throw ILLEGAL_SET;
    const obj = v1 as { [key: string]: Value };
    const key = c.assign_field()!.key().text;
    const v2 = await evaluateExpression(
      c.assign_field()!.expression()[1],
      context
    );
    obj[removeEnclosing(key)] = v2;
  } else {
    evaluateCommand(c.command()[0], context).then(() =>
      evaluateCommand(c.command()[1], context)
    );
  }
}

async function evaluateExpression(
  e: parser.ExpressionContext,
  context: any = {}
): Promise<Value> {
  if (e.request()) {
    if (e.request()!.GET()) {
      return await getRequest(e.request()!.STRING().text);
    } else {
      return await postRequest(
        e.request()!.STRING().text,
        parseJson(e.request()!.json()!.text, context)
      );
    }
  } else if (e.value()) {
    return evaluateValue(e.value()!, context);
  } else if (e.key()) {
    const v = await evaluateExpression(e.expression()!, context);
    if (typeof v !== "object") throw ILLEGAL_EXTRACTION;
    const obj = v as { [key: string]: Value };
    return obj[removeEnclosing(e.key()!.text)];
  }
  return null;
}

function evaluateValue(t: parser.ValueContext, context: any): Value {
  if (t.var()) {
    if (context[t.var()!.text]) {
      return context[t.var()!.text];
    } else {
      throw VAR_NOT_FOUND(t.var()!.text);
    }
  }
  const content = t.text;
  if (!content) {
    return null;
  } else if (t.INT()) {
    return parseInt(content);
  } else if (t.STRING()) {
    return removeEnclosing(content);
  } else if (t.json()) {
    return parseJson(t.json()!.text, context);
  } else if (t.array()) {
    return parseArray(t.array()!.text, context);
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
