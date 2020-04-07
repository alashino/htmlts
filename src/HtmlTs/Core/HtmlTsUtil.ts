class UtilString {

    strip(str: string, separator: string = " "): string {
        return this.lstrip(this.rstrip(str, separator), separator);
    }

    lstrip(str: string, separator: string = " "): string {
        return str.replace(RegExp(`^[${separator}]+`), "");
    }

    rstrip(str: string, separator: string = " "): string {
        return str.replace(RegExp(`[${separator}]+$`), "");
    }
}

class UtilArray {

    //
    // Array系
    //
    in<T>(value: T, array: Array<T>): boolean {
        for (const element of array) {
            if (value === element) {
                return true;
            }
        }
        return false;
    }

    getIndex<T>(value: T, array: Array<T>): number {
        for (const [index, element] of array.entries()) {
            if (value === element) {
                return index;
            }
        }
        return -1;
    }

}

const HtmlTsUtil = {
    array: new UtilArray(),
    string: new UtilString(),
};

export default HtmlTsUtil;