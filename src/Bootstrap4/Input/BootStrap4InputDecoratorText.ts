import {
    HtmlTsInputDecoratorTextTypes
} from "../../HtmlTs/Input/Decorator/Core/HtmlTsInputDecoratorTypes";
import HtmlTs from "../../HtmlTs/Core/HtmlTs";
import htmlts from "../../HtmlTs/build";
import AbstractBootStrap4InputDecorator from "./AbstractBootStrap4InputDecorator";
import InterfaceHtmlTsInput from "../../HtmlTs/Input/Elements/Core/InterfaceHtmlTsInput";

class BootStrap4InputDecoratorText extends AbstractBootStrap4InputDecorator<HtmlTsInputDecoratorTextTypes> {

    protected params: HtmlTsInputDecoratorTextTypes;

    constructor(params: HtmlTsInputDecoratorTextTypes = undefined) {
        super(params);
    }

    protected createInput(htmlTsInput: InterfaceHtmlTsInput<any>): HtmlTs {
        htmlTsInput.input.addClass("form-control");
        if (
            this.params !== undefined &&
            (
                this.params.addonLeft !== undefined ||
                this.params.addonRight !== undefined ||
                this.params.size !== undefined ||
                this.params.inputColumnSize !== undefined
            )
        ) {
            return htmlts.create("div", {
                class: this.getInputGroupClassName(),
                content: [
                    this.createInputAddon("input-group-prepend", this.params.addonLeft),
                    htmlTsInput.input,
                    this.createInputAddon("input-group-append", this.params.addonRight),
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

    private createInputAddon(inputGroupClassName: string, content: string | HtmlTs): HtmlTs | undefined {
        if (content === undefined) return undefined;
        return htmlts.create("div", {
            class: inputGroupClassName,
            content: htmlts.create("span", {
                class: "input-group-text",
                content: content,
            }),
        });
    }
}

export default BootStrap4InputDecoratorText;
