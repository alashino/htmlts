import {HtmlTsInputTextValidatorMapType, HtmlTsInputValidatorBaseTypes} from "./Core/HtmlTsInputValidatorTypes";
import AbstractHtmlTsInputValidator from "./Core/AbstractHtmlTsInputValidator";
import HtmlTsValidateText from "../../Validate/HtmlTsValidateText";

class HtmlTsInputChoiceValidatorSingle extends AbstractHtmlTsInputValidator<string>{

    protected keys: string[] = [
        "isNotNull",
    ];
    protected map: { [p: string]: HtmlTsInputTextValidatorMapType<string> } = {
        isNotNull: {
            func: HtmlTsValidateText.isNotNull,
            wordKey: "choiceIsNotNull",
        },
    };
    protected isTest: { [p: string]: boolean } = {
        "isNotNull": false,
    };

    private params: HtmlTsInputValidatorBaseTypes;

    constructor(params: HtmlTsInputValidatorBaseTypes) {
        super();
        this.params = params;
        if (this.params === undefined) return;
        if (this.params.isNotNull !== undefined) this.isTest["isNotNull"] = this.params.isNotNull;
    }

}

export default HtmlTsInputChoiceValidatorSingle;
