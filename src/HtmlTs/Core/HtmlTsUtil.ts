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
};

export default HtmlTsUtil;