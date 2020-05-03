import AbstractHtmlTsInputSingleValue from "./AbstractHtmlTsInputSingleValue";
import {
    HtmlTsInputArgsSingleValueHasChildrenType, HtmlTsInputChoiceType,
    HtmlTsInputSingleType
} from "./HtmlTsInputType";
import htmlts from "../../../build";
import HtmlTsInputOption from "../MultiValue/HtmlTsInputOption";
import HtmlTs from "../../../Core/HtmlTs";
import InterfaceHtmlTsInputChoice from "../MultiValue/InterfaceHtmlTsInputChoice";

export interface HtmlTsInputSelectOneArgs extends HtmlTsInputArgsSingleValueHasChildrenType {

}

abstract class AbstractHtmlTsInputSingleValueChoice<T extends InterfaceHtmlTsInputChoice> extends AbstractHtmlTsInputSingleValue {

    choice: T[] = [];

    protected choiceValues: HtmlTsInputChoiceType[] = [];

    protected constructor(args: HtmlTsInputSelectOneArgs) {
        super(args);
        this.choiceValues = args.choice || [];
    }

    set(value: string): void {
        this.choice.forEach((choice) => {
            choice.clear();
            if (choice.value === value) {
                choice.set();
            }
        });
    }

}

export default AbstractHtmlTsInputSingleValueChoice;