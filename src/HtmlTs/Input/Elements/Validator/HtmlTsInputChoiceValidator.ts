import InterfaceHtmlTsInputValidator from "./InterfaceHtmlTsInputValidator";
import HtmlTsInputValidatorResult from "./HtmlTsInputValidatorResult";
import {HtmlTsInputValidatorBaseTypes} from "./HtmlTsInputValidatorTypes";
import HtmlTsValidate from "../../../Validate/HtmlTsValidate";

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