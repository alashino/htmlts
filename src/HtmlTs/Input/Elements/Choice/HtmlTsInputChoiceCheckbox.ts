import AbstractChoiceWithLabel, {AbstractChoiceWithLabelArgs} from "./AbstractChoiceWithLabel";

class HtmlTsInputChoiceCheckbox extends AbstractChoiceWithLabel {

    type: "checkbox" | "radio" = "checkbox";

    constructor(args: AbstractChoiceWithLabelArgs) {
        super(args);
        this.build();
    }

}

export default HtmlTsInputChoiceCheckbox;