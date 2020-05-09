import HtmlTsDictionary, {AbstractHtmlTsDictionary, HtmlTsDictionaryType} from "../Core/HtmlTsDictionary";

class HtmlTsInputDictionaryClass extends AbstractHtmlTsDictionary {
    protected category: string = "input";

    dictionary: { [p: string]: HtmlTsDictionaryType } = {
        "ja": {
            "isNotNull": "入力必須項目です",
            "isNumber": "数値で入力してください",
            "isDecimal": "整数で入力してください",
            "isFloat": "少数で入力してください",
            "isLengthOrMoreText": "%s文字以上で入力してください",
            "isLengthOrLessText": "%s文字以下で入力してください",
            // choice
            "choiceIsNotNull": "選択必須項目です",
            "choiceMinSelect": "%s個以上選択してください",
            "choiceMaxSelect": "%s個以下で選択してください",
        },
        "en": {
            "isNotNull": "This Field is Required",
            "isNumber": "入力必須項目です",
            "isDecimal": "入力必須項目です",
            "isFloat": "入力必須項目です",
            "isLengthOrMoreText": "%s文字以上で入力してください",
            "isLengthOrLessText": "%s文字以下で入力してください",
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