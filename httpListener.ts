// Generated from http.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExpressionContext } from "./httpParser";
import { StatementContext } from "./httpParser";
import { AssgnContext } from "./httpParser";
import { PrintContext } from "./httpParser";
import { RequestContext } from "./httpParser";


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
}

