import AbstractHtmlTsInputSingleValue from "../../Core/AbstractHtmlTsInputSingleValue";
import {HtmlTsInputArgsSingleValueType, HtmlTsInputSingleType} from "../../Core/HtmlTsInputType";
import HtmlTsInputTextValidator from "../../Validator/HtmlTsInputTextValidator";
import {HtmlTsInputTextValidatorType} from "../../Validator/HtmlTsInputValidatorTypes";
import InterfaceHtmlTsInputDecoratorSet from "../../../Decorator/InterfaceHtmlTsInputDecoratorSet";
import HtmlTs from "../../../../Core/HtmlTs";
import {HtmlTsInputDecoratorChoiceTypes, HtmlTsInputDecoratorBaseTypes} from "../../../Decorator/HtmlTsInputDecoratorTypes";

export interface AbstractHtmlTsInputTextArgs extends HtmlTsInputArgsSingleValueType {
    placeHolder?: string;
    validate?: HtmlTsInputTextValidatorType;
    display?: HtmlTsInputDecoratorBaseTypes;

}

abstract class AbstractHtmlTsInputText extends AbstractHtmlTsInputSingleValue {

    type: HtmlTsInputSingleType = "password";

    protected validator: HtmlTsInputTextValidator;
    private readonly placeHolder: string;

    protected constructor(args: AbstractHtmlTsInputTextArgs) {
        super(args);
        this.validator = new HtmlTsInputTextValidator(args.validate);
        this.placeHolder = args.placeHolder
    }

    protected build() {
        super.build();
        if (this.placeHolder !== undefined) {
            this.input.setAttr("placeholder", this.placeHolder);
        }
    }

    protected setOnChange() {
        this.input.on("input", (html) => {
            this.whenValueChanged();
        });
    }

}

export default AbstractHtmlTsInputText;