const HtmlTsValidateArray = {

    isNotNull: (value: string[]): boolean => {
        if (value === undefined) return false;
        return value.length > 0;
    },

    minSelect: (value: string[], minSelect: number): boolean => {
        if (value === undefined || minSelect === undefined) return false;
        return value.length >= minSelect;
    },

    maxSelect: (value: string[], maxSelect: number): boolean => {
        if (value === undefined || maxSelect === undefined) return false;
        return value.length <= maxSelect;
    },

};

export default HtmlTsValidateArray;