import {HtmlTsInputSingleType} from "../../Core/HtmlTsInputType";
import AbstractHtmlTsInputText, {AbstractHtmlTsInputTextArgs} from "./AbstractHtmlTsInputText";

class HtmlTsInputPassword extends AbstractHtmlTsInputText {

    type: HtmlTsInputSingleType = "password";

    constructor(args: AbstractHtmlTsInputTextArgs) {
        super(args);
        this.build();
    }

}

export default HtmlTsInputPassword;