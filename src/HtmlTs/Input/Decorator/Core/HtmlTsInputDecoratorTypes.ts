import HtmlTs from "../../../Core/HtmlTs";

export type HtmlTsInputDecoratorSizeType = "xs" | "s" | "m" | "l" | "xl";


export interface HtmlTsInputDecoratorBaseTypes {
    // input
    size?: HtmlTsInputDecoratorSizeType; // default m
    inputColumnSize?: number | "auto" | undefined; // default undefined
    // layout
    layout?: "default" | "horizontal";
    horizontalLeftColumnSize?: number; // default 2
    horizontalRightColumnSize?: number; // default 10
}

export interface HtmlTsInputDecoratorTextTypes extends HtmlTsInputDecoratorBaseTypes {
    // input
    addonLeft?: string | HtmlTs;
    addonRight?: string | HtmlTs;
}

export interface HtmlTsInputDecoratorChoiceTypes extends HtmlTsInputDecoratorBaseTypes {
    choiceDisplay?: "stacked" | "inline";
}