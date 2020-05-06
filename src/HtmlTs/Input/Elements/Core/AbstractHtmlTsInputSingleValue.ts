import HtmlTs from "../../../Core/HtmlTs";
import {HtmlTsInputArgsSingleValueType, HtmlTsInputSingleType, HtmlTsInputStateType} from "./HtmlTsInputType";
import htmlts from "../../../build";
import AbstractHtmlTsInputBase from "./AbstractHtmlTsInputBase";
import InterfaceHtmlTsInputValidator from "../Validator/InterfaceHtmlTsInputValidator";
import InterfaceHtmlTsInputDecoratorSet from "../../Decorator/InterfaceHtmlTsInputDecoratorSet";

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

    protected abstract getHtmlByDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): HtmlTs;

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
        this.input.setAttr("value", value);
    }

    value(): string {
        return this.input.getAttr("value");
    }

    validate(): boolean {
        const result: boolean = true;
        // todo 実装
        return result;
    }

}

export default AbstractHtmlTsInputSingleValue;