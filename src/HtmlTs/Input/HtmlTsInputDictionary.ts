import HtmlTsDictionary, {AbstractHtmlTsDictionary, HtmlTsDictionaryType} from "../Core/HtmlTsDictionary";

class HtmlTsInputDictionaryClass extends AbstractHtmlTsDictionary {

    protected category: string = "input";

    dictionary: { [p: string]: HtmlTsDictionaryType } = {
        "ja": {
            "isNotNull": "入力必須項目です",
            "isNumber": "数値で入力してください",
            "isDecimal": "整数で入力してください",
            "isFloat": "小数で入力してください",
            "isAlphabet": "英字のみで入力してください",
            "isAlphabetUppercase": "大文字の英字のみで入力してください",
            "isAlphabetLowercase": "小文字の英字のみで入力してください",
            "isAlphanumeric": "英数字のみで入力してください",
            "isSymbol": "記号のみで入力してください",
            "isPassword": "パスワードの形式で入力してください",
            "isUrl": "URLの形式で入力してください",
            "isEmail": "メールアドレスの形式で入力してください",
            "isLengthOrMore": "%s文字以上で入力してください",
            "isLengthOrLess": "%s文字以下で入力してください",
            "isByteOrMore": "%sByte以上で入力してください",
            "isByteOrLess": "%sByte以下で入力してください",
            "isNumberOrMore": "%s以上の数値で入力してください",
            "isNumberOrLess": "%s以下の数値で入力してください",
            "isIncludeDigitOrMore": "%s文字以上の数値を含めてください",
            "isIncludeSymbolOrMore": "%s文字以上の記号を含めてください",
            "isInList": "不正な入力値です",
            "isNotInList": "不正な入力値です",
            "isMatchRegexp": "不正な入力値です(%s)",
            // choice
            "choiceIsNotNull": "選択必須項目です",
            "choiceMinSelect": "%s個以上選択してください",
            "choiceMaxSelect": "%s個以下で選択してください",
        },
        "en": {
            "isNotNull": "This Field is Required",
            "isNumber": "数値で入力してください",
            "isDecimal": "整数で入力してください",
            "isFloat": "小数で入力してください",
            "isAlphabet": "英字のみで入力してください",
            "isAlphabetUppercase": "大文字の英字のみで入力してください",
            "isAlphabetLowercase": "小文字の英字のみで入力してください",
            "isAlphanumeric": "英数字のみで入力してください",
            "isSymbol": "記号のみで入力してください",
            "isPassword": "パスワードの形式で入力してください",
            "isUrl": "URLの形式で入力してください",
            "isEmail": "メールアドレスの形式で入力してください",
            "isLengthOrMore": "%s文字以上で入力してください",
            "isLengthOrLess": "%s文字以下で入力してください",
            "isByteOrMore": "%sByte以上で入力してください",
            "isByteOrLess": "%sByte以下で入力してください",
            "isNumberOrMore": "%s以上の数値で入力してください",
            "isNumberOrLess": "%s以下の数値で入力してください",
            "isIncludeDigitOrMore": "%s文字以上の数値を含めてください",
            "isIncludeSymbolOrMore": "%s文字以上の記号を含めてください",
            "isInList": "不正な入力値です",
            "isNotInList": "不正な入力値です",
            "isMatchRegexp": "不正な入力値です(%s)",
            // choice
            "choiceIsNotNull": "選択必須項目です",
            "choiceMinSelect": "%s個以上選択してください",
            "choiceMaxSelect": "%s個以下で選択してください",
        },
    };

}

const HtmlTsInputDictionary = new HtmlTsInputDictionaryClass();

// 辞書の登録
HtmlTsDictionary.subscribe(HtmlTsInputDictionary);


export default HtmlTsInputDictionary;