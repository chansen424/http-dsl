import { CharStreams, CommonTokenStream } from "antlr4ts";
import * as lexer from "../generated/httpLexer";
import * as parser from "../generated/httpParser";
import * as fs from "fs";

import { getRequest, postRequest } from './requests';
import { userInput, parseArray, parseJson, parseHeaders, removeEnclosing, variableInScope } from "./utils";
import { Value, Context, ObjectType } from "./types";
import { ILLEGAL_EXTRACTION, ILLEGAL_SET } from "./errors";

async function evaluateCommand(
  c: parser.CommandContext,
  context: Context = {}
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
    const key = await evaluateExpression(
      c.assign_field()!.expression()[1],
      context
    );
    const v2 = await evaluateExpression(
      c.assign_field()!.expression()[2],
      context
    );
    if (Array.isArray(v1)) {
      const array = v1 as Array<Value>;
      if (typeof key !== "number") throw ILLEGAL_SET;
      array[key] = v2;
    } else {
      const obj = v1 as { [key: string]: Value };
      if (typeof key !== "string") throw ILLEGAL_SET;
      obj[key] = v2;
    }
  } else if (c.delete_field()) {
    const v1 = await evaluateExpression(
      c.delete_field()!.expression(),
      context
    );
    if (typeof v1 !== "object") throw ILLEGAL_SET;
    const obj = v1 as { [key: string]: Value };
    const key = c.delete_field()!.key().text;
    delete obj[removeEnclosing(key)];
  } else if (c.output()) {
    const file = removeEnclosing(c.output()!.key().text);
    const v1 = await evaluateExpression(c.output()!.expression(), context);
    if (typeof v1 !== "object") throw ILLEGAL_SET;
    fs.writeFileSync(file, JSON.stringify(v1, null, 2));
  } else {
    evaluateCommand(c.command()[0], context).then(() =>
      evaluateCommand(c.command()[1], context)
    );
  }
}

async function evaluateExpression(
  e: parser.ExpressionContext,
  context: Context = {}
): Promise<Value> {
  if (e.request()) {
    if (e.request()!.GET()) {
      if (e.request()!.headers()) {
        return await getRequest(e.request()!.STRING().text,
          parseHeaders(e.request()!.headers()!.text, context));
      }
      return await getRequest(e.request()!.STRING().text);
    } else {
      if (e.request()!.headers()) {
        return await postRequest(
          e.request()!.STRING().text,
          parseJson(e.request()!.json()!.text, context),
          parseHeaders(e.request()!.headers()!.text, context)
        );
      }
      return await postRequest(
        e.request()!.STRING().text,
        parseJson(e.request()!.json()!.text, context)
      );
    }
  } else if (e.input()) {
    return userInput();
  } else if (e.PLUS()) {
    return (evaluateValue(e.addable()![0] as parser.ValueContext, context) as string) + (evaluateValue(e.addable()![1] as parser.ValueContext, context) as string);
  } else if (e.value()) {
    return evaluateValue(e.value()!, context);
  } else { // accessing
    const v = await evaluateExpression(e.expression()!, context);
    if (typeof v !== "object") throw ILLEGAL_EXTRACTION;
    if (e.key()) {
      const obj = v as ObjectType;
      return obj[removeEnclosing(e.key()!.text)];
    } else if (e.var()) {
      const value = variableInScope(e.var(), context);
      if (Array.isArray(v)) {
        return v[value as number]
      } else {
        const obj = v as ObjectType;
        return obj[value as string];
      }
    } else if (e.INT()) {
      const array = v as Array<Value>;
      return array[parseInt(e.INT()!.text)]
    }
  }
  return null;
}

function evaluateValue(t: parser.ValueContext, context: Context): Value {
  const content = t.text;
  if (!t.text) {
    return null;
  } else if (t.INT && t.INT()) {
    return parseInt(content);
  } else if (t.STRING && t.STRING()) {
    return removeEnclosing(content);
  } else if (t.json && t.json()) {
    return parseJson(t.json()!.text, context);
  } else if (t.array && t.array()) {
    return parseArray(t.array()!.text, context);
  } else { // this would just be a bunch of tokens, which can be a valid variable, so might as well check
    return variableInScope(t.var(), context);
  }
}

async function interpret(codeString: string) {
  let inputStream = CharStreams.fromString(codeString);
  let l = new lexer.httpLexer(inputStream);
  let tokenStream = new CommonTokenStream(l);
  let p = new parser.httpParser(tokenStream);
  let env = fs.readFileSync("./.env", { encoding: "utf8", flag: "r" });
  let lines = env.split("\n");
  let envvars = {} as { [key: string]: Value };
  lines.forEach((line) => {
    const components = line.split("=");
    envvars[components[0]] = components[1];
  });
  let context = {
    env: envvars,
  };
  let result = p.command();
  return await evaluateCommand(result, context);
}

export default interpret;
