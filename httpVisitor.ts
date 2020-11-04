// Generated from http.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `httpParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface httpVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `httpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.assgn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssgn?: (ctx: AssgnContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.print`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint?: (ctx: PrintContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.request`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequest?: (ctx: RequestContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.json`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson?: (ctx: JsonContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

