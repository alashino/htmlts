import HtmlTs from "../Core/HtmlTs";

interface InterfaceHtmlTsTableDecorator {

    table(table: HtmlTs): void;

    thead(thead: HtmlTs): void;

    tbody(tbody: HtmlTs): void;

    tfoot(tfoot: HtmlTs): void;

    caption(caption: HtmlTs): void;

    th(th: HtmlTs): void;

    td(td: HtmlTs): void;

}

export default InterfaceHtmlTsTableDecorator;