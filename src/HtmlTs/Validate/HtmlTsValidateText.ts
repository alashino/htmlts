import HtmlTsUtil from "../Core/HtmlTsUtil";


const validate_const = {
    "regexp": {
        // 数値
        "integer": /^-?(0|[1-9][0-9]*)$/,
        "decimal": /^(0|[1-9][0-9]*)$/,
        "float": /^-?(0|[1-9][0-9]*)([\.]{1}[0-9]+)?$/,
        // 文字列
        "alphabet": /^[a-z]*$/i,
        "alphabet_uppercase": /^[A-Z]*$/,
        "alphabet_lowercase": /^[a-z]*$/,
        "alphanumeric": /^[0-9a-z]*$/i,
        "symbols": /^[(){}\[\]_\-+;:*@&%!^~`,.]+$/,
        "password": /^[a-zA-Z0-9(){}\[\]_\-+;:*@&%!^~`,.]+$/,
        // 特定のフォーマット
        "url": /^(https?):\/\/.+$/i,
        "email": /^[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i,
    }
};

const HtmlTsValidateText = {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 入力必須
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    isNotNull: (value: string): boolean => {
        if (value === undefined) return false;
        return value !== "";
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 使用文字制限（数値系）
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 数値かどうか
     * 入力値がNULLの時は true を返します
     */
    isNumber: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        // globalなisNaNはnumberじゃなくてもいけるはずだが？
        // @ts-ignore
        return !isNaN(value);
    },
    /**
     * 整数かどうか
     * 先頭が0は許さない
     * @param {string} value
     * @returns {boolean}
     */
    isInteger: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.integer, value);
    },

    /**
     * 正の整数かどうか
     * 先頭が0は許さない
     * @param {string} value
     * @returns {boolean}
     */
    isDecimal: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.decimal, value);
    },

    /**
     * 小数値かどうか
     * @param {string} value_in
     * @param {int|undefined} precision 桁数。指定しない場合はundefinedでおｋ。
     * @returns {boolean}
     */
    isFloat: (value: string, precision: number = undefined): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        // 表現をチェック
        let result = HtmlTsValidateText.isMatchRegexp(validate_const.regexp.float, value);
        // 桁数をチェック
        // todo おそらく正規表現でいける。
        // if (result && HtmlTsValidateText.isNotNull(precision) && HtmlTsValidateText.Is(precision)) {
        //     // Float型の時で桁数が指定されている時
        //     const arr = value.split(".");
        //     if (arr.length === 2) {
        //         const prec = arr[1];
        //         if (prec.length > precision) {
        //             // 桁数チェックでアウト
        //             result = false;
        //         }
        //     }
        // }
        return result;
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 使用文字制限（文字列系）
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 英字だけかどうか（大文字小文字両方可）
     * @param {string} value
     * @returns {boolean}
     */
    isAlphabet: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.alphabet, value);
    },

    /**
     * 英字だけかどうか（大文字のみ）
     * @param {string} value
     * @returns {boolean}
     */
    isAlphabetUppercase: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.alphabet_uppercase, value);
    },

    /**
     * 英字だけかどうか（小文字のみ）
     * @param {string} value
     * @returns {boolean}
     */
    isAlphabetLowercase: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.alphabet_lowercase, value);
    },

    /**
     * 英数字だけかどうか
     * @param {string} value
     * @returns {boolean}
     */
    isAlphanumeric: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.alphanumeric, value);
    },

    isSymbol: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.symbols, value);
    },

    isPassword: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.password, value);
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 特定のフォーマット
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * URLの形式かどうか
     * @param {string} value
     * @returns {boolean}
     */
    isUrl: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.url, value);
    },

    /**
     * Emailアドレスの形式かどうか
     * @param {string} value
     * @returns {boolean}
     */
    isEmail: (value: string): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.email, value);
    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //  文字数
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    isLengthOrLess: (value: string, length: number): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return value.length <= length;
    },

    isLengthOrMore: (value: string, length: number): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return value.length >= length;
    },

    isByteOrMore: (value: string, length: number): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return (HtmlTsUtil.string.countByte(value + "") >= length);
    },

    isByteOrLess: (value: string, length: number): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return (HtmlTsUtil.string.countByte(value + "") <= length);
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 数値の大小
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * [limit]以下の数値かどうか
     * @param {string} value
     * @param {float} limit
     * @returns {boolean}
     */
    isNumberOrLess: (value: string, limit: number): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return parseFloat(value) <= limit;
    },

    /**
     * [limit]以上の数値かどうか
     * @param value {int|float|string}
     * @param limit {int|float|string}
     * @returns {boolean}
     */
    isNumberOrMore: (value: string, limit: number): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return parseFloat(value) >= limit;
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 含まれているかどうか
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 指定された個数の数字が含まれているかどうか
     * @param {string} value
     * @param {number} min_number
     * @return {boolean}
     */
    isIncludeDigitOrMore: (value: string, size: number): boolean => {
        let count = 0;
        for (const char of value) {
            if (HtmlTsValidateText.isInteger(char)) count++;
        }
        return count >= size;
    },

    /**
     * 指定された個数の記号が含まれているかどうか
     * @param {string} value
     * @param {number} size
     * @return {boolean}
     */
    isIncludeSymbolOrMore: (value: string, size: number): boolean => {
        let count = 0;
        for (const char of value) {
            if (HtmlTsValidateText.isSymbol(char)) count++;
        }
        return count >= size;
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // リストにあるかどうか
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * ホワイトリストにあるかどうか
     */
    isInList: (value: string, list: string[]): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return HtmlTsUtil.array.in(value, list);
    },
    /**
     * ブラックリストにないかどうか
     * @param value
     * @param list_in {Array | function}
     * @returns {boolean}
     */
    isNotInList: (value: string, list: string[]): boolean => {
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        return !HtmlTsValidateText.isInList(value, list);
    },

    //
    //
    // UTILITY
    //
    //
    /**
     * テストする文字列が指定された正規表現を通るかどうか
     * マッチしたらTrueを返す。
     * マッチしなかったらFalseを返す
     * @param {RegExp|string} regexp 正規表現
     * @param {string} value_in テストする文字列
     * @returns {boolean}
     */
    isMatchRegexp: (regexp: string | RegExp, value: string): boolean => {
        // 空文字の時は常にマッチすることにする（チェックを抜けるようにする）
        if (!HtmlTsValidateText.isNotNull(value)) return true;
        if (regexp instanceof RegExp) {
            return regexp.test(value);
        } else {
            return (value.match(regexp).length > 0);
        }
    },
};

export default HtmlTsValidateText;