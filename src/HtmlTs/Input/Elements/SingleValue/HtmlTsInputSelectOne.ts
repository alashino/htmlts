import {
    HtmlTsInputArgsSingleValueHasChildrenType, HtmlTsInputChoiceType,
    HtmlTsInputSingleType
} from "../Core/HtmlTsInputType";
import HtmlTsInputOption from "../Choice/HtmlTsInputOption";
import AbstractHtmlTsInputSingleValueChoice from "../Core/AbstractHtmlTsInputSingleValueChoice";
import {TagNameTypes} from "../../../Core/HtmlTsTypes";
import InterfaceHtmlTsInputDecoratorSet from "../../Decorator/Core/InterfaceHtmlTsInputDecoratorSet";
import InterfaceHtmlTsInputDecorator from "../../Decorator/Core/InterfaceHtmlTsInputDecorator";

export interface HtmlTsInputSelectOneArgs extends HtmlTsInputArgsSingleValueHasChildrenType {
}

class HtmlTsInputSelectOne extends AbstractHtmlTsInputSingleValueChoice<HtmlTsInputOption> {

    type: HtmlTsInputSingleType = "select";

    protected inputTagName: TagNameTypes = "select";

    constructor(args: HtmlTsInputSelectOneArgs) {
        super(args);
        this.build();
    }

    protected createChoice(choice: HtmlTsInputChoiceType): HtmlTsInputOption {
        return new HtmlTsInputOption(
            choice.value,
            choice.label,
            choice.title,
            this.state,
        );
    }

    protected getDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): InterfaceHtmlTsInputDecorator {
        return decoratorSet.selectOne(this.args.display);
    }

}

export default HtmlTsInputSelectOne;