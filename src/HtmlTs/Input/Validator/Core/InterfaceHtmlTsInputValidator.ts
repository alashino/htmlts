import HtmlTsInputValidatorResult from "./HtmlTsInputValidatorResult";

interface InterfaceHtmlTsInputValidator<T extends string | string[]> {

    validate(value: T): HtmlTsInputValidatorResult;

}

export default InterfaceHtmlTsInputValidator;