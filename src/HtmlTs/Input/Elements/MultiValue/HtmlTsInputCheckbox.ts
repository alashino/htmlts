import AbstractHtmlTsInputMultiValue from "../Core/AbstractHtmlTsInputMultiValue";
import {HtmlTsInputArgsMultiValueType, HtmlTsInputMultiType} from "../Core/HtmlTsInputType";
import htmlts from "../../../build";
import HtmlTsInputChoiceCheckbox from "../Choice/HtmlTsInputChoiceCheckbox";
import HtmlTsUtil from "../../../Core/HtmlTsUtil";


export interface HtmlTsInputCheckboxArgs extends HtmlTsInputArgsMultiValueType {

}

class HtmlTsInputCheckbox extends AbstractHtmlTsInputMultiValue<HtmlTsInputChoiceCheckbox> {

    type: HtmlTsInputMultiType = "checkbox";

    constructor(args: HtmlTsInputCheckboxArgs) {
        super(args);
        this.build();
    }

    protected build(): void {
        this.choiceValues.forEach((choice) => {
            this.choice.push(
                new HtmlTsInputChoiceCheckbox(
                    this.name,
                    choice.value,
                    choice.label,
                    choice.title
                )
            );
        });
        this.input = htmlts.create("div", {
            content: this.choice.map((choice) => {
                return choice.html;
            }),
        });
        this.html = this.input;
        this.set(this.init_value);
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
        });
        return results;
    }

}

export default HtmlTsInputCheckbox;