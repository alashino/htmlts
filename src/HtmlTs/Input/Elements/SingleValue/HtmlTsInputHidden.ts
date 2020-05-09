import AbstractHtmlTsInputSingleValue from "../Core/AbstractHtmlTsInputSingleValue";
import {HtmlTsInputArgsSingleValueType, HtmlTsInputSingleType} from "../Core/HtmlTsInputType";
import InterfaceHtmlTsInputValidator from "../../Validator/Core/InterfaceHtmlTsInputValidator";
import InterfaceHtmlTsInputDecoratorSet from "../../Decorator/Core/InterfaceHtmlTsInputDecoratorSet";
import HtmlTs from "../../../Core/HtmlTs";
import InterfaceHtmlTsInputDecorator from "../../Decorator/Core/InterfaceHtmlTsInputDecorator";

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
        // hiddenはvalidateしない
        return true;
    }

    protected getDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): InterfaceHtmlTsInputDecorator {
        return decoratorSet.hidden(this.args.display);
    }

}

export default HtmlTsInputHidden;