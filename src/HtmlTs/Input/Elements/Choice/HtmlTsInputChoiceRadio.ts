import AbstractChoiceWithLabel, {AbstractChoiceWithLabelArgs} from "./AbstractChoiceWithLabel";


class HtmlTsInputChoiceRadio extends AbstractChoiceWithLabel {

    type: "checkbox" | "radio" = "radio";

    constructor(args: AbstractChoiceWithLabelArgs) {
        super(args);
        this.build();
    }

}

export default HtmlTsInputChoiceRadio;