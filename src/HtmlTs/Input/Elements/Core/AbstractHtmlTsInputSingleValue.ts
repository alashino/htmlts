import HtmlTs from "../../../Core/HtmlTs";
import {HtmlTsInputArgsSingleValueType, HtmlTsInputSingleType, HtmlTsInputStateType} from "./HtmlTsInputType";
import htmlts from "../../../build";
import AbstractHtmlTsInputBase from "./AbstractHtmlTsInputBase";

abstract class AbstractHtmlTsInputSingleValue extends AbstractHtmlTsInputBase<string> {

    init_value: string;

    abstract type: HtmlTsInputSingleType;

    protected args: HtmlTsInputArgsSingleValueType;

    constructor(args: HtmlTsInputArgsSingleValueType) {
        super(args);
        this.args = args;
        this.name = args.name;
        this.init_value = (args.value === undefined) ? "" : args.value + "";
    }

    protected build(): void {
        this.input = this.createInput();
        if (this.args.name !== undefined) this.input.setAttr("name", this.args.name);
        if (this.args.value !== undefined) this.set(this.args.value);
        this.changeState(this.state);
        this.setOnChange();
        this.html = this.input;
    }

    protected setOnChange() {
        this.input.on("change", (html) => {
            console.log("changed");
        });
    }

    protected createInput(): HtmlTs {
        return htmlts.create("input", {
            attr: {
                "type": this.type,
            },
        });
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