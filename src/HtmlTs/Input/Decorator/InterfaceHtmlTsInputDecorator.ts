import HtmlTs from "../../Core/HtmlTs";
import InterfaceHtmlTsInput from "../Elements/Core/InterfaceHtmlTsInput";
import HtmlTsInputValidatorResult from "../Elements/Validator/HtmlTsInputValidatorResult";

interface InterfaceHtmlTsInputDecorator {

    createHtml(htmlTsInput: InterfaceHtmlTsInput<string | string[]>): HtmlTs;

    validateHtmlThen(htmlTsInput: InterfaceHtmlTsInput<string | string[]>, validateResult: HtmlTsInputValidatorResult): void;

}

export default InterfaceHtmlTsInputDecorator;