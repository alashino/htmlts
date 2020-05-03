import AbstractChoiceWithLabel from "./AbstractChoiceWithLabel";


class HtmlTsInputChoiceRadio extends AbstractChoiceWithLabel {

    type: "checkbox" | "radio" = "radio";

    constructor(name: string, value: string, label: string, title: string = "") {
        super(name, value, label, title);
        this.build();
    }

}

export default HtmlTsInputChoiceRadio;