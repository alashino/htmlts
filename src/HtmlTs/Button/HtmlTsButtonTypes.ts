import {HtmlTsOptions} from "../Core/HtmlTsTypes";

export type HtmlTsButtonType =
    "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";

export type HtmlTsButtonSize = "xs" | "s" | "m" | "l" | "xl";

export type HtmlTsButtonParams = HtmlTsOptions & {
    type?: HtmlTsButtonType;
    size?: HtmlTsButtonSize;
};