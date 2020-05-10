import {
    HtmlTsInputDecoratorBaseTypes,
    HtmlTsInputDecoratorTextTypes
} from "../../HtmlTs/Input/Decorator/Core/HtmlTsInputDecoratorTypes";
import HtmlTs from "../../HtmlTs/Core/HtmlTs";
import htmlts from "../../HtmlTs/build";
import AbstractBootStrap4InputDecorator from "./AbstractBootStrap4InputDecorator";
import InterfaceHtmlTsInput from "../../HtmlTs/Input/Elements/Core/InterfaceHtmlTsInput";

class BootStrap4InputDecoratorSelect extends AbstractBootStrap4InputDecorator<HtmlTsInputDecoratorBaseTypes> {

    protected params: HtmlTsInputDecoratorBaseTypes;

    constructor(params: HtmlTsInputDecoratorBaseTypes = undefined) {
        super(params);
    }

    protected createInput(htmlTsInput: InterfaceHtmlTsInput<any>): HtmlTs {
        htmlTsInput.input.addClass("form-control");
        if (
            this.params !== undefined &&
            (
                this.params.size !== undefined ||
                this.params.inputColumnSize !== undefined
            )
        ) {
            return htmlts.create("div", {
                class: this.getInputGroupClassName(),
                content: [
                    htmlTsInput.input,
                    htmlTsInput.validation,
                ],
            });
        } else {
            return htmlts.create("div", {
                content: [
                    htmlTsInput.input,
                    htmlTsInput.validation,
                ],
            });
        }
    }

}

export default BootStrap4InputDecoratorSelect;
