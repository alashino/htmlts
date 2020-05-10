import htmlts from "./build";
import HtmlTsFactory from "./Core/HtmlTsFactory";

declare global {
    interface Window {
        htmlts: HtmlTsFactory;
    }
}

window.htmlts = htmlts;