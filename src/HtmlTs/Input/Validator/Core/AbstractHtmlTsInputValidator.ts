import InterfaceHtmlTsInputValidator from "./InterfaceHtmlTsInputValidator";
import {HtmlTsInputTextValidatorMapType, HtmlTsInputValidatorBaseTypes} from "./HtmlTsInputValidatorTypes";
import HtmlTsInputValidatorResult from "./HtmlTsInputValidatorResult";
import HtmlTsInputDictionary from "../../HtmlTsInputDictionary";


abstract class AbstractHtmlTsInputValidator<T extends string | string[]> implements InterfaceHtmlTsInputValidator<T>{

    protected abstract keys: string[];
    protected abstract map: { [key: string]: HtmlTsInputTextValidatorMapType<T> };
    protected abstract isTest: {[key: string]: boolean};
    protected params: HtmlTsInputValidatorBaseTypes<T>;

    protected constructor(params: HtmlTsInputValidatorBaseTypes<T>) {
        this.params = params;
    }

    validate(value: T): HtmlTsInputValidatorResult {
        const results = new HtmlTsInputValidatorResult();
        for (const key of this.keys) {
            if (this.isTest[key] !== true) continue;
            if (this.map[key] === undefined) continue;
            results.append(
                this.map[key].func(value),
                HtmlTsInputDictionary.get(this.map[key].wordKey)
            );
        }
        if (this.params !== undefined &&
            this.params.custom !== undefined &&
            this.params.custom instanceof Array
        ) {
            this.params.custom.forEach((custom) => {
                if (typeof custom.test === "function") {
                    results.append(
                        custom.test(value),
                        custom.message,
                    );
                }
            });
        }
        return results;
    }

}

export default AbstractHtmlTsInputValidator;