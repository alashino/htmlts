import AbstractHtmlTsInputSingleValue from "./AbstractHtmlTsInputSingleValue";
import {
    HtmlTsInputArgsSingleValueHasChildrenType,
    HtmlTsInputChoiceType
} from "./HtmlTsInputType";
import htmlts from "../../../build";
import HtmlTs from "../../../Core/HtmlTs";
import InterfaceHtmlTsInputChoice from "../Choice/InterfaceHtmlTsInputChoice";
import {TagNameTypes} from "../../../Core/HtmlTsTypes";
import HtmlTsInputChoiceValidator from "../Validator/HtmlTsInputChoiceValidator";
import {HtmlTsInputValidatorBaseTypes} from "../Validator/HtmlTsInputValidatorTypes";

export interface HtmlTsInputSelectOneArgs extends HtmlTsInputArgsSingleValueHasChildrenType {
    validate?: HtmlTsInputValidatorBaseTypes;
}

abstract class AbstractHtmlTsInputSingleValueChoice<T extends InterfaceHtmlTsInputChoice> extends AbstractHtmlTsInputSingleValue {

    choice: T[] = [];

    validator: HtmlTsInputChoiceValidator;

    protected choiceValues: HtmlTsInputChoiceType[] = [];
    protected abstract inputTagName: TagNameTypes;

    protected constructor(args: HtmlTsInputSelectOneArgs) {
        super(args);
        this.choiceValues = args.choice || [];
        this.validator = new HtmlTsInputChoiceValidator(args.validate);
    }

    protected abstract createChoice(choice: HtmlTsInputChoiceType): T;

    protected createInput(): HtmlTs {
        this.choice = this.choiceValues.map((choice) => {
            return this.createChoice(choice);
        });
        return htmlts.create(this.inputTagName, {
            content: this.choice.map((option) => {
                return option.html;
            })
        });
    }
    set(value: string): void {
        this.choice.forEach((choice) => {
            choice.clear();
            if (choice.value === value) {
                choice.set();
            }
        });
    }

    value(): string {
        for (const choice of this.choice) {
            if (choice.isSelected()) {
                return choice.value;
            }
        }
        return "";
    }

    validate(): boolean {
        return true;
    }

}

export default AbstractHtmlTsInputSingleValueChoice;