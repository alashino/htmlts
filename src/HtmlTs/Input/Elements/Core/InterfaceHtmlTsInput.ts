import HtmlTs from "../../../Core/HtmlTs";
import {HtmlTsInputStateType} from "./HtmlTsInputType";

interface InterfaceHtmlTsInput<T> {

    // html
    name: string;
    html: HtmlTs;
    label: HtmlTs;
    input: HtmlTs;
    validation: HtmlTs;

    // value
    init_value: T;

    set(value: T): void;

    // 値を初期値に戻す
    reset(): void;

    // 値をクリアする
    clear(): void;

    value(): T;

    validate(): boolean;

    isEnable(): boolean;

    isReadOnly(): boolean;

    isDisabled(): boolean;

    changeState(state: HtmlTsInputStateType): void;

    rotateState(): void;

}

export default InterfaceHtmlTsInput;
