import {
    HtmlTsInputCustomValidateRule,
    HtmlTsInputTextValidatorMapType,
    HtmlTsInputValidatorBaseTypes
} from "./Core/HtmlTsInputValidatorTypes";
import HtmlTsInputValidatorResult from "./Core/HtmlTsInputValidatorResult";
import AbstractHtmlTsInputValidator from "./Core/AbstractHtmlTsInputValidator";
import HtmlTsValidateText from "../../Validate/HtmlTsValidateText";
import HtmlTsInputDictionary from "../HtmlTsInputDictionary";


export interface HtmlTsInputTextValidatorType extends HtmlTsInputValidatorBaseTypes<string> {
    // 自動でテスト
    isNotNull?: boolean;
    isNumber?: boolean;
    isDecimal?: boolean;
    isFloat?: boolean;
    isAlphabet?: boolean;
    isAlphabetUppercase?: boolean;
    isAlphabetLowercase?: boolean;
    isAlphanumeric?: boolean;
    isSymbol?: boolean;
    isPassword?: boolean;
    isUrl?: boolean;
    isEmail?: boolean;
    // 手動でテスト
    isLengthOrMore?: number;
    isLengthOrLess?: number;
    isByteOrMore?: number;
    isByteOrLess?: number;
    isNumberOrMore?: number;
    isNumberOrLess?: number;
    isIncludeDigitOrMore?: number;
    isIncludeSymbolOrMore?: number;
    isInList?: string[];
    isNotInList?: string[];
    isMatchRegexp?: string;
}

class HtmlTsInputTextValidator extends AbstractHtmlTsInputValidator<string> {

    protected keys: string[] = [
        "isNotNull",
        "isNumber",
        "isDecimal",
        "isFloat",
        "isAlphabet",
        "isAlphabetUppercase",
        "isAlphabetLowercase",
        "isAlphanumeric",
        "isSymbol",
        "isFloat",
        "isUrl",
        "isEmail",
    ];

    protected map: { [p: string]: HtmlTsInputTextValidatorMapType<string> } = {
        isNotNull: {
            func: HtmlTsValidateText.isNotNull,
            wordKey: "isNotNull",
        },
        isNumber: {
            func: HtmlTsValidateText.isNumber,
            wordKey: "isNumber",
        },
        isDecimal: {
            func: HtmlTsValidateText.isDecimal,
            wordKey: "isDecimal",
        },
        isFloat: {
            func: HtmlTsValidateText.isFloat,
            wordKey: "isFloat",
        },
        isAlphabet: {
            func: HtmlTsValidateText.isAlphabet,
            wordKey: "isAlphabet",
        },
        isAlphabetUppercase: {
            func: HtmlTsValidateText.isAlphabetUppercase,
            wordKey: "isAlphabetUppercase",
        },
        isAlphabetLowercase: {
            func: HtmlTsValidateText.isAlphabetLowercase,
            wordKey: "isAlphabetLowercase",
        },
        isAlphanumeric: {
            func: HtmlTsValidateText.isAlphanumeric,
            wordKey: "isAlphanumeric",
        },
        isSymbol: {
            func: HtmlTsValidateText.isSymbol,
            wordKey: "isSymbol",
        },
        isPassword: {
            func: HtmlTsValidateText.isPassword,
            wordKey: "isPassword",
        },
        isUrl: {
            func: HtmlTsValidateText.isUrl,
            wordKey: "isUrl",
        },
        isEmail: {
            func: HtmlTsValidateText.isEmail,
            wordKey: "isEmail",
        },
    };

    protected isTest: { [key: string]: boolean } = {
        "isNotNull": false,
        "isNumber": false,
        "isDecimal": false,
        "isFloat": false,
        "isAlphabet": false,
        "isAlphabetUppercase": false,
        "isAlphabetLowercase": false,
        "isAlphanumeric": false,
        "isSymbol": false,
        "isPassword": false,
        "isUrl": false,
        "isEmail": false,
    };

    protected params: HtmlTsInputTextValidatorType;

    constructor(params: HtmlTsInputTextValidatorType) {
        super(params);
        if (this.params === undefined) return;
        if (this.params.isNotNull !== undefined) this.isTest["isNotNull"] = this.params.isNotNull;
        if (this.params.isNumber !== undefined) this.isTest["isNumber"] = this.params.isNumber;
        if (this.params.isDecimal !== undefined) this.isTest["isDecimal"] = this.params.isDecimal;
        if (this.params.isFloat !== undefined) this.isTest["isFloat"] = this.params.isFloat;
        if (this.params.isAlphabet !== undefined) this.isTest["isAlphabet"] = this.params.isAlphabet;
        if (this.params.isAlphabetUppercase !== undefined) this.isTest["isAlphabetUppercase"] = this.params.isAlphabetUppercase;
        if (this.params.isAlphabetLowercase !== undefined) this.isTest["isAlphabetLowercase"] = this.params.isAlphabetLowercase;
        if (this.params.isAlphanumeric !== undefined) this.isTest["isAlphanumeric"] = this.params.isAlphanumeric;
        if (this.params.isSymbol !== undefined) this.isTest["isSymbol"] = this.params.isSymbol;
        if (this.params.isPassword !== undefined) this.isTest["isPassword"] = this.params.isPassword;
        if (this.params.isUrl !== undefined) this.isTest["isUrl"] = this.params.isUrl;
        if (this.params.isEmail !== undefined) this.isTest["isEmail"] = this.params.isEmail;
    }

    validate(value: string): HtmlTsInputValidatorResult {
        const results = super.validate(value);
        if (this.params === undefined) return results;
        // isLengthOrMore
        if (this.params.isLengthOrMore !== undefined) {
            results.append(
                HtmlTsValidateText.isLengthOrMore(value, this.params.isLengthOrMore),
                HtmlTsInputDictionary.get("isLengthOrMore").replace("%s", this.params.isLengthOrMore.toString())
            );
        }
        // isLengthOrLess
        if (this.params.isLengthOrLess !== undefined) {
            results.append(
                HtmlTsValidateText.isLengthOrLess(value, this.params.isLengthOrLess),
                HtmlTsInputDictionary.get("isLengthOrLess").replace("%s", this.params.isLengthOrLess.toString())
            );
        }
        // isByteOrMore
        if (this.params.isByteOrMore !== undefined) {
            results.append(
                HtmlTsValidateText.isByteOrMore(value, this.params.isByteOrMore),
                HtmlTsInputDictionary.get("isByteOrMore").replace("%s", this.params.isByteOrMore.toString())
            );
        }
        // isByteOrLess
        if (this.params.isByteOrLess !== undefined) {
            results.append(
                HtmlTsValidateText.isByteOrLess(value, this.params.isByteOrLess),
                HtmlTsInputDictionary.get("isByteOrLess").replace("%s", this.params.isByteOrLess.toString())
            );
        }
        // isNumberOrMore
        if (this.params.isNumberOrMore !== undefined) {
            results.append(
                HtmlTsValidateText.isNumberOrMore(value, this.params.isNumberOrMore),
                HtmlTsInputDictionary.get("isNumberOrMore").replace("%s", this.params.isNumberOrMore.toString())
            );
        }
        // isNumberOrLess
        if (this.params.isNumberOrLess !== undefined) {
            results.append(
                HtmlTsValidateText.isNumberOrLess(value, this.params.isNumberOrLess),
                HtmlTsInputDictionary.get("isNumberOrLess").replace("%s", this.params.isNumberOrLess.toString())
            );
        }
        // isIncludeDigitOrMore
        if (this.params.isIncludeDigitOrMore !== undefined) {
            results.append(
                HtmlTsValidateText.isIncludeDigitOrMore(value, this.params.isIncludeDigitOrMore),
                HtmlTsInputDictionary.get("isIncludeDigitOrMore").replace("%s", this.params.isIncludeDigitOrMore.toString())
            );
        }
        // isIncludeSymbolOrMore
        if (this.params.isIncludeSymbolOrMore !== undefined) {
            results.append(
                HtmlTsValidateText.isIncludeSymbolOrMore(value, this.params.isIncludeSymbolOrMore),
                HtmlTsInputDictionary.get("isIncludeSymbolOrMore").replace("%s", this.params.isIncludeSymbolOrMore.toString())
            );
        }
        // isInList
        if (this.params.isInList !== undefined && this.params.isInList.length > 0) {
            results.append(
                HtmlTsValidateText.isInList(value, this.params.isInList),
                HtmlTsInputDictionary.get("isInList")
            );
        }
        // isMatchRegexp
        if (this.params.isMatchRegexp !== undefined && this.params.isMatchRegexp !== "") {
            results.append(
                HtmlTsValidateText.isMatchRegexp(value, this.params.isMatchRegexp),
                HtmlTsInputDictionary.get("isMatchRegexp").replace("%s", this.params.isMatchRegexp)
            );
        }
        return results;
    }

}

export default HtmlTsInputTextValidator;