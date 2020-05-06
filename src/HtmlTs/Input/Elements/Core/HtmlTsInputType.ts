import {HtmlTsInputValidatorBaseTypes} from "../Validator/HtmlTsInputValidatorTypes";
import HtmlTs from "../../../Core/HtmlTs";
import {
    HtmlTsInputDecoratorBaseTypes,
    HtmlTsInputDecoratorChoiceTypes,
    HtmlTsInputDecoratorTextTypes
} from "../../Decorator/HtmlTsInputDecoratorTypes";

// input type
export type HtmlTsInputSingleType = "hidden" | "text" | "password" | "textarea" | "select" | "radio";
export type HtmlTsInputMultiType = "select" | "checkbox";
export type HtmlTsInputType = HtmlTsInputSingleType | HtmlTsInputMultiType;

// state

export type HtmlTsInputStateType = "enable" | "readonly" | "disabled";

// interface
export interface HtmlTsInputArgsBaseType<T> {
    name?: string;
    value?: T;
    state?: HtmlTsInputStateType; // デフォルトではenable
    label?: string | HtmlTs;
    helpText?: string | HtmlTs;
    // validate
    validate?: HtmlTsInputValidatorBaseTypes;
    // layout
    display?: HtmlTsInputDecoratorBaseTypes | HtmlTsInputDecoratorTextTypes | HtmlTsInputDecoratorChoiceTypes;
}

export interface HtmlTsInputArgsSingleValueType extends HtmlTsInputArgsBaseType <string> {
    display?: HtmlTsInputDecoratorTextTypes;
}

export interface HtmlTsInputArgsSingleValueHasChildrenType extends HtmlTsInputArgsSingleValueType {
    choice: HtmlTsInputChoiceType[];
    // layout
    display?: HtmlTsInputDecoratorChoiceTypes;
}

export interface HtmlTsInputArgsMultiValueType extends HtmlTsInputArgsBaseType <string[]> {
    choice: HtmlTsInputChoiceType[];
    // layout
    display?: HtmlTsInputDecoratorChoiceTypes;
}

export interface HtmlTsInputChoiceType {
    value: string;
    label: string;
    title?: string;
}