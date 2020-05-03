import {
    HtmlTsInputArgsSingleValueHasChildrenType, HtmlTsInputChoiceType,
    HtmlTsInputSingleType
} from "../Core/HtmlTsInputType";
import htmlts from "../../../build";
import HtmlTsInputOption from "../MultiValue/HtmlTsInputOption";
import HtmlTs from "../../../Core/HtmlTs";
import AbstractHtmlTsInputSingleValueChoice from "../Core/AbstractHtmlTsInputSingleValueChoice";

export interface HtmlTsInputSelectOneArgs extends HtmlTsInputArgsSingleValueHasChildrenType {

}

class HtmlTsInputSelectOne extends AbstractHtmlTsInputSingleValueChoice<HtmlTsInputOption> {

    type: HtmlTsInputSingleType = "select";
    args: HtmlTsInputSelectOneArgs;

    constructor(args: HtmlTsInputSelectOneArgs) {
        super(args);
        this.build();
    }

    protected createInput(): HtmlTs {
        this.choice = this.choiceValues.map((choice) => {
            return new HtmlTsInputOption(
                choice.value,
                choice.label,
                choice.title,
            )
        });
        return htmlts.create("select", {
            content: this.choice.map((option) => {
                return option.html;
            })
        });
    }
    
    value(): string {
        // @ts-ignore
        return this.html.htmlElement.value;
    }

    validate(): boolean {
        return true;
    }

}

export default HtmlTsInputSelectOne;