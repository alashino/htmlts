import AbstractHtmlTsInputSingleValue from "../Core/AbstractHtmlTsInputSingleValue";
import {HtmlTsInputArgsSingleValueType, HtmlTsInputSingleType} from "../Core/HtmlTsInputType";
import HtmlTs from "../../../Core/HtmlTs";
import htmlts from "../../../build";

export interface HtmlTsInputTextAreaArgs extends HtmlTsInputArgsSingleValueType {
    placeHolder?: string;
    rows?: number | string;
    cols?: number | string;
}

class HtmlTsInputTextArea extends AbstractHtmlTsInputSingleValue {

    type: HtmlTsInputSingleType = "textarea";

    constructor(args: HtmlTsInputTextAreaArgs) {
        super(args);
        this.build();
        if (args.placeHolder !== undefined) {
            this.input.setAttr("placeholder", args.placeHolder);
        }
        if (args.rows !== undefined) {
            this.input.setAttr("rows", args.rows);
        }
        if (args.cols !== undefined) {
            this.input.setAttr("cols", args.cols);
        }
    }

    protected createInput(): HtmlTs {
        return htmlts.create("textarea");
    }

    set(value: string): void {
        this.input.setText(value);
    }

    value(): string {
        return this.input.getText();
    }


}

export default HtmlTsInputTextArea;