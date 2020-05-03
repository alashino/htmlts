import HtmlTs from "../../../Core/HtmlTs";
import {HtmlTsInputStateType} from "../Core/HtmlTsInputType";


interface InterfaceHtmlTsInputChoice {

    html: HtmlTs;

    readonly value: string;
    readonly label: string;
    readonly title: string;

    clear(): void;

    set(): void;

    isSelected(): void;

    changeState(state: HtmlTsInputStateType): void;

}

export default InterfaceHtmlTsInputChoice;