export type HtmlTsInputValidateType = {
    realtimeValidation: boolean;
    isNotNull: boolean;
    isNumber: boolean;
};

// input type
export type HtmlTsInputSingleType = "hidden" | "text" | "textarea" | "select" | "radio";
export type HtmlTsInputMultiType = "select" | "checkbox";
export type HtmlTsInputType = HtmlTsInputSingleType | HtmlTsInputMultiType;

// state

export type HtmlTsInputStateType = "enable" | "readonly" | "disabled";

// interface
export interface HtmlTsInputArgsBaseType<T> {
    name?: string;
    value?: T;
    state?: HtmlTsInputStateType; // デフォルトではenable
}

export interface HtmlTsInputArgsSingleValueType extends HtmlTsInputArgsBaseType <string> {

}

export interface HtmlTsInputArgsSingleValueHasChildrenType extends HtmlTsInputArgsSingleValueType {
    choice: HtmlTsInputChoiceType[];
}

export interface HtmlTsInputArgsMultiValueType extends HtmlTsInputArgsBaseType <string[]> {
    choice: HtmlTsInputChoiceType[];
}

export interface HtmlTsInputChoiceType {
    value: string;
    label: string;
    title?: string;
}