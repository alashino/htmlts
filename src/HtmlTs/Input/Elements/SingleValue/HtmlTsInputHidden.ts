import AbstractHtmlTsInputSingleValue from "../Core/AbstractHtmlTsInputSingleValue";
import {HtmlTsInputArgsSingleValueType, HtmlTsInputSingleType} from "../Core/HtmlTsInputType";

export interface HtmlTsInputHiddenArgs extends HtmlTsInputArgsSingleValueType {
    isClearable?: boolean; // clearできるかどうか。defaultはfalse
}

class HtmlTsInputHidden extends AbstractHtmlTsInputSingleValue {

    type: HtmlTsInputSingleType = "hidden";
    args: HtmlTsInputHiddenArgs;

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