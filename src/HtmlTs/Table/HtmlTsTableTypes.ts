import HtmlTs from "../Core/HtmlTs";

export type HtmlTsTableContent = string | number | HtmlTs;

export type HtmlTsTableParams = {
    thead?: HtmlTsTableContent[];
    tbody?: HtmlTsTableContent[][];
    tfoot?: HtmlTsTableContent[];
    caption?: HtmlTsTableContent;
};

export type HtmlTsTableVerticalParams = {
    tbody?: HtmlTsTableContent[][];
    caption?: HtmlTsTableContent;
};