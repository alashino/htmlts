import htmlts from "./HtmlTs/build";
import HtmlTsFactory from "./HtmlTs/Core/HtmlTsFactory";

declare global {
    interface Window {
        htmlts: HtmlTsFactory;
    }
}

window.htmlts = htmlts;