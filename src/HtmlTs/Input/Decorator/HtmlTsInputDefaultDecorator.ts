import AbstractHtmlTsInputDecorator from "./AbstractHtmlTsInputDecorator";
import HtmlTs from "../../Core/HtmlTs";
import InterfaceHtmlTsInput from "../Elements/Core/InterfaceHtmlTsInput";
import {HtmlTsInputDecoratorBaseTypes} from "./HtmlTsInputDecoratorTypes";
import htmlts from "../../build";


class HtmlTsInputDefaultDecorator extends AbstractHtmlTsInputDecorator<HtmlTsInputDecoratorBaseTypes> {

    createHtml(htmlTsInput: InterfaceHtmlTsInput<any>): HtmlTs {
        return htmlts.create("div", {
            content: [
                this.createLabel(htmlTsInput),
                htmlTsInput.input,
                this.createHelpText(htmlTsInput),
            ],
        });
    }

}

export default HtmlTsInputDefaultDecorator;