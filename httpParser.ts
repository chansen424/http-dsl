// Generated from http.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { httpListener } from "./httpListener";
import { httpVisitor } from "./httpVisitor";


export class httpParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly JSON = 10;
	public static readonly PAIR = 11;
	public static readonly NAME = 12;
	public static readonly KEY = 13;
	public static readonly VAR = 14;
	public static readonly VALUE = 15;
	public static readonly INT = 16;
	public static readonly STRING = 17;
	public static readonly WS = 18;
	public static readonly RULE_expression = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_assgn = 2;
	public static readonly RULE_print = 3;
	public static readonly RULE_request = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "statement", "assgn", "print", "request",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "'='", "'print'", "'('", "')'", "'GET'", "'from'", 
		"'POST'", "'to'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "JSON", "PAIR", "NAME", "KEY", "VAR", 
		"VALUE", "INT", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(httpParser._LITERAL_NAMES, httpParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return httpParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "http.g4"; }

	// @Override
	public get ruleNames(): string[] { return httpParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return httpParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(httpParser._ATN, this);
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, httpParser.RULE_expression);
		try {
			this.state = 12;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case httpParser.T__5:
			case httpParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 10;
				this.request();
				}
				break;
			case httpParser.VALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 11;
				this.match(httpParser.VALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, httpParser.RULE_statement);
		try {
			this.state = 16;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case httpParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 14;
				this.assgn();
				}
				break;
			case httpParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 15;
				this.print();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assgn(): AssgnContext {
		let _localctx: AssgnContext = new AssgnContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, httpParser.RULE_assgn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.match(httpParser.T__0);
			this.state = 19;
			this.match(httpParser.NAME);
			this.state = 20;
			this.match(httpParser.T__1);
			this.state = 21;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public print(): PrintContext {
		let _localctx: PrintContext = new PrintContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, httpParser.RULE_print);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this.match(httpParser.T__2);
			this.state = 24;
			this.match(httpParser.T__3);
			this.state = 25;
			this.expression();
			this.state = 26;
			this.match(httpParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public request(): RequestContext {
		let _localctx: RequestContext = new RequestContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, httpParser.RULE_request);
		try {
			this.state = 35;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case httpParser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 28;
				this.match(httpParser.T__5);
				this.state = 29;
				this.match(httpParser.T__6);
				this.state = 30;
				this.match(httpParser.STRING);
				}
				break;
			case httpParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 31;
				this.match(httpParser.T__7);
				this.state = 32;
				this.match(httpParser.JSON);
				this.state = 33;
				this.match(httpParser.T__8);
				this.state = 34;
				this.match(httpParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14(\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x05\x02\x0F\n\x02\x03\x03\x03\x03\x05\x03\x13\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06&\n\x06\x03" +
		"\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02\x02%" +
		"\x02\x0E\x03\x02\x02\x02\x04\x12\x03\x02\x02\x02\x06\x14\x03\x02\x02\x02" +
		"\b\x19\x03\x02\x02\x02\n%\x03\x02\x02\x02\f\x0F\x05\n\x06\x02\r\x0F\x07" +
		"\x11\x02\x02\x0E\f\x03\x02\x02\x02\x0E\r\x03\x02\x02\x02\x0F\x03\x03\x02" +
		"\x02\x02\x10\x13\x05\x06\x04\x02\x11\x13\x05\b\x05\x02\x12\x10\x03\x02" +
		"\x02\x02\x12\x11\x03\x02\x02\x02\x13\x05\x03\x02\x02\x02\x14\x15\x07\x03" +
		"\x02\x02\x15\x16\x07\x0E\x02\x02\x16\x17\x07\x04\x02\x02\x17\x18\x05\x02" +
		"\x02\x02\x18\x07\x03\x02\x02\x02\x19\x1A\x07\x05\x02\x02\x1A\x1B\x07\x06" +
		"\x02\x02\x1B\x1C\x05\x02\x02\x02\x1C\x1D\x07\x07\x02\x02\x1D\t\x03\x02" +
		"\x02\x02\x1E\x1F\x07\b\x02\x02\x1F \x07\t\x02\x02 &\x07\x13\x02\x02!\"" +
		"\x07\n\x02\x02\"#\x07\f\x02\x02#$\x07\v\x02\x02$&\x07\x13\x02\x02%\x1E" +
		"\x03\x02\x02\x02%!\x03\x02\x02\x02&\v\x03\x02\x02\x02\x05\x0E\x12%";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!httpParser.__ATN) {
			httpParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(httpParser._serializedATN));
		}

		return httpParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	public request(): RequestContext | undefined {
		return this.tryGetRuleContext(0, RequestContext);
	}
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(httpParser.VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_expression; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: httpVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assgn(): AssgnContext | undefined {
		return this.tryGetRuleContext(0, AssgnContext);
	}
	public print(): PrintContext | undefined {
		return this.tryGetRuleContext(0, PrintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_statement; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: httpVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssgnContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(httpParser.NAME, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_assgn; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterAssgn) {
			listener.enterAssgn(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitAssgn) {
			listener.exitAssgn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: httpVisitor<Result>): Result {
		if (visitor.visitAssgn) {
			return visitor.visitAssgn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_print; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterPrint) {
			listener.enterPrint(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitPrint) {
			listener.exitPrint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: httpVisitor<Result>): Result {
		if (visitor.visitPrint) {
			return visitor.visitPrint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequestContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(httpParser.STRING, 0); }
	public JSON(): TerminalNode | undefined { return this.tryGetToken(httpParser.JSON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_request; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterRequest) {
			listener.enterRequest(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitRequest) {
			listener.exitRequest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: httpVisitor<Result>): Result {
		if (visitor.visitRequest) {
			return visitor.visitRequest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


