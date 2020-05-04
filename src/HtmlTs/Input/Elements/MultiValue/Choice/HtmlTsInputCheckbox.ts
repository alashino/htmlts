import AbstractHtmlTsInputMultiValue from "../../Core/AbstractHtmlTsInputMultiValue";
import {
    HtmlTsInputArgsMultiValueType,
    HtmlTsInputChoiceType,
    HtmlTsInputMultiType,
    HtmlTsInputStateType
} from "../../Core/HtmlTsInputType";
import HtmlTsInputChoiceCheckbox from "../../Choice/HtmlTsInputChoiceCheckbox";
import {TagNameTypes} from "../../../../Core/HtmlTsTypes";


export interface HtmlTsInputCheckboxArgs extends HtmlTsInputArgsMultiValueType {
}

class HtmlTsInputCheckbox extends AbstractHtmlTsInputMultiValue<HtmlTsInputChoiceCheckbox> {

    type: HtmlTsInputMultiType = "checkbox";
    protected inputTagName: TagNameTypes = "div";

    constructor(args: HtmlTsInputCheckboxArgs) {
        super(args);
        this.build();
    }

    protected createChoice(choice: HtmlTsInputChoiceType): HtmlTsInputChoiceCheckbox {
        return new HtmlTsInputChoiceCheckbox({
            name: this.name,
            value: choice.value,
            label: choice.label,
            title: choice.title,
            state: this.state,
        });
    }

    changeState(state: HtmlTsInputStateType): void {
        this.state = state;
        this.choice.forEach((choice) => {
            choice.changeState(state);
        });
    }

}

export default HtmlTsInputCheckbox;