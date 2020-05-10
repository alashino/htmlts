import InterfaceHtmlTsInput from "../Core/InterfaceHtmlTsInput";
import htmlts from "../../../build";
import AbstractHtmlTsInputSingleValue from "../Core/AbstractHtmlTsInputSingleValue";
import AbstractHtmlTsInputMultiValue from "../Core/AbstractHtmlTsInputMultiValue";


class HtmlTsInputController {

    private inputs: InterfaceHtmlTsInput<string | string[]>[] = [];

    subscribe(input: InterfaceHtmlTsInput<string | string[]>): void {
        if (htmlts.util.array.in(input, this.inputs)) return;
        this.inputs.push(input);
    }

    getInputs(name: string): InterfaceHtmlTsInput<string | string[]>[] {
        const results: InterfaceHtmlTsInput<string | string[]>[] = [];
        this.inputs.forEach((input) => {
            if (input.name == name) {
                results.push(input);
            }
        });
        return results;
    }

    validate(): boolean {
        let result = true;
        this.inputs.forEach((input) => {
            const each_result = input.validate();
            result = result && each_result;
        });
        return result;
    }

    getValues(): { [name: string]: string | string[] } {
        const results: { [name: string]: string | string[] } = {};
        this.inputs.forEach((input) => {
            if (input.name !== undefined && input.isDisabled() === false) {
                results[input.name] = input.value();
            }
        });
        return results;
    }

    reset(): void {
        this.inputs.forEach((input) => {
            input.reset();
        });
    }

    clear(): void {
        this.inputs.forEach((input) => {
            input.clear();
        });
    }

    setValue(name: string, value: string | string[]) {
        for (const input of this.inputs) {
            if (input.name !== name) continue;
            if (input instanceof AbstractHtmlTsInputSingleValue) {
                if (typeof value === "string") {
                    input.set(value);
                } else {
                    if (value.length > 0) {
                        input.set(value[0]);
                    } else {
                        input.set("");
                    }
                }
            } else if (input instanceof AbstractHtmlTsInputMultiValue) {
                if (typeof value === "string") {
                    input.set([value]);
                } else {
                    input.set(value);
                }
            }
        }
    }

}

export default HtmlTsInputController;