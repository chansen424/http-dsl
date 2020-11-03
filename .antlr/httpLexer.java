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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		JSON=10, PAIR=11, NAME=12, KEY=13, VAR=14, VALUE=15, INT=16, STRING=17, 
		WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"JSON", "PAIR", "NAME", "KEY", "VAR", "VALUE", "INT", "STRING", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'let'", "'='", "'print'", "'('", "')'", "'GET'", "'from'", "'POST'", 
			"'to'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "JSON", "PAIR", 
			"NAME", "KEY", "VAR", "VALUE", "INT", "STRING", "WS"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\24\u0082\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3"+
		"\5\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n"+
		"\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\7\13O\n\13\f\13\16\13R\13\13\3"+
		"\13\3\13\5\13V\n\13\3\f\3\f\3\f\3\f\3\r\3\r\7\r^\n\r\f\r\16\ra\13\r\3"+
		"\16\3\16\3\17\3\17\3\20\3\20\3\20\5\20j\n\20\3\21\3\21\7\21n\n\21\f\21"+
		"\16\21q\13\21\3\22\3\22\7\22u\n\22\f\22\16\22x\13\22\3\22\3\22\3\23\6"+
		"\23}\n\23\r\23\16\23~\3\23\3\23\2\2\24\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21"+
		"\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\3\2\6\4\2C\\c|"+
		"\3\2\62;\3\2$$\5\2\13\f\16\17\"\"\2\u0089\2\3\3\2\2\2\2\5\3\2\2\2\2\7"+
		"\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2"+
		"\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2"+
		"\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\3\'\3\2\2\2"+
		"\5+\3\2\2\2\7-\3\2\2\2\t\63\3\2\2\2\13\65\3\2\2\2\r\67\3\2\2\2\17;\3\2"+
		"\2\2\21@\3\2\2\2\23E\3\2\2\2\25U\3\2\2\2\27W\3\2\2\2\31[\3\2\2\2\33b\3"+
		"\2\2\2\35d\3\2\2\2\37i\3\2\2\2!k\3\2\2\2#r\3\2\2\2%|\3\2\2\2\'(\7n\2\2"+
		"()\7g\2\2)*\7v\2\2*\4\3\2\2\2+,\7?\2\2,\6\3\2\2\2-.\7r\2\2./\7t\2\2/\60"+
		"\7k\2\2\60\61\7p\2\2\61\62\7v\2\2\62\b\3\2\2\2\63\64\7*\2\2\64\n\3\2\2"+
		"\2\65\66\7+\2\2\66\f\3\2\2\2\678\7I\2\289\7G\2\29:\7V\2\2:\16\3\2\2\2"+
		";<\7h\2\2<=\7t\2\2=>\7q\2\2>?\7o\2\2?\20\3\2\2\2@A\7R\2\2AB\7Q\2\2BC\7"+
		"U\2\2CD\7V\2\2D\22\3\2\2\2EF\7v\2\2FG\7q\2\2G\24\3\2\2\2HI\7}\2\2IV\7"+
		"\177\2\2JK\7}\2\2KP\5\27\f\2LM\7.\2\2MO\5\27\f\2NL\3\2\2\2OR\3\2\2\2P"+
		"N\3\2\2\2PQ\3\2\2\2QS\3\2\2\2RP\3\2\2\2ST\7\177\2\2TV\3\2\2\2UH\3\2\2"+
		"\2UJ\3\2\2\2V\26\3\2\2\2WX\5\33\16\2XY\7<\2\2YZ\5\37\20\2Z\30\3\2\2\2"+
		"[_\t\2\2\2\\^\t\2\2\2]\\\3\2\2\2^a\3\2\2\2_]\3\2\2\2_`\3\2\2\2`\32\3\2"+
		"\2\2a_\3\2\2\2bc\5\31\r\2c\34\3\2\2\2de\5\31\r\2e\36\3\2\2\2fj\5!\21\2"+
		"gj\5#\22\2hj\5\25\13\2if\3\2\2\2ig\3\2\2\2ih\3\2\2\2j \3\2\2\2ko\t\3\2"+
		"\2ln\t\3\2\2ml\3\2\2\2nq\3\2\2\2om\3\2\2\2op\3\2\2\2p\"\3\2\2\2qo\3\2"+
		"\2\2rv\7$\2\2su\n\4\2\2ts\3\2\2\2ux\3\2\2\2vt\3\2\2\2vw\3\2\2\2wy\3\2"+
		"\2\2xv\3\2\2\2yz\7$\2\2z$\3\2\2\2{}\t\5\2\2|{\3\2\2\2}~\3\2\2\2~|\3\2"+
		"\2\2~\177\3\2\2\2\177\u0080\3\2\2\2\u0080\u0081\b\23\2\2\u0081&\3\2\2"+
		"\2\n\2PU_iov~\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}