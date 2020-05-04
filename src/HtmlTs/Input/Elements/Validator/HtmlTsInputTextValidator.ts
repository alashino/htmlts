import {HtmlTsInputTextValidatorType} from "./HtmlTsInputValidatorTypes";
import HtmlTsInputValidatorResult from "./HtmlTsInputValidatorResult";
import InterfaceHtmlTsInputValidator from "./InterfaceHtmlTsInputValidator";


class HtmlTsInputTextValidator implements InterfaceHtmlTsInputValidator<string> {

    params: HtmlTsInputTextValidatorType;

    constructor(params: HtmlTsInputTextValidatorType) {
        this.params = params;
    }

    validate(value: string): HtmlTsInputValidatorResult {
        const result = new HtmlTsInputValidatorResult();
        return result;
    }

}

export default HtmlTsInputTextValidator;