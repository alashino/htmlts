import {
    HtmlTsInputTextValidatorMapType,
    HtmlTsInputValidatorBaseTypes
} from "./Core/HtmlTsInputValidatorTypes";
import HtmlTsInputValidatorResult from "./Core/HtmlTsInputValidatorResult";
import AbstractHtmlTsInputValidator from "./Core/AbstractHtmlTsInputValidator";
import HtmlTsValidateText from "../../Validate/HtmlTsValidateText";
import HtmlTsInputDictionary from "../HtmlTsInputDictionary";


export interface HtmlTsInputTextValidatorType extends HtmlTsInputValidatorBaseTypes {
// 自動でテスト
    isNotNull?: boolean;
    isNumber?: boolean;
    isDecimal?: boolean;
    isFloat?: boolean;
    // 手動でテスト
    isLengthOrMore?: number;
    isLengthOrLess?: number;
    inList?: string[];
}

class HtmlTsInputTextValidator extends AbstractHtmlTsInputValidator<string> {

    protected keys: string[] = [
        "isNotNull",
        "isNumber",
        "isDecimal",
        "isFloat",
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
    };

    protected isTest: { [key: string]: boolean } = {
        "isNotNull": false,
        "isNumber": false,
        "isDecimal": false,
        "isFloat": false,
    };

    private params: HtmlTsInputTextValidatorType;

    constructor(params: HtmlTsInputTextValidatorType) {
        super();
        this.params = params;
        if (this.params === undefined) return;
        if (this.params.isNotNull !== undefined) this.isTest["isNotNull"] = this.params.isNotNull;
        if (this.params.isNumber !== undefined) this.isTest["isNumber"] = this.params.isNumber;
        if (this.params.isDecimal !== undefined) this.isTest["isDecimal"] = this.params.isDecimal;
        if (this.params.isFloat !== undefined) this.isTest["isFloat"] = this.params.isFloat;
    }

    validate(value: string): HtmlTsInputValidatorResult {
        const results = super.validate(value);
        if (this.params === undefined) return results;
        if (this.params.isLengthOrMore !== undefined) {
            results.append(
                HtmlTsValidateText.isLengthOrMore(value, this.params.isLengthOrMore),
                HtmlTsInputDictionary.get("isLengthOrMoreText").replace("%s", this.params.isLengthOrMore.toString())
            );
        }
        if (this.params.isLengthOrLess !== undefined) {
            results.append(
                HtmlTsValidateText.isLengthOrLess(value, this.params.isLengthOrLess),
                HtmlTsInputDictionary.get("isLengthOrLessText").replace("%s", this.params.isLengthOrLess.toString())
            );
        }
        if (this.params.inList !== undefined && this.params.inList.length > 0) {
            // todo
        }
        return results;
    }

}

export default HtmlTsInputTextValidator;