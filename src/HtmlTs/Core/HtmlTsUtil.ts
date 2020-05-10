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

    /**
     * 文字列のバイト数を返します。
     * @param {string} str
     * @return {number}
     */
    countByte(str: string): number {
        if (str === undefined || str === "") {
            return 0;
        }
        // UTF-8なので、encodeURIしてから "%" の数を数える
        const value = encodeURI(str);
        const cnt = value.replace(/%[0-9A-F]{2}/g, '*').length;
        /*
            var cnt = 0;
            for (var i = 0; i < value.length; i++) {
                var charcode = value.charCodeAt(i);
                // Shift_JIS: 0x0 ～ 0x80, 0xa0 , 0xa1 ～ 0xdf , 0xfd ～ 0xff
                // Unicode : 0x0 ～ 0x80, 0xf8f0, 0xff61 ～ 0xff9f, 0xf8f1 ～ 0xf8f3
                if ((charcode >= 0x0 && charcode < 0x81) || (charcode == 0xf8f0) || (charcode >= 0xff61 && charcode < 0xffa0) || (charcode >= 0xf8f1 && charcode < 0xf8f4)) {
                    cnt++;
                } else {
                    cnt += 2;
                }
            }
        */
        return cnt;
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