import HtmlTsInputValidatorResult from "./HtmlTsInputValidatorResult";

interface InterfaceHtmlTsInputValidator<T> {

    validate(value: T): HtmlTsInputValidatorResult;

}

export default InterfaceHtmlTsInputValidator;