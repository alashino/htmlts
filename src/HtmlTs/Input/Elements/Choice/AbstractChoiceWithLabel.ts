import InterfaceHtmlTsInputChoice from "./InterfaceHtmlTsInputChoice";
import HtmlTs from "../../../Core/HtmlTs";
import htmlts from "../../../build";
import {HtmlTsInputStateType} from "../Core/HtmlTsInputType";

export type AbstractChoiceWithLabelArgs = {
    name: string;
    value: string;
    label: string;
    title?: string;
    state?: HtmlTsInputStateType;
}

abstract class AbstractChoiceWithLabel implements InterfaceHtmlTsInputChoice {

    html: HtmlTs;
    htmlInput: HtmlTs;
    htmlLabel: HtmlTs;

    abstract type: "checkbox" | "radio";

    readonly name: string;
    readonly value: string;
    readonly label: string;
    readonly title: string;
    private state: HtmlTsInputStateType;

    protected constructor(args: AbstractChoiceWithLabelArgs) {
        this.name = args.name;
        this.value = args.value;
        this.label = args.label;
        this.title = args.title;
        this.state = args.state || "enable";
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

    changeState(state: HtmlTsInputStateType): void {
        switch (state) {
            case "enable":
                this.htmlInput.removeAttr(["readonly", "disabled"]);
                break;
            case "readonly":
                this.htmlInput.removeAttr(["disabled"]);
                this.htmlInput.setAttr(state, "true");
                break;

            case "disabled":
                this.htmlInput.removeAttr(["readonly"]);
                this.htmlInput.setAttr(state, "true");
                break;
        }
    }

}

export default AbstractChoiceWithLabel;