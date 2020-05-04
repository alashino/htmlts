import {HtmlTsInputSingleType} from "../../Core/HtmlTsInputType";
import AbstractHtmlTsInputText, {AbstractHtmlTsInputTextArgs} from "./AbstractHtmlTsInputText";

class HtmlTsInputText extends AbstractHtmlTsInputText {

    type: HtmlTsInputSingleType = "text";

    constructor(args: AbstractHtmlTsInputTextArgs) {
        super(args);
        this.build();
    }

}

export default HtmlTsInputText;