// Generated from http.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExpressionContext } from "./httpParser";
import { StatementContext } from "./httpParser";
import { AssgnContext } from "./httpParser";
import { PrintContext } from "./httpParser";
import { RequestContext } from "./httpParser";
import { JsonContext } from "./httpParser";
import { PairContext } from "./httpParser";
import { KeyContext } from "./httpParser";
import { VarContext } from "./httpParser";
import { ValueContext } from "./httpParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `httpParser`.
 */
export interface httpListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `httpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.assgn`.
	 * @param ctx the parse tree
	 */
	enterAssgn?: (ctx: AssgnContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.assgn`.
	 * @param ctx the parse tree
	 */
	exitAssgn?: (ctx: AssgnContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.print`.
	 * @param ctx the parse tree
	 */
	enterPrint?: (ctx: PrintContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.print`.
	 * @param ctx the parse tree
	 */
	exitPrint?: (ctx: PrintContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.request`.
	 * @param ctx the parse tree
	 */
	enterRequest?: (ctx: RequestContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.request`.
	 * @param ctx the parse tree
	 */
	exitRequest?: (ctx: RequestContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.json`.
	 * @param ctx the parse tree
	 */
	enterJson?: (ctx: JsonContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.json`.
	 * @param ctx the parse tree
	 */
	exitJson?: (ctx: JsonContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

