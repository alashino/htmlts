import AbstractHtmlTsInputDecorator from "../Core/AbstractHtmlTsInputDecorator";
import HtmlTs from "../../../Core/HtmlTs";
import InterfaceHtmlTsInput from "../../Elements/Core/InterfaceHtmlTsInput";
import {HtmlTsInputDecoratorBaseTypes} from "../Core/HtmlTsInputDecoratorTypes";
import htmlts from "../../../build";
import HtmlTsInputValidatorResult from "../../Validator/Core/HtmlTsInputValidatorResult";


class HtmlTsInputDefaultDecorator extends AbstractHtmlTsInputDecorator<HtmlTsInputDecoratorBaseTypes> {

    createHtml(htmlTsInput: InterfaceHtmlTsInput<any>): HtmlTs {
        return htmlts.create("div", {
            content: [
                this.createLabel(htmlTsInput),
                htmlTsInput.input,
                htmlts.create("div", this.createHelpText(htmlTsInput)),
                htmlTsInput.validation,
            ],
        });
    }

    validateHtmlThen(htmlTsInput: InterfaceHtmlTsInput<string | string[]>, validateResult: HtmlTsInputValidatorResult): void {
        htmlTsInput.validation.empty();
        if (!validateResult.result) {
            validateResult.messages.forEach((message) => {
                htmlTsInput.validation.append(
                    htmlts.create("p", message)
                );
            });
        }
    }

}

export default HtmlTsInputDefaultDecorator;