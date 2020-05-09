import InterfaceHtmlTsInput from "./InterfaceHtmlTsInput";
import HtmlTs from "../../../Core/HtmlTs";
import {
    HtmlTsInputArgsBaseType, HtmlTsInputArgsFunctionsType,
    HtmlTsInputStateType,
    HtmlTsInputType
} from "./HtmlTsInputType";
import InterfaceHtmlTsInputValidator from "../../Validator/Core/InterfaceHtmlTsInputValidator";
import {HtmlTsInputValidatorBaseTypes} from "../../Validator/Core/HtmlTsInputValidatorTypes";
import htmlts from "../../../build";
import InterfaceHtmlTsInputDecoratorSet from "../../Decorator/Core/InterfaceHtmlTsInputDecoratorSet";
import HtmlTsInputDefaultDecorator from "../../Decorator/Default/HtmlTsInputDefaultDecorator";
import {
    HtmlTsInputDecoratorChoiceTypes,
    HtmlTsInputDecoratorBaseTypes
} from "../../Decorator/Core/HtmlTsInputDecoratorTypes";
import InterfaceHtmlTsInputDecorator from "../../Decorator/Core/InterfaceHtmlTsInputDecorator";

abstract class AbstractHtmlTsInputBase<T extends string | string[]> implements InterfaceHtmlTsInput<T> {

    name: string;

    html: HtmlTs;
    input: HtmlTs;
    label: HtmlTs;
    helpText: HtmlTs;
    validation: HtmlTs = htmlts.create("div");

    labelContent: string | HtmlTs;
    helpTextContent: string | HtmlTs;

    abstract type: HtmlTsInputType;
    protected abstract validator: InterfaceHtmlTsInputValidator<T>;

    protected validateParam: HtmlTsInputValidatorBaseTypes;
    protected displayParam: HtmlTsInputDecoratorBaseTypes | HtmlTsInputDecoratorChoiceTypes;

    state: HtmlTsInputStateType;
    init_value: T;

    protected functions: HtmlTsInputArgsFunctionsType<AbstractHtmlTsInputBase<T>>;

    protected constructor(args: HtmlTsInputArgsBaseType<T>) {
        this.name = args.name;
        this.state = args.state || "enable";
        this.validateParam = args.validate;
        this.labelContent = args.label;
        this.helpTextContent = args.helpText;
        this.displayParam = args.display;
        this.functions = args.functions;
    }

    protected build(): void {
        this.input = this.createInput();
        this.set(this.init_value);
        this.changeState(this.state);
        this.setOnChange();
        let decorator: InterfaceHtmlTsInputDecorator;
        if (htmlts.input.getDecoratorSet() !== undefined) {
            decorator = this.getDecorator(htmlts.input.getDecoratorSet());
        } else {
            decorator = new HtmlTsInputDefaultDecorator(this.displayParam);
        }
        this.html = decorator.createHtml(this);
    }

    protected abstract getDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): InterfaceHtmlTsInputDecorator;

    protected abstract createInput(): HtmlTs;

    abstract set(value: T): void;

    reset(): void {
        this.set(this.init_value);
    }

    abstract clear(): void;

    abstract value(): T;

    validate(): boolean {
        const validatorResult = this.validator.validate(this.value());
        let decorator: InterfaceHtmlTsInputDecorator;
        if (htmlts.input.getDecoratorSet() !== undefined) {
            decorator = this.getDecorator(htmlts.input.getDecoratorSet());
        } else {
            decorator = new HtmlTsInputDefaultDecorator(this.displayParam);
        }
        decorator.validateHtmlThen(this, validatorResult);
        if (this.functions !== undefined) {
            if (validatorResult.result &&
                this.functions.validateSuccess === undefined &&
                typeof this.functions.validateSuccess === "function"
            ) {
                this.functions.validateSuccess(this);
            }
            if (!validatorResult.result &&
                this.functions.validateError === undefined &&
                typeof this.functions.validateError === "function"
            ) {
                this.functions.validateError(this);
            }
        }
        return validatorResult.result;
    }

    //
    // 値が変わった時の動作
    //

    protected setOnChange() {
        this.input.on("change", (html) => {
            this.whenValueChanged();
        });
    }

    protected whenValueChanged(): void {
        if (this.functions !== undefined &&
            this.functions.valueChanged !== undefined &&
            typeof this.functions.valueChanged === "function"
        ) {
            this.functions.valueChanged(this);
        }
        if (this.validator !== undefined &&
            this.validateParam !== undefined &&
            this.validateParam.realTimeValidate
        ) {
            this.validate();
        }
    }

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