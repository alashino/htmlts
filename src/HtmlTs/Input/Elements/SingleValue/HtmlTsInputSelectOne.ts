import {
    HtmlTsInputArgsSingleValueHasChildrenType, HtmlTsInputChoiceType,
    HtmlTsInputSingleType
} from "../Core/HtmlTsInputType";
import HtmlTsInputOption from "../Choice/HtmlTsInputOption";
import AbstractHtmlTsInputSingleValueChoice from "../Core/AbstractHtmlTsInputSingleValueChoice";
import {TagNameTypes} from "../../../Core/HtmlTsTypes";
import InterfaceHtmlTsInputDecoratorSet from "../../Decorator/InterfaceHtmlTsInputDecoratorSet";
import HtmlTs from "../../../Core/HtmlTs";

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

    protected getHtmlByDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): HtmlTs {
        const decorator = decoratorSet.selectOne(this.args.display);
        return decorator.createHtml(this);
    }

}

export default HtmlTsInputSelectOne;