// Generated from /Users/anshgodha/Desktop/Fall 2020/CS 4110/http-dsl/http.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class httpLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LPAREN=1, RPAREN=2, LBRACE=3, RBRACE=4, COLON=5, SEMICOLON=6, COMMA=7, 
		EQUALS=8, LET=9, PRINT=10, GET=11, POST=12, TO=13, FROM=14, NAME=15, INT=16, 
		STRING=17, WS=18, LINE_COMMENT=19;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LPAREN", "RPAREN", "LBRACE", "RBRACE", "COLON", "SEMICOLON", "COMMA", 
			"EQUALS", "LET", "PRINT", "GET", "POST", "TO", "FROM", "NAME", "INT", 
			"STRING", "WS", "LINE_COMMENT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'{'", "'}'", "':'", "';'", "','", "'='", "'let'", 
			"'print'", "'GET'", "'POST'", "'to'", "'from'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LPAREN", "RPAREN", "LBRACE", "RBRACE", "COLON", "SEMICOLON", "COMMA", 
			"EQUALS", "LET", "PRINT", "GET", "POST", "TO", "FROM", "NAME", "INT", 
			"STRING", "WS", "LINE_COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public httpLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "http.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\25\u0082\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7"+
		"\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f"+
		"\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3"+
		"\17\3\20\3\20\7\20W\n\20\f\20\16\20Z\13\20\3\21\3\21\7\21^\n\21\f\21\16"+
		"\21a\13\21\3\22\3\22\7\22e\n\22\f\22\16\22h\13\22\3\22\3\22\3\23\6\23"+
		"m\n\23\r\23\16\23n\3\23\3\23\3\24\3\24\3\24\3\24\7\24w\n\24\f\24\16\24"+
		"z\13\24\3\24\5\24}\n\24\3\24\3\24\3\24\3\24\2\2\25\3\3\5\4\7\5\t\6\13"+
		"\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'"+
		"\25\3\2\7\4\2C\\c|\3\2\62;\3\2$$\5\2\13\f\16\17\"\"\4\2\f\f\17\17\2\u0087"+
		"\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2"+
		"\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2"+
		"\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2"+
		"\2\2\2%\3\2\2\2\2\'\3\2\2\2\3)\3\2\2\2\5+\3\2\2\2\7-\3\2\2\2\t/\3\2\2"+
		"\2\13\61\3\2\2\2\r\63\3\2\2\2\17\65\3\2\2\2\21\67\3\2\2\2\239\3\2\2\2"+
		"\25=\3\2\2\2\27C\3\2\2\2\31G\3\2\2\2\33L\3\2\2\2\35O\3\2\2\2\37T\3\2\2"+
		"\2![\3\2\2\2#b\3\2\2\2%l\3\2\2\2\'r\3\2\2\2)*\7*\2\2*\4\3\2\2\2+,\7+\2"+
		"\2,\6\3\2\2\2-.\7}\2\2.\b\3\2\2\2/\60\7\177\2\2\60\n\3\2\2\2\61\62\7<"+
		"\2\2\62\f\3\2\2\2\63\64\7=\2\2\64\16\3\2\2\2\65\66\7.\2\2\66\20\3\2\2"+
		"\2\678\7?\2\28\22\3\2\2\29:\7n\2\2:;\7g\2\2;<\7v\2\2<\24\3\2\2\2=>\7r"+
		"\2\2>?\7t\2\2?@\7k\2\2@A\7p\2\2AB\7v\2\2B\26\3\2\2\2CD\7I\2\2DE\7G\2\2"+
		"EF\7V\2\2F\30\3\2\2\2GH\7R\2\2HI\7Q\2\2IJ\7U\2\2JK\7V\2\2K\32\3\2\2\2"+
		"LM\7v\2\2MN\7q\2\2N\34\3\2\2\2OP\7h\2\2PQ\7t\2\2QR\7q\2\2RS\7o\2\2S\36"+
		"\3\2\2\2TX\t\2\2\2UW\t\2\2\2VU\3\2\2\2WZ\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y"+
		" \3\2\2\2ZX\3\2\2\2[_\t\3\2\2\\^\t\3\2\2]\\\3\2\2\2^a\3\2\2\2_]\3\2\2"+
		"\2_`\3\2\2\2`\"\3\2\2\2a_\3\2\2\2bf\7$\2\2ce\n\4\2\2dc\3\2\2\2eh\3\2\2"+
		"\2fd\3\2\2\2fg\3\2\2\2gi\3\2\2\2hf\3\2\2\2ij\7$\2\2j$\3\2\2\2km\t\5\2"+
		"\2lk\3\2\2\2mn\3\2\2\2nl\3\2\2\2no\3\2\2\2op\3\2\2\2pq\b\23\2\2q&\3\2"+
		"\2\2rs\7\61\2\2st\7\61\2\2tx\3\2\2\2uw\n\6\2\2vu\3\2\2\2wz\3\2\2\2xv\3"+
		"\2\2\2xy\3\2\2\2y|\3\2\2\2zx\3\2\2\2{}\7\17\2\2|{\3\2\2\2|}\3\2\2\2}~"+
		"\3\2\2\2~\177\7\f\2\2\177\u0080\3\2\2\2\u0080\u0081\b\24\2\2\u0081(\3"+
		"\2\2\2\t\2X_fnx|\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}