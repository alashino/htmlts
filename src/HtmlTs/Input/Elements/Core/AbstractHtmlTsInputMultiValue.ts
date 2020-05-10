import {
    HtmlTsInputArgsMultiValueType,
    HtmlTsInputChoiceType,
    HtmlTsInputMultiType
} from "./HtmlTsInputType";
import AbstractHtmlTsInputBase from "./AbstractHtmlTsInputBase";
import InterfaceHtmlTsInputChoice from "../Choice/InterfaceHtmlTsInputChoice";
import HtmlTsUtil from "../../../Core/HtmlTsUtil";
import HtmlTs from "../../../Core/HtmlTs";
import htmlts from "../../../build";
import {TagNameTypes} from "../../../Core/HtmlTsTypes";
import HtmlTsInputChoiceValidatorMulti from "../../Validator/HtmlTsInputChoiceValidatorMulti";

abstract class AbstractHtmlTsInputMultiValue<T extends InterfaceHtmlTsInputChoice> extends AbstractHtmlTsInputBase<string[]> {

    init_value: string[] = [];

    choice: T[] = [];

    abstract type: HtmlTsInputMultiType;
    protected abstract inputTagName: TagNameTypes;

    protected validator: HtmlTsInputChoiceValidatorMulti;

    protected args: HtmlTsInputArgsMultiValueType;
    protected choiceValues: HtmlTsInputChoiceType[] = [];

    protected constructor(args: HtmlTsInputArgsMultiValueType) {
        super(args);
        this.args = args;
        this.name = args.name;
        this.init_value = args.value || [];
        this.choiceValues = args.choice || [];
        this.validator = new HtmlTsInputChoiceValidatorMulti(args.validate);
    }

    protected createInput(): HtmlTs {
        this.choice = this.choiceValues.map((choice) => {
            return this.createChoice(choice);
        });
        const input = htmlts.create(this.inputTagName, {
            content: this.choice.map((choice) => {
                return choice.html;
            }),
        });
        return input;
    }

    protected abstract createChoice(choice: HtmlTsInputChoiceType): T;

    clear(): void {
        this.set([]);
    }

    set(value: string[]): void {
        this.choice.forEach((choice) => {
            choice.clear();
            if (HtmlTsUtil.array.in(choice.value, value)) {
                choice.set();
            }
        });
    }

    value(): string[] {
        const results: string[] = [];
        this.choice.forEach((choice) => {
            if (choice.isSelected()) {
                results.push(choice.value);
            }
        })
        return results;
    }

}

export default AbstractHtmlTsInputMultiValue;