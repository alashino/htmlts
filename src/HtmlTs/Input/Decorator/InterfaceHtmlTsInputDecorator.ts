import HtmlTs from "../../Core/HtmlTs";
import InterfaceHtmlTsInput from "../Elements/Core/InterfaceHtmlTsInput";

interface InterfaceHtmlTsInputDecorator {

    createHtml(htmlTsInput: InterfaceHtmlTsInput<string | string[]>): HtmlTs;

}

export default InterfaceHtmlTsInputDecorator;