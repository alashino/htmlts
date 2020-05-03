import HtmlTs from "../../../Core/HtmlTs";
import htmlts from "../../../build";


interface InterfaceHtmlTsInputChoice {

    html: HtmlTs;

    readonly value: string;
    readonly label: string;
    readonly title: string;

    clear(): void;

    set(): void;

    isSelected(): void;

}

export default InterfaceHtmlTsInputChoice;