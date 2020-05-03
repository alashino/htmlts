import AbstractHtmlTsInputMultiValue from "../Core/AbstractHtmlTsInputMultiValue";
import {HtmlTsInputArgsMultiValueType, HtmlTsInputMultiType} from "../Core/HtmlTsInputType";
import HtmlTs from "../../../Core/HtmlTs";
import htmlts from "../../../build";
import InterfaceHtmlTsInputChoice from "./InterfaceHtmlTsInputChoice";


export interface HtmlTsInputCheckboxArgs extends HtmlTsInputArgsMultiValueType {

}

class HtmlTsInputCheckbox extends AbstractHtmlTsInputMultiValue<HtmlTsInputCheckboxElement> {

    type: HtmlTsInputMultiType = "checkbox";

    constructor(args: HtmlTsInputCheckboxArgs) {
        super(args);
    }

    protected build(): void {
        this.args.choice.forEach((choice) => {
            this.choice.push(
                new HtmlTsInputCheckboxElement(
                    this,
                    choice.value,
                    choice.label,
                    choice.title
                )
            );
        });
        this.input = htmlts.create("div", {
            content: this.choice.map((choice) => {
                return choice.html;
            }),
        })
    }

    set(value: string[]): void {
    }

    value(): string[] {
        return [];
    }

}

export class HtmlTsInputCheckboxElement implements InterfaceHtmlTsInputChoice {

    html: HtmlTs;
    htmlLabel: HtmlTs;
    htmlInput: HtmlTs;

    private _parent: HtmlTsInputCheckbox;

    readonly value: string;
    readonly label: string;
    readonly title: string;

    constructor(parent: HtmlTsInputCheckbox, value: string, label: string, title: string = "") {
        this._parent = parent;
        this.value = value;
        this.label = label;
        this.title = title;
        this.htmlLabel = htmlts.create("label", this.label);
        this.htmlInput = htmlts.create("input", {
            attr: {
                "type": this._parent.type,
                "name": this._parent.name,
                "value": this.value,
                "title": this.title,
            },
        });
        this.html = this.htmlLabel.append(this.htmlInput);
    }

    clear(): void {
        throw new Error("Method not implemented.");
    }
    set(): void {
        throw new Error("Method not implemented.");
    }
}

export default HtmlTsInputCheckbox;