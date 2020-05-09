import InterfaceHtmlTsInputDecorator from "./InterfaceHtmlTsInputDecorator";
import HtmlTs from "../../../Core/HtmlTs";
import InterfaceHtmlTsInput from "../../Elements/Core/InterfaceHtmlTsInput";
import {
    HtmlTsInputDecoratorBaseTypes,
    HtmlTsInputDecoratorChoiceTypes,
    HtmlTsInputDecoratorTextTypes
} from "./HtmlTsInputDecoratorTypes";
import htmlts from "../../../build";
import HtmlTsInputValidatorResult from "../../Validator/Core/HtmlTsInputValidatorResult";

abstract class AbstractHtmlTsInputDecorator<T extends HtmlTsInputDecoratorBaseTypes | HtmlTsInputDecoratorTextTypes | HtmlTsInputDecoratorChoiceTypes> implements InterfaceHtmlTsInputDecorator {

    protected params: T | undefined;

    constructor(params?: T) {
        this.params = params;
    }

    abstract createHtml(htmlTsInput: InterfaceHtmlTsInput<string | string[]>): HtmlTs;

    abstract validateHtmlThen(htmlTsInput: InterfaceHtmlTsInput<string | string[]>, validateResult: HtmlTsInputValidatorResult): void;

    protected createLabel(htmlTsInput: InterfaceHtmlTsInput<string | string[]>): HtmlTs | undefined {
        if (htmlTsInput.labelContent === undefined) return undefined;
        return htmlts.create("label", {
            content: htmlTsInput.labelContent,
        });
    }

    protected createHelpText(htmlTsInput: InterfaceHtmlTsInput<string | string[]>): HtmlTs | undefined {
        if (htmlTsInput.helpTextContent === undefined) return undefined;
        return htmlts.create("small", {
            content: htmlTsInput.helpTextContent,
        });
    }

}

export default AbstractHtmlTsInputDecorator;