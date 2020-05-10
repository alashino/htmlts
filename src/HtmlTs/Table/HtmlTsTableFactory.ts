import InterfaceHtmlTsTableDecorator from "./InterfaceHtmlTsTableDecorator";
import HtmlTs from "../Core/HtmlTs";
import {HtmlTsTableContent, HtmlTsTableParams, HtmlTsTableVerticalParams} from "./HtmlTsTableTypes";
import htmlts from "../build";
import {HtmlTsOptionType} from "../Core/HtmlTsTypes";


class HtmlTsTableFactory {

    private defaultDecorator: InterfaceHtmlTsTableDecorator;
    private noDataText: string = "No Data.";

    setDecorator(decorator: InterfaceHtmlTsTableDecorator): void {
        this.defaultDecorator = decorator;
    }

    setNoDataText(text: string): void {
        this.noDataText = text;
    }

    create(params: HtmlTsTableParams, tableDecorator: InterfaceHtmlTsTableDecorator = undefined): HtmlTs {
        const $table = htmlts.create("table", {
            content: [
                this.createThead(params.thead, tableDecorator),
                this.createTbody(params.tbody, tableDecorator) || this.createNoData(params.noData, tableDecorator),
                this.createTfoot(params.tfoot, tableDecorator),
                this.createCaption(params.caption, tableDecorator),
            ],
        });
        if (tableDecorator !== undefined) {
            tableDecorator.table($table);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.table($table);
        }
        return $table;
    }

    createVertical(params: HtmlTsTableVerticalParams, tableDecorator: InterfaceHtmlTsTableDecorator = undefined): HtmlTs {
        const $table = htmlts.create("table", {
            content: [
                this.createTbodyVertical(params.tbody, tableDecorator),
                this.createCaption(params.caption, tableDecorator),
            ],
        });
        if (tableDecorator !== undefined) {
            tableDecorator.table($table);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.table($table);
        }
        return $table;
    }

    private createThead(thead: HtmlTsTableContent[], tableDecorator: InterfaceHtmlTsTableDecorator): HtmlTs {
        if (thead === undefined || thead.length === 0) return undefined;
        const tr = this.createTr(
            thead.map((element) => {
                return this.createTh(element, tableDecorator);
            })
        );
        if (tableDecorator !== undefined) {
            tableDecorator.theadTr(tr);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.theadTr(tr);
        }
        const $thead = htmlts.create("thead", {
            content: tr,
        });
        if (tableDecorator !== undefined) {
            tableDecorator.thead($thead);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.thead($thead);
        }
        return $thead;
    }

    private createTbody(tbody: HtmlTsTableContent[][], tableDecorator: InterfaceHtmlTsTableDecorator): HtmlTs {
        if (tbody === undefined || tbody.length === 0) return undefined;
        const $tbody = htmlts.create("tbody", {
            content: tbody.map((row) => {
                const tr = this.createTr(
                    row.map((element) => {
                        return this.createTd(element, tableDecorator);
                    })
                );
                if (tableDecorator !== undefined) {
                    tableDecorator.tbodyTr(tr);
                } else if (this.defaultDecorator !== undefined) {
                    this.defaultDecorator.tbodyTr(tr);
                }
                return tr;
            }),
        });
        if (tableDecorator !== undefined) {
            tableDecorator.tbody($tbody);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.tbody($tbody);
        }
        return $tbody;
    }

    private createTfoot(tfoot: HtmlTsTableContent[], tableDecorator: InterfaceHtmlTsTableDecorator): HtmlTs {
        if (tfoot === undefined || tfoot.length === 0) return undefined;
        const tr = this.createTr(
            tfoot.map((element) => {
                return this.createTh(element, tableDecorator);
            })
        );
        if (tableDecorator !== undefined) {
            tableDecorator.tfootTr(tr);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.tfootTr(tr);
        }
        const $tfoot = htmlts.create("tfoot", {
            content: tr,
        });
        if (tableDecorator !== undefined) {
            tableDecorator.tfoot($tfoot);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.tfoot($tfoot);
        }
        return $tfoot;
    }

    private createCaption(caption: HtmlTsTableContent, tableDecorator: InterfaceHtmlTsTableDecorator): HtmlTs {
        if (caption === undefined) return undefined;
        const $caption = htmlts.create("caption", {
            content: caption,
        });
        if (tableDecorator !== undefined) {
            tableDecorator.caption($caption);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.caption($caption);
        }
        return $caption;
    }

    private createTr(contents: HtmlTs[]): HtmlTs {
        return htmlts.create("tr", {
            content: contents,
        });
    }

    private createTh(th: HtmlTsTableContent, tableDecorator: InterfaceHtmlTsTableDecorator): HtmlTs {
        const $th = htmlts.create("th", {
            content: th,
        });
        if (tableDecorator !== undefined) {
            tableDecorator.th($th);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.th($th);
        }
        return $th;
    }

    private createTd(td: HtmlTsTableContent, tableDecorator: InterfaceHtmlTsTableDecorator): HtmlTs {
        const $td = htmlts.create("td", {
            content: td,
        });
        if (tableDecorator !== undefined) {
            tableDecorator.td($td);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.td($td);
        }
        return $td;
    }

    private createTbodyVertical(tbody: HtmlTsTableContent[][], tableDecorator: InterfaceHtmlTsTableDecorator): HtmlTs {
        if (tbody === undefined || tbody.length === 0) return undefined;
        const $tbody = htmlts.create("tbody", {
            content: tbody.map((row) => {
                const $row: HtmlTs[] = [];
                for (const [index, element] of row.entries()) {
                    if (index === 0) {
                        $row.push(this.createTh(element, tableDecorator));
                    } else {
                        $row.push(this.createTd(element, tableDecorator));
                    }
                }
                return this.createTr($row);
            })
        });
        if (tableDecorator !== undefined) {
            tableDecorator.tbody($tbody);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.tbody($tbody);
        }
        return $tbody;
    }

    private createNoData(noData: HtmlTsOptionType, tableDecorator: InterfaceHtmlTsTableDecorator): HtmlTs {
        let td: HtmlTs;
        if (noData !== undefined) {
            td = htmlts.create("td", noData);
        } else {
            td = htmlts.create("td", this.noDataText);
        }
        td.setAttr("colspan", "9999");
        if (tableDecorator !== undefined) {
            tableDecorator.noData(td);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.noData(td);
        }
        return this.createTr([td]);
    }
}

export default HtmlTsTableFactory;