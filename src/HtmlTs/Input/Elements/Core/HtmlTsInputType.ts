import {HtmlTsInputValidatorBaseTypes} from "../../Validator/Core/HtmlTsInputValidatorTypes";
import HtmlTs from "../../../Core/HtmlTs";
import {
    HtmlTsInputDecoratorBaseTypes,
    HtmlTsInputDecoratorChoiceTypes,
    HtmlTsInputDecoratorTextTypes
} from "../../Decorator/Core/HtmlTsInputDecoratorTypes";
import {HtmlTsInputChoiceValidatorMultiType} from "../../Validator/HtmlTsInputChoiceValidatorMulti";
import AbstractHtmlTsInputBase from "./AbstractHtmlTsInputBase";
import AbstractHtmlTsInputMultiValue from "./AbstractHtmlTsInputMultiValue";
import AbstractHtmlTsInputSingleValue from "./AbstractHtmlTsInputSingleValue";

// input type
export type HtmlTsInputSingleType = "hidden" | "text" | "password" | "textarea" | "select" | "radio";
export type HtmlTsInputMultiType = "select" | "checkbox";
export type HtmlTsInputType = HtmlTsInputSingleType | HtmlTsInputMultiType;

// state

export type HtmlTsInputStateType = "enable" | "readonly" | "disabled";

// functions
export interface HtmlTsInputArgsFunctionsType<T extends AbstractHtmlTsInputBase<string | string[]>> {
    valueChanged?: (input: T) => void;
    validateSuccess?: (input: T) => void;
    validateError?: (input: T) => void;
}

// interface
export interface HtmlTsInputArgsBaseType<T extends string | string[]> {
    name?: string;
    value?: T;
    state?: HtmlTsInputStateType; // デフォルトではenable
    label?: string | HtmlTs;
    helpText?: string | HtmlTs;
    functions?: HtmlTsInputArgsFunctionsType<AbstractHtmlTsInputBase<T>>;
    // validate
    validate?: HtmlTsInputValidatorBaseTypes<T>;
    // layout
    display?: HtmlTsInputDecoratorBaseTypes | HtmlTsInputDecoratorTextTypes | HtmlTsInputDecoratorChoiceTypes;
}

export interface HtmlTsInputArgsSingleValueType extends HtmlTsInputArgsBaseType <string> {
    functions?: HtmlTsInputArgsFunctionsType<AbstractHtmlTsInputSingleValue>;
    display?: HtmlTsInputDecoratorTextTypes;
}

export interface HtmlTsInputArgsSingleValueHasChildrenType extends HtmlTsInputArgsSingleValueType {
    choice: HtmlTsInputChoiceType[];
    functions?: HtmlTsInputArgsFunctionsType<AbstractHtmlTsInputSingleValue>;
    // layout
    display?: HtmlTsInputDecoratorChoiceTypes;
}

export interface HtmlTsInputArgsMultiValueType extends HtmlTsInputArgsBaseType <string[]> {
    functions?: HtmlTsInputArgsFunctionsType<AbstractHtmlTsInputMultiValue<any>>;
    choice: HtmlTsInputChoiceType[];
    validate?: HtmlTsInputChoiceValidatorMultiType;
    // layout
    display?: HtmlTsInputDecoratorChoiceTypes;
}

export interface HtmlTsInputChoiceType {
    value: string;
    label: string;
    title?: string;
}