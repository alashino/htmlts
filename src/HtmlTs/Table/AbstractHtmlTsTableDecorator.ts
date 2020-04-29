import InterfaceHtmlTsTableDecorator from "./InterfaceHtmlTsTableDecorator";
import HtmlTs from "../Core/HtmlTs";


abstract class AbstractHtmlTsTableDecorator implements InterfaceHtmlTsTableDecorator {

    abstract tableClass: string;
    abstract theadClass: string;
    abstract theadTrClass: string;
    abstract tbodyClass: string;
    abstract tbodyTrClass: string;
    abstract tfootClass: string;
    abstract tfootTrClass: string;
    abstract captionClass: string;
    abstract thClass: string;
    abstract tdClass: string;
    abstract noDataClass: string;

    table(table: HtmlTs): void {
        this.addClass(table, this.tableClass);
    }

    thead(thead: HtmlTs): void {
        this.addClass(thead, this.theadClass);
    }

    theadTr(tr: HtmlTs): void {
        this.addClass(tr, this.theadTrClass);
    }

    tbody(tbody: HtmlTs): void {
        this.addClass(tbody, this.tbodyClass);
    }

    tbodyTr(tr: HtmlTs): void {
        this.addClass(tr, this.tbodyTrClass);
    }

    tfoot(tfoot: HtmlTs): void {
        this.addClass(tfoot, this.tfootClass);
    }

    tfootTr(tr: HtmlTs): void {
        this.addClass(tr, this.tfootTrClass);
    }

    caption(caption: HtmlTs): void {
        this.addClass(caption, this.captionClass);
    }

    th(th: HtmlTs): void {
        this.addClass(th, this.thClass);
    }

    td(td: HtmlTs): void {
        this.addClass(td, this.tdClass);
    }

    noData(td: HtmlTs): void {
        this.addClass(td, this.noDataClass);
    }

    protected addClass(element: HtmlTs, classString: string): void {
        if (classString === undefined || classString === "") {
            return;
        }
        element.addClass(classString);
    }

}

export default AbstractHtmlTsTableDecorator;