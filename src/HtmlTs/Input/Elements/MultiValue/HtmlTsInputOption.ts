import HtmlTs from "../../../Core/HtmlTs";
import htmlts from "../../../build";
import InterfaceHtmlTsInputChoice from "./InterfaceHtmlTsInputChoice";


class HtmlTsInputOption implements InterfaceHtmlTsInputChoice {

    html: HtmlTs;

    readonly value: string;
    readonly label: string;
    readonly title: string;

    constructor(value: string, label: string, title: string = "") {
        this.value = value;
        this.label = label;
        this.title = title;
        this.html = htmlts.create("option", {
            attr: {
                "value": this.value,
                "title": this.title,
            },
            content: this.label,
        });
    }

    clear(): void {
        this.html.removeAttr("selected");
        // @ts-ignore
        this.html.htmlElement.selected = false;
    }

    set(): void {
        this.html.setAttr("selected", "true");
        // @ts-ignore
        this.html.htmlElement.selected = true;
    }

    isSelected(): boolean {
        // @ts-ignore
        return this.html.htmlElement.selected;
    }
}

export default HtmlTsInputOption;