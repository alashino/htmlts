import InterfaceHtmlTsInputChoice from "./InterfaceHtmlTsInputChoice";
import HtmlTs from "../../../Core/HtmlTs";
import htmlts from "../../../build";

abstract class AbstractChoiceWithLabel implements InterfaceHtmlTsInputChoice {

    html: HtmlTs;
    htmlInput: HtmlTs;
    htmlLabel: HtmlTs;

    abstract type: "checkbox" | "radio";

    readonly name: string;
    readonly value: string;
    readonly label: string;
    readonly title: string;

    protected constructor(name: string, value: string, label: string, title: string = "") {
        this.name = name;
        this.value = value;
        this.label = label;
        this.title = title;
    }

    protected build(): void {
        this.htmlInput = htmlts.create("input", {
            attr: {
                name: this.name,
                type: this.type,
                value: this.value,
                title: this.title,
            },
            content: this.label,
        });
        this.htmlLabel = htmlts.create("label", {
            content: [
                this.htmlInput,
                this.label,
            ]
        });
        this.html = this.htmlLabel;
    }

    clear(): void {
        this.htmlInput.removeAttr("checked");
        // @ts-ignore
        this.htmlInput.htmlElement.checked = false;
    }

    set(): void {
        this.htmlInput.setAttr("checked", "true");
        // @ts-ignore
        this.htmlInput.htmlElement.checked = true;
    }

    isSelected(): boolean {
        // @ts-ignore
        return this.htmlInput.htmlElement.checked;
    }

}

export default AbstractChoiceWithLabel;