const HtmlTsValidateArray = {

    isNotNull: (value: string[]): boolean => {
        return value.length > 0;
    },

    minSelect: (value: string[], minSelect: number): boolean => {
        return value.length >= minSelect;
    },

    maxSelect: (value: string[], maxSelect: number): boolean => {
        return value.length <= maxSelect;
    },

};

export default HtmlTsValidateArray;