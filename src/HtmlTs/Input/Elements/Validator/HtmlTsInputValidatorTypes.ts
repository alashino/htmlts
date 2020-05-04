export interface HtmlTsInputValidatorBaseTypes {
    realTimeValidate?: boolean; // default false
    isNotNull?: boolean;
}

export interface HtmlTsInputTextValidatorType extends HtmlTsInputValidatorBaseTypes {
    isNotNull?: boolean;
    isNumber?: boolean;
    isDecimal?: boolean;
    isFloat?: boolean;
    length?: number;
    inList?: string[];
}