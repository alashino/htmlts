import {
    HtmlTsInputDecoratorBaseTypes,
    HtmlTsInputDecoratorChoiceTypes,
    HtmlTsInputDecoratorTextTypes
} from "../../HtmlTs/Input/Decorator/HtmlTsInputDecoratorTypes";
import InterfaceHtmlTsInput from "../../HtmlTs/Input/Elements/Core/InterfaceHtmlTsInput";
import HtmlTs from "../../HtmlTs/Core/HtmlTs";
import htmlts from "../../HtmlTs/build";
import AbstractHtmlTsInputDecorator from "../../HtmlTs/Input/Decorator/AbstractHtmlTsInputDecorator";

abstract class AbstractBootStrap4InputDecorator<T extends HtmlTsInputDecoratorBaseTypes | HtmlTsInputDecoratorTextTypes | HtmlTsInputDecoratorChoiceTypes> extends AbstractHtmlTsInputDecorator<T> {

    protected params: T;

    protected constructor(params: T = undefined) {
        super(params);
    }

    createHtml(htmlTsInput: InterfaceHtmlTsInput<any>): HtmlTs {
        if (this.params === undefined || this.params.layout === undefined || this.params.layout === "default") {
            return this.createLayoutDefault(htmlTsInput);
        } else if (this.params.layout === "horizontal") {
            return this.createLayoutHorizontal(htmlTsInput);
        } else {
            return this.createLayoutDefault(htmlTsInput);
        }
    }

    protected createLayoutDefault(htmlTsInput: InterfaceHtmlTsInput<any>): HtmlTs {
        return htmlts.create("div", {
            class: "form-group",
            content: [
                this.createLabel(htmlTsInput),
                this.createInput(htmlTsInput),
                this.createHelpText(htmlTsInput),
            ],
        });
    }

    protected createLayoutHorizontal(htmlTsInput: InterfaceHtmlTsInput<any>): HtmlTs {
        return htmlts.create("div", {
            class: ["form-group", "row"],
            content: [
                this.createHorizontalLabel(htmlTsInput),
                this.createHorizontalInput(htmlTsInput),

            ],
        });
    }

    protected createHorizontalLabel(htmlTsInput: InterfaceHtmlTsInput<any>): HtmlTs {
        const label = this.createLabel(htmlTsInput);
        const labelClassNames: string[] = [`col-${(this.params.horizontalLeftColumnSize === undefined) ? 2 : this.params.horizontalLeftColumnSize}`];
        return label.addClass(labelClassNames);
    }

    protected createHorizontalInput(htmlTsInput: InterfaceHtmlTsInput<any>): HtmlTs {
        const classNames: string[] = [`col-${(this.params.horizontalRightColumnSize === undefined) ? 10 : this.params.horizontalRightColumnSize}`];
        return htmlts.create("div", {
            class: classNames,
            content: [
                this.createInput(htmlTsInput),
                this.createHelpText(htmlTsInput),
            ],
        });
    }

    protected abstract createInput(htmlTsInput: InterfaceHtmlTsInput<any>): HtmlTs;

    protected getInputGroupClassName(): string[] {
        const classNames: string[] = ["input-group"];
        // size
        if (this.params.size !== undefined) {
            if (this.params.size === "xs" || this.params.size === "s") {
                classNames.push("input-group-sm");
            }
            if (this.params.size === "l" || this.params.size === "xl") {
                classNames.push("input-group-lg");
            }
        }
        // input column size
        if (this.params.inputColumnSize !== undefined) {
            classNames.push(`col-${this.params.inputColumnSize}`);
        }
        return classNames;
    }
}

export default AbstractBootStrap4InputDecorator;
