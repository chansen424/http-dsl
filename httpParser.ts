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
	public static readonly LPAREN = 1;
	public static readonly RPAREN = 2;
	public static readonly LBRACE = 3;
	public static readonly RBRACE = 4;
	public static readonly COLON = 5;
	public static readonly COMMA = 6;
	public static readonly EQUALS = 7;
	public static readonly LET = 8;
	public static readonly PRINT = 9;
	public static readonly GET = 10;
	public static readonly POST = 11;
	public static readonly TO = 12;
	public static readonly FROM = 13;
	public static readonly NAME = 14;
	public static readonly INT = 15;
	public static readonly STRING = 16;
	public static readonly WS = 17;
	public static readonly RULE_expression = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_assgn = 2;
	public static readonly RULE_print = 3;
	public static readonly RULE_request = 4;
	public static readonly RULE_json = 5;
	public static readonly RULE_pair = 6;
	public static readonly RULE_key = 7;
	public static readonly RULE_var = 8;
	public static readonly RULE_value = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "statement", "assgn", "print", "request", "json", "pair", 
		"key", "var", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'{'", "'}'", "':'", "','", "'='", "'let'", "'print'", 
		"'GET'", "'POST'", "'to'", "'from'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LPAREN", "RPAREN", "LBRACE", "RBRACE", "COLON", "COMMA", "EQUALS", 
		"LET", "PRINT", "GET", "POST", "TO", "FROM", "NAME", "INT", "STRING", 
		"WS",
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
			this.state = 22;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case httpParser.GET:
			case httpParser.POST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.request();
				}
				break;
			case httpParser.LBRACE:
			case httpParser.INT:
			case httpParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 21;
				this.value();
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
			this.state = 26;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case httpParser.LET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 24;
				this.assgn();
				}
				break;
			case httpParser.PRINT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 25;
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
			this.state = 28;
			this.match(httpParser.LET);
			this.state = 29;
			this.match(httpParser.NAME);
			this.state = 30;
			this.match(httpParser.EQUALS);
			this.state = 31;
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
			this.state = 33;
			this.match(httpParser.PRINT);
			this.state = 34;
			this.match(httpParser.LPAREN);
			this.state = 35;
			this.expression();
			this.state = 36;
			this.match(httpParser.RPAREN);
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
			this.state = 46;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case httpParser.GET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 38;
				this.match(httpParser.GET);
				this.state = 39;
				this.match(httpParser.FROM);
				this.state = 40;
				this.match(httpParser.STRING);
				}
				break;
			case httpParser.POST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.match(httpParser.POST);
				this.state = 42;
				this.json();
				this.state = 43;
				this.match(httpParser.TO);
				this.state = 44;
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
	// @RuleVersion(0)
	public json(): JsonContext {
		let _localctx: JsonContext = new JsonContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, httpParser.RULE_json);
		let _la: number;
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.match(httpParser.LBRACE);
				this.state = 49;
				this.match(httpParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 50;
				this.match(httpParser.LBRACE);
				this.state = 51;
				this.pair();
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === httpParser.COMMA) {
					{
					{
					this.state = 52;
					this.match(httpParser.COMMA);
					this.state = 53;
					this.pair();
					}
					}
					this.state = 58;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 59;
				this.match(httpParser.RBRACE);
				}
				break;
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
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, httpParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.key();
			this.state = 64;
			this.match(httpParser.COLON);
			this.state = 65;
			this.value();
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
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, httpParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(httpParser.NAME);
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
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, httpParser.RULE_var);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(httpParser.NAME);
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, httpParser.RULE_value);
		try {
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case httpParser.INT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 71;
				this.match(httpParser.INT);
				}
				break;
			case httpParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.match(httpParser.STRING);
				}
				break;
			case httpParser.LBRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 73;
				this.json();
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13O\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x05\x02" +
		"\x19\n\x02\x03\x03\x03\x03\x05\x03\x1D\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x061\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x079\n\x07\f\x07\x0E\x07<\v\x07" +
		"\x03\x07\x03\x07\x05\x07@\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x05\vM\n\v\x03\v\x02\x02\x02\f\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x02" +
		"\x02K\x02\x18\x03\x02\x02\x02\x04\x1C\x03\x02\x02\x02\x06\x1E\x03\x02" +
		"\x02\x02\b#\x03\x02\x02\x02\n0\x03\x02\x02\x02\f?\x03\x02\x02\x02\x0E" +
		"A\x03\x02\x02\x02\x10E\x03\x02\x02\x02\x12G\x03\x02\x02\x02\x14L\x03\x02" +
		"\x02\x02\x16\x19\x05\n\x06\x02\x17\x19\x05\x14\v\x02\x18\x16\x03\x02\x02" +
		"\x02\x18\x17\x03\x02\x02\x02\x19\x03\x03\x02\x02\x02\x1A\x1D\x05\x06\x04" +
		"\x02\x1B\x1D\x05\b\x05\x02\x1C\x1A\x03\x02\x02\x02\x1C\x1B\x03\x02\x02" +
		"\x02\x1D\x05\x03\x02\x02\x02\x1E\x1F\x07\n\x02\x02\x1F \x07\x10\x02\x02" +
		" !\x07\t\x02\x02!\"\x05\x02\x02\x02\"\x07\x03\x02\x02\x02#$\x07\v\x02" +
		"\x02$%\x07\x03\x02\x02%&\x05\x02\x02\x02&\'\x07\x04\x02\x02\'\t\x03\x02" +
		"\x02\x02()\x07\f\x02\x02)*\x07\x0F\x02\x02*1\x07\x12\x02\x02+,\x07\r\x02" +
		"\x02,-\x05\f\x07\x02-.\x07\x0E\x02\x02./\x07\x12\x02\x02/1\x03\x02\x02" +
		"\x020(\x03\x02\x02\x020+\x03\x02\x02\x021\v\x03\x02\x02\x0223\x07\x05" +
		"\x02\x023@\x07\x06\x02\x0245\x07\x05\x02\x025:\x05\x0E\b\x0267\x07\b\x02" +
		"\x0279\x05\x0E\b\x0286\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02" +
		"\x02:;\x03\x02\x02\x02;=\x03\x02\x02\x02<:\x03\x02\x02\x02=>\x07\x06\x02" +
		"\x02>@\x03\x02\x02\x02?2\x03\x02\x02\x02?4\x03\x02\x02\x02@\r\x03\x02" +
		"\x02\x02AB\x05\x10\t\x02BC\x07\x07\x02\x02CD\x05\x14\v\x02D\x0F\x03\x02" +
		"\x02\x02EF\x07\x10\x02\x02F\x11\x03\x02\x02\x02GH\x07\x10\x02\x02H\x13" +
		"\x03\x02\x02\x02IM\x07\x11\x02\x02JM\x07\x12\x02\x02KM\x05\f\x07\x02L" +
		"I\x03\x02\x02\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02M\x15\x03\x02\x02" +
		"\x02\b\x18\x1C0:?L";
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
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
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
	public LET(): TerminalNode { return this.getToken(httpParser.LET, 0); }
	public NAME(): TerminalNode { return this.getToken(httpParser.NAME, 0); }
	public EQUALS(): TerminalNode { return this.getToken(httpParser.EQUALS, 0); }
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
	public PRINT(): TerminalNode { return this.getToken(httpParser.PRINT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(httpParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(httpParser.RPAREN, 0); }
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
	public GET(): TerminalNode | undefined { return this.tryGetToken(httpParser.GET, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(httpParser.FROM, 0); }
	public STRING(): TerminalNode { return this.getToken(httpParser.STRING, 0); }
	public POST(): TerminalNode | undefined { return this.tryGetToken(httpParser.POST, 0); }
	public json(): JsonContext | undefined {
		return this.tryGetRuleContext(0, JsonContext);
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(httpParser.TO, 0); }
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


export class JsonContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(httpParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(httpParser.RBRACE, 0); }
	public pair(): PairContext[];
	public pair(i: number): PairContext;
	public pair(i?: number): PairContext | PairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairContext);
		} else {
			return this.getRuleContext(i, PairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.COMMA);
		} else {
			return this.getToken(httpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_json; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterJson) {
			listener.enterJson(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitJson) {
			listener.exitJson(this);
		}
	}
	// @Override
	public accept<Result>(visitor: httpVisitor<Result>): Result {
		if (visitor.visitJson) {
			return visitor.visitJson(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public COLON(): TerminalNode { return this.getToken(httpParser.COLON, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_pair; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterPair) {
			listener.enterPair(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitPair) {
			listener.exitPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: httpVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(httpParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_key; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: httpVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(httpParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_var; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: httpVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(httpParser.INT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(httpParser.STRING, 0); }
	public json(): JsonContext | undefined {
		return this.tryGetRuleContext(0, JsonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_value; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: httpVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


