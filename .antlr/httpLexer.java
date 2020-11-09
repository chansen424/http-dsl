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
		LPAREN=1, RPAREN=2, LBRACE=3, RBRACE=4, COLON=5, COMMA=6, EQUALS=7, LET=8, 
		PRINT=9, GET=10, POST=11, TO=12, FROM=13, NAME=14, INT=15, STRING=16, 
		WS=17, LINE_COMMENT=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LPAREN", "RPAREN", "LBRACE", "RBRACE", "COLON", "COMMA", "EQUALS", "LET", 
			"PRINT", "GET", "POST", "TO", "FROM", "NAME", "INT", "STRING", "WS", 
			"LINE_COMMENT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'{'", "'}'", "':'", "','", "'='", "'let'", "'print'", 
			"'GET'", "'POST'", "'to'", "'from'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LPAREN", "RPAREN", "LBRACE", "RBRACE", "COLON", "COMMA", "EQUALS", 
			"LET", "PRINT", "GET", "POST", "TO", "FROM", "NAME", "INT", "STRING", 
			"WS", "LINE_COMMENT"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\24~\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t"+
		"\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3"+
		"\f\3\f\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17\3\17\7\17S\n\17\f\17"+
		"\16\17V\13\17\3\20\3\20\7\20Z\n\20\f\20\16\20]\13\20\3\21\3\21\7\21a\n"+
		"\21\f\21\16\21d\13\21\3\21\3\21\3\22\6\22i\n\22\r\22\16\22j\3\22\3\22"+
		"\3\23\3\23\3\23\3\23\7\23s\n\23\f\23\16\23v\13\23\3\23\5\23y\n\23\3\23"+
		"\3\23\3\23\3\23\2\2\24\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27"+
		"\r\31\16\33\17\35\20\37\21!\22#\23%\24\3\2\7\4\2C\\c|\3\2\62;\3\2$$\5"+
		"\2\13\f\16\17\"\"\4\2\f\f\17\17\2\u0083\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3"+
		"\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2"+
		"\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35"+
		"\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\3\'\3\2\2\2\5)"+
		"\3\2\2\2\7+\3\2\2\2\t-\3\2\2\2\13/\3\2\2\2\r\61\3\2\2\2\17\63\3\2\2\2"+
		"\21\65\3\2\2\2\239\3\2\2\2\25?\3\2\2\2\27C\3\2\2\2\31H\3\2\2\2\33K\3\2"+
		"\2\2\35P\3\2\2\2\37W\3\2\2\2!^\3\2\2\2#h\3\2\2\2%n\3\2\2\2\'(\7*\2\2("+
		"\4\3\2\2\2)*\7+\2\2*\6\3\2\2\2+,\7}\2\2,\b\3\2\2\2-.\7\177\2\2.\n\3\2"+
		"\2\2/\60\7<\2\2\60\f\3\2\2\2\61\62\7.\2\2\62\16\3\2\2\2\63\64\7?\2\2\64"+
		"\20\3\2\2\2\65\66\7n\2\2\66\67\7g\2\2\678\7v\2\28\22\3\2\2\29:\7r\2\2"+
		":;\7t\2\2;<\7k\2\2<=\7p\2\2=>\7v\2\2>\24\3\2\2\2?@\7I\2\2@A\7G\2\2AB\7"+
		"V\2\2B\26\3\2\2\2CD\7R\2\2DE\7Q\2\2EF\7U\2\2FG\7V\2\2G\30\3\2\2\2HI\7"+
		"v\2\2IJ\7q\2\2J\32\3\2\2\2KL\7h\2\2LM\7t\2\2MN\7q\2\2NO\7o\2\2O\34\3\2"+
		"\2\2PT\t\2\2\2QS\t\2\2\2RQ\3\2\2\2SV\3\2\2\2TR\3\2\2\2TU\3\2\2\2U\36\3"+
		"\2\2\2VT\3\2\2\2W[\t\3\2\2XZ\t\3\2\2YX\3\2\2\2Z]\3\2\2\2[Y\3\2\2\2[\\"+
		"\3\2\2\2\\ \3\2\2\2][\3\2\2\2^b\7$\2\2_a\n\4\2\2`_\3\2\2\2ad\3\2\2\2b"+
		"`\3\2\2\2bc\3\2\2\2ce\3\2\2\2db\3\2\2\2ef\7$\2\2f\"\3\2\2\2gi\t\5\2\2"+
		"hg\3\2\2\2ij\3\2\2\2jh\3\2\2\2jk\3\2\2\2kl\3\2\2\2lm\b\22\2\2m$\3\2\2"+
		"\2no\7\61\2\2op\7\61\2\2pt\3\2\2\2qs\n\6\2\2rq\3\2\2\2sv\3\2\2\2tr\3\2"+
		"\2\2tu\3\2\2\2ux\3\2\2\2vt\3\2\2\2wy\7\17\2\2xw\3\2\2\2xy\3\2\2\2yz\3"+
		"\2\2\2z{\7\f\2\2{|\3\2\2\2|}\b\23\2\2}&\3\2\2\2\t\2T[bjtx\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}