import HtmlTsInputValidatorResult from "./Core/HtmlTsInputValidatorResult";
import {HtmlTsInputTextValidatorMapType, HtmlTsInputValidatorBaseTypes} from "./Core/HtmlTsInputValidatorTypes";
import HtmlTsValidateArray from "../../Validate/HtmlTsValidateArray";
import AbstractHtmlTsInputValidator from "./Core/AbstractHtmlTsInputValidator";
import HtmlTsInputDictionary from "../HtmlTsInputDictionary";

export interface HtmlTsInputChoiceValidatorMultiType extends HtmlTsInputValidatorBaseTypes {
    // 自動でテスト
    isNotNull?: boolean;
    // 手動でテスト
    minSelect?: number;
    maxSelect?: number;
}

class HtmlTsInputChoiceValidatorMulti extends AbstractHtmlTsInputValidator<string[]>{

    protected keys: string[] = [
        "isNotNull",
    ];
    protected map: { [p: string]: HtmlTsInputTextValidatorMapType<string[]> } = {
        isNotNull: {
            func: HtmlTsValidateArray.isNotNull,
            wordKey: "choiceIsNotNull",
        },
    };
    protected isTest: { [p: string]: boolean } = {
        "isNotNull": false,
    };

    private readonly params: HtmlTsInputChoiceValidatorMultiType;

    constructor(params: HtmlTsInputChoiceValidatorMultiType) {
        super();
        this.params = params;
        if (this.params === undefined) return;
        if (this.params.isNotNull !== undefined) this.isTest["isNotNull"] = this.params.isNotNull;
    }

    validate(value: string[]): HtmlTsInputValidatorResult {
        const result =  super.validate(value);
        if (this.params === undefined) return result;
        if (this.params.minSelect !== undefined) {
            result.append(
                HtmlTsValidateArray.minSelect(value, this.params.minSelect),
                HtmlTsInputDictionary.get("choiceMinSelect").replace("%s", this.params.minSelect.toString())
            )
        }
        if (this.params.maxSelect !== undefined) {
            result.append(
                HtmlTsValidateArray.maxSelect(value, this.params.maxSelect),
                HtmlTsInputDictionary.get("choiceMaxSelect").replace("%s", this.params.maxSelect.toString())
            )
        }
        return result;
    }

}

export default HtmlTsInputChoiceValidatorMulti;
