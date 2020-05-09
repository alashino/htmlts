import InterfaceHtmlTsInputValidator from "./InterfaceHtmlTsInputValidator";
import {HtmlTsInputTextValidatorMapType} from "./HtmlTsInputValidatorTypes";
import HtmlTsInputValidatorResult from "./HtmlTsInputValidatorResult";
import HtmlTsInputDictionary from "../../HtmlTsInputDictionary";


abstract class AbstractHtmlTsInputValidator<T extends string | string[]> implements InterfaceHtmlTsInputValidator<T>{

    protected abstract keys: string[];
    protected abstract map: { [key: string]: HtmlTsInputTextValidatorMapType<T> };
    protected abstract isTest: {[key: string]: boolean};

    validate(value: T): HtmlTsInputValidatorResult {
        const results = new HtmlTsInputValidatorResult();
        for (const key of this.keys) {
            if (this.isTest[key] !== true) continue;
            if (this.map[key] === undefined) continue;
            results.append(this.map[key].func(value), HtmlTsInputDictionary.get(this.map[key].wordKey));
        }
        return results;
    }

}

export default AbstractHtmlTsInputValidator;