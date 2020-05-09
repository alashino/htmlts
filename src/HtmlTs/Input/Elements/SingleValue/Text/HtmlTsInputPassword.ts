import {HtmlTsInputSingleType} from "../../Core/HtmlTsInputType";
import AbstractHtmlTsInputText, {AbstractHtmlTsInputTextArgs} from "./AbstractHtmlTsInputText";
import InterfaceHtmlTsInputDecoratorSet from "../../../Decorator/Core/InterfaceHtmlTsInputDecoratorSet";
import HtmlTs from "../../../../Core/HtmlTs";
import InterfaceHtmlTsInputDecorator from "../../../Decorator/Core/InterfaceHtmlTsInputDecorator";

class HtmlTsInputPassword extends AbstractHtmlTsInputText {

    type: HtmlTsInputSingleType = "password";

    constructor(args: AbstractHtmlTsInputTextArgs) {
        super(args);
        this.build();
    }

    protected getDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): InterfaceHtmlTsInputDecorator {
        return decoratorSet.password(this.args.display);
    }

}

export default HtmlTsInputPassword;