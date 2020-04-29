import AbstractHtmlTsTableDecorator from "../../HtmlTs/Table/AbstractHtmlTsTableDecorator";


class Bootstrap4TableDarkDecorator extends AbstractHtmlTsTableDecorator {

    tableClass: string = "table table-dark";
    theadClass: string = "";
    theadTrClass: string = "";
    tbodyClass: string = "";
    tbodyTrClass: string = "";
    tfootClass: string = "";
    tfootTrClass: string = "";
    captionClass: string = "";
    thClass: string = "";
    tdClass: string = "";
    noDataClass: string = "text-muted";

}

export default Bootstrap4TableDarkDecorator;