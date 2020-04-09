import InterfaceHtmlTsTableDecorator from "./InterfaceHtmlTsTableDecorator";
import HtmlTs from "../Core/HtmlTs";
import {HtmlTsTableContent, HtmlTsTableParams, HtmlTsTableVerticalParams} from "./HtmlTsTableTypes";
import htmlts from "../build";


class HtmlTsTableFactory {

    private tableDecorator: InterfaceHtmlTsTableDecorator;

    setDecorator(tableDecorator: InterfaceHtmlTsTableDecorator): void {
        this.tableDecorator = tableDecorator;
    }

    create(params: HtmlTsTableParams): HtmlTs {
        const $table = htmlts.create("table", {
            content: [
                this.createThead(params.thead),
                this.createTbody(params.tbody),
                this.createTfoot(params.tfoot),
                this.createCaption(params.caption),
            ],
        });
        if (this.tableDecorator !== undefined) {
            this.tableDecorator.table($table);
        }
        return $table;
    }

    createVertical(params: HtmlTsTableVerticalParams): HtmlTs {
        const $table = htmlts.create("table", {
            content: [
                this.createTbodyVertical(params.tbody),
                this.createCaption(params.caption),
            ],
        });
        if (this.tableDecorator !== undefined) {
            this.tableDecorator.table($table);
        }
        return $table;
    }

    private createThead(thead: HtmlTsTableContent[]): HtmlTs {
        if (thead === undefined || thead.length === 0) return undefined;
        const $thead = htmlts.create("thead", {
            content: this.createTr(
                thead.map((element) => {
                    return this.createTh(element);
                })
            ),
        });
        if (this.tableDecorator !== undefined) {
            this.tableDecorator.thead($thead);
        }
        return $thead;
    }

    private createTbody(tbody: HtmlTsTableContent[][]): HtmlTs {
        if (tbody === undefined || tbody.length === 0) return undefined;
        const $tbody = htmlts.create("tbody", {
            content: tbody.map((row) => {
                return this.createTr(
                    row.map((element) => {
                        return this.createTd(element);
                    })
                );
            }),
        });
        if (this.tableDecorator !== undefined) {
            this.tableDecorator.tbody($tbody);
        }
        return $tbody;
    }

    private createTfoot(tfoot: HtmlTsTableContent[]): HtmlTs {
        if (tfoot === undefined || tfoot.length === 0) return undefined;
        const $tfoot = htmlts.create("tfoot", {
            content: this.createTr(
                tfoot.map((element) => {
                    return this.createTh(element);
                })
            ),
        });
        if (this.tableDecorator !== undefined) {
            this.tableDecorator.tfoot($tfoot);
        }
        return $tfoot;
    }

    private createCaption(caption: HtmlTsTableContent): HtmlTs {
        if (caption === undefined) return undefined;
        const $caption = htmlts.create("caption", {
            content: caption,
        });
        if (this.tableDecorator !== undefined) {
            this.tableDecorator.caption($caption);
        }
        return $caption;
    }

    private createTr(contents: HtmlTs[]): HtmlTs {
        return htmlts.create("tr", {
            content: contents,
        });
    }

    private createTh(th: HtmlTsTableContent): HtmlTs {
        const $th = htmlts.create("th", {
            content: th,
        });
        if (this.tableDecorator !== undefined) {
            this.tableDecorator.th($th);
        }
        return $th;
    }

    private createTd(td: HtmlTsTableContent): HtmlTs {
        const $td = htmlts.create("td", {
            content: td,
        });
        if (this.tableDecorator !== undefined) {
            this.tableDecorator.td($td);
        }
        return $td;
    }

    private createTbodyVertical(tbody: HtmlTsTableContent[][]): HtmlTs {
        if (tbody === undefined || tbody.length === 0) return  undefined;
        const $tbody = htmlts.create("tbody", {
           content: tbody.map((row) => {
               const $row: HtmlTs[] = [];
               for (const [index, element] of row.entries()) {
                   if (index === 0) {
                       $row.push(this.createTh(element));
                   } else {
                       $row.push(this.createTd(element));
                   }
               }
               return this.createTr($row);
           })
        });
        if (this.tableDecorator !== undefined) {
            this.tableDecorator.tbody($tbody);
        }
        return $tbody;
    }

}

export default HtmlTsTableFactory;