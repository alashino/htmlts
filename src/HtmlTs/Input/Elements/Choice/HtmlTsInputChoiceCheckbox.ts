import AbstractChoiceWithLabel from "./AbstractChoiceWithLabel";

class HtmlTsInputChoiceCheckbox extends AbstractChoiceWithLabel {

    type: "checkbox" | "radio" = "checkbox";


    constructor(name: string, value: string, label: string, title: string = "") {
        super(name, value, label, title);
        this.build();
    }

}

export default HtmlTsInputChoiceCheckbox;