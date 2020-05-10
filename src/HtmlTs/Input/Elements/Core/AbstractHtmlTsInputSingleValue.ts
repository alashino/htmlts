import HtmlTs from "../../../Core/HtmlTs";
import {HtmlTsInputArgsSingleValueType, HtmlTsInputSingleType, HtmlTsInputStateType} from "./HtmlTsInputType";
import htmlts from "../../../build";
import AbstractHtmlTsInputBase from "./AbstractHtmlTsInputBase";
import InterfaceHtmlTsInputValidator from "../../Validator/Core/InterfaceHtmlTsInputValidator";
import InterfaceHtmlTsInputDecoratorSet from "../../Decorator/Core/InterfaceHtmlTsInputDecoratorSet";
import InterfaceHtmlTsInputDecorator from "../../Decorator/Core/InterfaceHtmlTsInputDecorator";

abstract class AbstractHtmlTsInputSingleValue extends AbstractHtmlTsInputBase<string> {

    init_value: string;

    abstract type: HtmlTsInputSingleType;
    protected abstract validator: InterfaceHtmlTsInputValidator<string>;

    protected args: HtmlTsInputArgsSingleValueType;

    protected constructor(args: HtmlTsInputArgsSingleValueType) {
        super(args);
        this.args = args;
        this.name = args.name;
        this.init_value = (args.value === undefined) ? "" : args.value + "";
    }

    protected abstract getDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): InterfaceHtmlTsInputDecorator;

    protected createInput(): HtmlTs {
        const input = htmlts.create("input", {
            attr: {
                "type": this.type,
            },
        });
        if (this.name !== undefined) {
            input.setAttr("name", this.name);
        }
        return input;
    }

    clear(): void {
        this.set("");
    }

    set(value: string): void {
        // @ts-ignore
        this.input.htmlElement.value = value;
    }

    value(): string {
        // @ts-ignore
        return this.input.htmlElement.value;
    }

}

export default AbstractHtmlTsInputSingleValue;