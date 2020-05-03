import AbstractHtmlTsInputSingleValue from "../Core/AbstractHtmlTsInputSingleValue";
import {HtmlTsInputArgsSingleValueType, HtmlTsInputSingleType} from "../Core/HtmlTsInputType";

export interface HtmlTsInputTextArgs extends HtmlTsInputArgsSingleValueType {
    placeHolder?: string;
}

class HtmlTsInputText extends AbstractHtmlTsInputSingleValue {

    type: HtmlTsInputSingleType = "text";

    constructor(args: HtmlTsInputTextArgs) {
        super(args);
        this.build();
        if (args.placeHolder !== undefined) {
            this.input.setAttr("placeholder", args.placeHolder);
        }
    }

    validate(): boolean {
        return true;
    }

}

export default HtmlTsInputText;