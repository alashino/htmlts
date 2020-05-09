import InterfaceHtmlTsInputValidator from "./Core/InterfaceHtmlTsInputValidator";
import HtmlTsInputValidatorResult from "./Core/HtmlTsInputValidatorResult";
import {HtmlTsInputValidatorBaseTypes} from "./Core/HtmlTsInputValidatorTypes";
import HtmlTsValidate from "../../Validate/HtmlTsValidate";

export interface HtmlTsInputTextValidatorType extends HtmlTsInputValidatorBaseTypes {
    // 自動でテスト
    isNotNull?: boolean;
    // 手動でテスト
    minSelect?: number;
    maxSelect?: number;
}

class HtmlTsInputChoiceValidator implements InterfaceHtmlTsInputValidator<string | string[]>{

    private params: HtmlTsInputValidatorBaseTypes;

    constructor(params: HtmlTsInputValidatorBaseTypes) {
        this.params = params;
    }

    validate(value: string | string[]): HtmlTsInputValidatorResult {
        const result = new HtmlTsInputValidatorResult();
        if (this.params.isNotNull !== undefined) result.append(HtmlTsValidate.isNotNull(value), "一つ以上選択してください");
        return result;
    }

}

export default HtmlTsInputChoiceValidator;