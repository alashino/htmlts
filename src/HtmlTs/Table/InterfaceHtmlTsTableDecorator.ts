import HtmlTs from "../Core/HtmlTs";

interface InterfaceHtmlTsTableDecorator {

    table(table: HtmlTs): void;

    thead(thead: HtmlTs): void;

    theadTr(tr: HtmlTs): void;

    tbody(tbody: HtmlTs): void;

    tbodyTr(tr: HtmlTs): void;

    tfoot(tfoot: HtmlTs): void;

    tfootTr(tr: HtmlTs): void;

    caption(caption: HtmlTs): void;

    th(th: HtmlTs): void;

    td(td: HtmlTs): void;

    noData(td: HtmlTs): void;

}

export default InterfaceHtmlTsTableDecorator;