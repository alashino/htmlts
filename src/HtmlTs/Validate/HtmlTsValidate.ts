

class HtmlTsValidateClass {

    isNotNull(value: string | string[]): boolean {
        if (value instanceof Array) {
            return value.length > 0;
        } else {
            return (value !== "");
        }
    }

    

}

const HtmlTsValidate = new HtmlTsValidateClass;

export default HtmlTsValidate;