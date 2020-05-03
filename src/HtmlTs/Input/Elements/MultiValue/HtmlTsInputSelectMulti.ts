import AbstractHtmlTsInputMultiValue from "../Core/AbstractHtmlTsInputMultiValue";
import {HtmlTsInputArgsMultiValueType, HtmlTsInputMultiType} from "../Core/HtmlTsInputType";
import htmlts from "../../../build";
import HtmlTsInputOption from "./HtmlTsInputOption";
import HtmlTsUtil from "../../../Core/HtmlTsUtil";


export interface HtmlTsInputSelectMultiArgs extends HtmlTsInputArgsMultiValueType {

}

class HtmlTsInputSelectMulti extends AbstractHtmlTsInputMultiValue<HtmlTsInputOption> {

    type: HtmlTsInputMultiType = "select";

    constructor(args: HtmlTsInputSelectMultiArgs) {
        super(args);
        console.log(this);
        this.build();
    }

    protected build(): void {
        this.choiceValues.forEach((choice) => {
            this.choice.push(
                new HtmlTsInputOption(
                    choice.value,
                    choice.label,
                    choice.title
                )
            );
        });
        this.input = htmlts.create("select", {
            attr: {
                "multiple": "true",
            },
            content: this.choice.map((choice) => {
                return choice.html;
            }),
        });
        this.set(this.init_value);
        this.html = this.input;
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

export default HtmlTsInputSelectMulti;