export interface HtmlTsInputValidatorBaseTypes<T extends string | string[]> {
    realTimeValidate?: boolean; // default false
    isNotNull?: boolean;
    custom?: HtmlTsInputCustomValidateRule<T>[];
}

export type HtmlTsInputTextValidatorMapType<T extends string | string[]> = {
    func: (value: T) => boolean;
    wordKey: string;
};

export type HtmlTsInputCustomValidateRule<T extends string | string[]> = {
    test: (value: T) => boolean;
    message: string;
};