import {
    HtmlTsInputArgsSingleValueHasChildrenType,
    HtmlTsInputSingleType, HtmlTsInputStateType
} from "../Core/HtmlTsInputType";
import AbstractHtmlTsInputSingleValueChoice from "../Core/AbstractHtmlTsInputSingleValueChoice";
import HtmlTsInputChoiceRadio from "../Choice/HtmlTsInputChoiceRadio";
import htmlts from "../../../build";

export interface HtmlTsInputRadioArgs extends HtmlTsInputArgsSingleValueHasChildrenType {

}

class HtmlTsInputRadio extends AbstractHtmlTsInputSingleValueChoice<HtmlTsInputChoiceRadio> {

    type: HtmlTsInputSingleType = "radio";

    constructor(args: HtmlTsInputRadioArgs) {
        super(args);
        this.build();
    }

    build() {
        this.choiceValues.forEach((choice) => {
            this.choice.push(
                new HtmlTsInputChoiceRadio({
                    name: this.name,
                    value: choice.value,
                    label: choice.label,
                    title: choice.title,
                    state: this.state,
                })
            );
        });
        this.html = htmlts.create("div", {
            content: this.choice.map((choice) => {
                return choice.html;
            }),
        });
        this.set(this.init_value);
        this.changeState(this.state);
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

    changeState(state: HtmlTsInputStateType): void {
        this.state = state;
        this.choice.forEach((choice) => {
            choice.changeState(state);
        });
    }

}

export default HtmlTsInputRadio;