import {
    HtmlTsInputArgsSingleValueHasChildrenType,
    HtmlTsInputSingleType
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
        console.log(this);
    }

    build() {
        this.choiceValues.forEach((choice) => {
            this.choice.push(
                new HtmlTsInputChoiceRadio(
                    this.name,
                    choice.value,
                    choice.label,
                    choice.title,
                )
            );
        });
        this.html = htmlts.create("div", {
            content: this.choice.map((choice) => {
                return choice.html;
            }),
        });
        this.set(this.init_value);
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

export default HtmlTsInputRadio;