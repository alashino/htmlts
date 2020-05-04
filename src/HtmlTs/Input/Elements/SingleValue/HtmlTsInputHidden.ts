import AbstractHtmlTsInputSingleValue from "../Core/AbstractHtmlTsInputSingleValue";
import {HtmlTsInputArgsSingleValueType, HtmlTsInputSingleType} from "../Core/HtmlTsInputType";
import InterfaceHtmlTsInputValidator from "../Validator/InterfaceHtmlTsInputValidator";

export interface HtmlTsInputHiddenArgs extends HtmlTsInputArgsSingleValueType {
    isClearable?: boolean; // clearできるかどうか。defaultはfalse
}

class HtmlTsInputHidden extends AbstractHtmlTsInputSingleValue {

    type: HtmlTsInputSingleType = "hidden";
    args: HtmlTsInputHiddenArgs;

    protected validator: InterfaceHtmlTsInputValidator<string>;

    constructor(args: HtmlTsInputHiddenArgs) {
        super(args);
        this.build();
    }

    clear(): void {
        // hiddenはdefaultではclearできない。
        if (this.args.isClearable !== undefined && this.args.isClearable === true) {
            super.clear();
        }
    }

    validate(): boolean {
        return true;
    }


}

export default HtmlTsInputHidden;