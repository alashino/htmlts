import HtmlTsFactory from "../HtmlTs/Core/HtmlTsFactory";
import htmltsBootstrap4 from "./build";

declare global {
    interface Window {
        htmlts: HtmlTsFactory;
        htmltsBootstrap4: any;
    }
}

window.htmlts.button.setDecorator(htmltsBootstrap4.button.button);
window.htmlts.table.setDecorator(htmltsBootstrap4.table.table);
window.htmltsBootstrap4 = htmltsBootstrap4;