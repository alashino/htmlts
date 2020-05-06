import {HtmlTsInputSingleType} from "../../Core/HtmlTsInputType";
import AbstractHtmlTsInputText, {AbstractHtmlTsInputTextArgs} from "./AbstractHtmlTsInputText";
import InterfaceHtmlTsInputDecoratorSet from "../../../Decorator/InterfaceHtmlTsInputDecoratorSet";
import HtmlTs from "../../../../Core/HtmlTs";

class HtmlTsInputPassword extends AbstractHtmlTsInputText {

    type: HtmlTsInputSingleType = "password";

    constructor(args: AbstractHtmlTsInputTextArgs) {
        super(args);
        this.build();
    }

    protected getHtmlByDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): HtmlTs {
        const decorator = decoratorSet.password(this.args.display);
        return decorator.createHtml(this);
    }

}

export default HtmlTsInputPassword;