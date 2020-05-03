import HtmlTs from "./HtmlTs";


export type TagNameBlockTypes = "div" | "section" | "p" | "code";
export type TagNameListTypes = "ul" | "ol" | "li" | "dd" | "dt";
export type TagNameInputTypes = "input" | "select" | "textarea" | "option" | "optgroup";
export type TagNameHeader = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TagNameInlineTypes = "a" | "span" | "i" | "b" | "label";
export type TagNameTable = "table" | "tbody" | "thead" | "tfoot" | "caption" | "tr" | "th" | "td";
export type TagNameCanvas = "canvas";
export type TagNameButton = "button";
export type TagNameTypes = TagNameBlockTypes |
    TagNameListTypes |
    TagNameInputTypes |
    TagNameHeader |
    TagNameInlineTypes |
    TagNameTable |
    TagNameCanvas |
    TagNameButton;

export type HtmlTsOptionType = string | number | HtmlTsOptions | HtmlTs | Array<string | number | HtmlTs>;
export type HtmlTsContentType = string | number | HtmlTs | Array<string | number | HtmlTs>;

export type HtmlTsOptions = {
    class?: string;
    css?: { [key: string]: string | number };
    attr?: { [key: string]: string | number };
    content?: HtmlTsContentType;
    click?: (html?: Element) => void;
};

// event
export type HtmlTsEventTypes = "change" |
    "click" |
    "blur" |
    "focus" |
    "load" |
    "resize" |
    "scroll" |
    "keyup" |
    "keypress" |
    "mouseup" |
    "mousedown" |
    "mousemove" |
    "submit";

export type HtmlTsEventFunctionTypes = (html?: Element) => void;