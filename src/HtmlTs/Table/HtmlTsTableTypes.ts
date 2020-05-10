import HtmlTs from "../Core/HtmlTs";
import {HtmlTsOptionType} from "../Core/HtmlTsTypes";

export type HtmlTsTableContent = string | number | HtmlTs;

export type HtmlTsTableParams = {
    thead?: HtmlTsTableContent[];
    tbody?: HtmlTsTableContent[][];
    tfoot?: HtmlTsTableContent[];
    caption?: HtmlTsTableContent;
    noData?: HtmlTsOptionType;
};

export type HtmlTsTableVerticalParams = {
    tbody?: HtmlTsTableContent[][];
    caption?: HtmlTsTableContent;
};