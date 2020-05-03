import HtmlTs from "../../../Core/HtmlTs";
import {
    HtmlTsInputArgsMultiValueType, HtmlTsInputChoiceType,
    HtmlTsInputMultiType, HtmlTsInputStateType
} from "./HtmlTsInputType";
import htmlts from "../../../build";
import AbstractHtmlTsInputBase from "./AbstractHtmlTsInputBase";
import InterfaceHtmlTsInputChoice from "../Choice/InterfaceHtmlTsInputChoice";

abstract class AbstractHtmlTsInputMultiValue<T extends InterfaceHtmlTsInputChoice> extends AbstractHtmlTsInputBase<string[]> {

    init_value: string[] = [];

    choice: T[] = [];

    abstract type: HtmlTsInputMultiType;

    protected args: HtmlTsInputArgsMultiValueType;
    protected choiceValues: HtmlTsInputChoiceType[] = [];

    protected constructor(args: HtmlTsInputArgsMultiValueType) {
        super(args);
        this.args = args;
        this.name = args.name;
        this.init_value = args.value || [];
        this.choiceValues = args.choice || [];
    }

    clear(): void {
        this.set([]);
    }

    abstract set(value: string[]): void;

    abstract value(): string[];

    validate(): boolean {
        const result: boolean = true;
        // todo 実装
        return result;
    }

    changeState(state: HtmlTsInputStateType): void {
        this.state = state;
        this.choice.forEach((choice) => {
            choice.changeState(state);
        });
    }
}

export default AbstractHtmlTsInputMultiValue;