import HtmlTs from "./HtmlTs";


export type TagNameBlockTypes = "div" | "section" | "p" | "code";
export type TagNameListTypes = "ul" | "ol" | "li" | "dd" | "dt";
export type TagNameInputTypes = "input" | "select" | "textarea";
export type TagNameHeader = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TagNameInlineTypes = "a" | "span" | "i" | "b";
export type TagNameTable = "table" | "tbody" | "thead" | "tfoot" | "caption" | "tr" | "th" | "td";
export type TagNameCanvas = "canvas";
export type TagNameTypes = TagNameBlockTypes |
    TagNameListTypes |
    TagNameInputTypes |
    TagNameHeader |
    TagNameInlineTypes |
    TagNameTable |
    TagNameCanvas;

export type HtmlTsOptionType = string | number | HtmlTsOptions | HtmlTs | Array<string | number | HtmlTs>;
export type HtmlTsContentType = string | number | HtmlTs | Array<string | number | HtmlTs>;

export type HtmlTsOptions = {
    class?: string;
    css?: { [key: string]: string };
    attr?: { [key: string]: string };
    content?: HtmlTsContentType;
};