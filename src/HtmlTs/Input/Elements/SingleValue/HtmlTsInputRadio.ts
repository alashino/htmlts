import AbstractHtmlTsInputSingleValue from "../Core/AbstractHtmlTsInputSingleValue";
import {
    HtmlTsInputArgsSingleValueHasChildrenType,
    HtmlTsInputSingleType
} from "../Core/HtmlTsInputType";

export interface HtmlTsInputRadioArgs extends HtmlTsInputArgsSingleValueHasChildrenType {

}

class HtmlTsInputRadio extends AbstractHtmlTsInputSingleValue {

    type: HtmlTsInputSingleType = "radio";

    constructor(args: HtmlTsInputRadioArgs) {
        super(args);
        this.build();
    }

    validate(): boolean {
        return true;
    }

}

export default HtmlTsInputRadio;