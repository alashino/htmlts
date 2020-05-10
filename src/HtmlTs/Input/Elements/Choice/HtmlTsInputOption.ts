import HtmlTs from "../../../Core/HtmlTs";
import htmlts from "../../../build";
import InterfaceHtmlTsInputChoice from "./InterfaceHtmlTsInputChoice";
import {HtmlTsInputStateType} from "../Core/HtmlTsInputType";


class HtmlTsInputOption implements InterfaceHtmlTsInputChoice {

    html: HtmlTs;

    readonly value: string;
    readonly label: string;
    readonly title: string;
    readonly state: HtmlTsInputStateType;

    constructor(value: string, label: string, title: string = "", state: HtmlTsInputStateType = "enable") {
        this.value = value;
        this.label = label;
        this.title = title;
        this.state = state;
        this.html = htmlts.create("option", {
            attr: {
                value: this.value,
                title: this.title,
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

    changeState(state: HtmlTsInputStateType): void {
        switch (state) {
            case "enable":
                this.html.removeAttr(["readonly", "disabled"]);
                break;
            case "readonly":
                this.html.removeAttr(["disabled"]);
                this.html.setAttr(state, "true");
                break;

            case "disabled":
                this.html.removeAttr(["readonly"]);
                this.html.setAttr(state, "true");
                break;
        }
    }
}

export default HtmlTsInputOption;