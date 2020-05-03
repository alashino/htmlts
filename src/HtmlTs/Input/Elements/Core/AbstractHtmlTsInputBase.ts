import InterfaceHtmlTsInput from "./InterfaceHtmlTsInput";
import HtmlTs from "../../../Core/HtmlTs";
import {
    HtmlTsInputArgsBaseType,
    HtmlTsInputArgsSingleValueType,
    HtmlTsInputSingleType, HtmlTsInputStateType,
    HtmlTsInputType
} from "./HtmlTsInputType";
import htmlts from "../../../build";

abstract class AbstractHtmlTsInputBase<T> implements InterfaceHtmlTsInput<T> {

    name: string;

    html: HtmlTs;
    input: HtmlTs;
    label: HtmlTs;
    validation: HtmlTs;

    abstract type: HtmlTsInputType;

    state: HtmlTsInputStateType;

    init_value: T;

    protected constructor(args: HtmlTsInputArgsBaseType<T>) {
        this.name = args.name;
        this.state = args.state || "enable";
    }

    protected abstract build(): void;

    abstract set(value: T): void;

    reset(): void {
        this.set(this.init_value);
    }

    abstract clear(): void;

    abstract value(): T;

    abstract validate(): boolean;

    //
    // state
    //
    isEnable(): boolean {
        return this.state === "enable";
    }

    isReadOnly(): boolean {
        return this.state === "readonly";
    }

    isDisabled(): boolean {
        return (this.state === "disabled");
    }

    changeState(state: HtmlTsInputStateType): void {
        this.state = state;
        switch (state) {
            case "enable":
                this.input.removeAttr(["readonly", "disabled"]);
                break;
            case "readonly":
                this.input.removeAttr(["disabled"]);
                this.input.setAttr("readonly", "true");
                break;
            case "disabled":
                this.input.removeAttr(["readonly"]);
                this.input.setAttr("disabled", "true");
                break;
        }
    }

    rotateState(): void {
        switch (this.state) {
            case "enable":
                this.changeState("readonly");
                break;
            case "readonly":
                this.changeState("disabled");
                break;
            case "disabled":
                this.changeState("enable");
                break;
            default:
                this.changeState("enable");
        }
    }
}

export default AbstractHtmlTsInputBase;