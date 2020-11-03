// Generated from http.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class httpLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"JSON", "PAIR", "NAME", "KEY", "VAR", "VALUE", "INT", "STRING", "WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(httpLexer._LITERAL_NAMES, httpLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return httpLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(httpLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "http.g4"; }

	// @Override
	public get ruleNames(): string[] { return httpLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return httpLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return httpLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return httpLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14\x82\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x07\vO\n\v\f\v\x0E\vR\v\v\x03\v\x03\v\x05\vV\n\v\x03\f\x03\f" +
		"\x03\f\x03\f\x03\r\x03\r\x07\r^\n\r\f\r\x0E\ra\v\r\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10j\n\x10\x03\x11\x03\x11\x07" +
		"\x11n\n\x11\f\x11\x0E\x11q\v\x11\x03\x12\x03\x12\x07\x12u\n\x12\f\x12" +
		"\x0E\x12x\v\x12\x03\x12\x03\x12\x03\x13\x06\x13}\n\x13\r\x13\x0E\x13~" +
		"\x03\x13\x03\x13\x02\x02\x02\x14\x03\x02\x03\x05\x02\x04\x07\x02\x05\t" +
		"\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
		"%\x02\x14\x03\x02\x06\x04\x02C\\c|\x03\x022;\x03\x02$$\x05\x02\v\f\x0E" +
		"\x0F\"\"\x02\x89\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
		"\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
		"\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
		"\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03" +
		"\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03" +
		"\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02" +
		"\x02\x03\'\x03\x02\x02\x02\x05+\x03\x02\x02\x02\x07-\x03\x02\x02\x02\t" +
		"3\x03\x02\x02\x02\v5\x03\x02\x02\x02\r7\x03\x02\x02\x02\x0F;\x03\x02\x02" +
		"\x02\x11@\x03\x02\x02\x02\x13E\x03\x02\x02\x02\x15U\x03\x02\x02\x02\x17" +
		"W\x03\x02\x02\x02\x19[\x03\x02\x02\x02\x1Bb\x03\x02\x02\x02\x1Dd\x03\x02" +
		"\x02\x02\x1Fi\x03\x02\x02\x02!k\x03\x02\x02\x02#r\x03\x02\x02\x02%|\x03" +
		"\x02\x02\x02\'(\x07n\x02\x02()\x07g\x02\x02)*\x07v\x02\x02*\x04\x03\x02" +
		"\x02\x02+,\x07?\x02\x02,\x06\x03\x02\x02\x02-.\x07r\x02\x02./\x07t\x02" +
		"\x02/0\x07k\x02\x0201\x07p\x02\x0212\x07v\x02\x022\b\x03\x02\x02\x023" +
		"4\x07*\x02\x024\n\x03\x02\x02\x0256\x07+\x02\x026\f\x03\x02\x02\x0278" +
		"\x07I\x02\x0289\x07G\x02\x029:\x07V\x02\x02:\x0E\x03\x02\x02\x02;<\x07" +
		"h\x02\x02<=\x07t\x02\x02=>\x07q\x02\x02>?\x07o\x02\x02?\x10\x03\x02\x02" +
		"\x02@A\x07R\x02\x02AB\x07Q\x02\x02BC\x07U\x02\x02CD\x07V\x02\x02D\x12" +
		"\x03\x02\x02\x02EF\x07v\x02\x02FG\x07q\x02\x02G\x14\x03\x02\x02\x02HI" +
		"\x07}\x02\x02IV\x07\x7F\x02\x02JK\x07}\x02\x02KP\x05\x17\f\x02LM\x07." +
		"\x02\x02MO\x05\x17\f\x02NL\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02" +
		"\x02\x02PQ\x03\x02\x02\x02QS\x03\x02\x02\x02RP\x03\x02\x02\x02ST\x07\x7F" +
		"\x02\x02TV\x03\x02\x02\x02UH\x03\x02\x02\x02UJ\x03\x02\x02\x02V\x16\x03" +
		"\x02\x02\x02WX\x05\x1B\x0E\x02XY\x07<\x02\x02YZ\x05\x1F\x10\x02Z\x18\x03" +
		"\x02\x02\x02[_\t\x02\x02\x02\\^\t\x02\x02\x02]\\\x03\x02\x02\x02^a\x03" +
		"\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`\x1A\x03\x02\x02\x02" +
		"a_\x03\x02\x02\x02bc\x05\x19\r\x02c\x1C\x03\x02\x02\x02de\x05\x19\r\x02" +
		"e\x1E\x03\x02\x02\x02fj\x05!\x11\x02gj\x05#\x12\x02hj\x05\x15\v\x02if" +
		"\x03\x02\x02\x02ig\x03\x02\x02\x02ih\x03\x02\x02\x02j \x03\x02\x02\x02" +
		"ko\t\x03\x02\x02ln\t\x03\x02\x02ml\x03\x02\x02\x02nq\x03\x02\x02\x02o" +
		"m\x03\x02\x02\x02op\x03\x02\x02\x02p\"\x03\x02\x02\x02qo\x03\x02\x02\x02" +
		"rv\x07$\x02\x02su\n\x04\x02\x02ts\x03\x02\x02\x02ux\x03\x02\x02\x02vt" +
		"\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03\x02\x02\x02xv\x03\x02\x02\x02" +
		"yz\x07$\x02\x02z$\x03\x02\x02\x02{}\t\x05\x02\x02|{\x03\x02\x02\x02}~" +
		"\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x03\x02" +
		"\x02\x02\x80\x81\b\x13\x02\x02\x81&\x03\x02\x02\x02\n\x02PU_iov~\x03\b" +
		"\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!httpLexer.__ATN) {
			httpLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(httpLexer._serializedATN));
		}

		return httpLexer.__ATN;
	}

}

