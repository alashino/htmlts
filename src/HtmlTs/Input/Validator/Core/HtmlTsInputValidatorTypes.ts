export interface HtmlTsInputValidatorBaseTypes {
    realTimeValidate?: boolean; // default false
    isNotNull?: boolean;
}

export type HtmlTsInputTextValidatorMapType<T extends string | string[]> = {
    func: (value: T) => boolean;
    wordKey: string;
};
