import InterfaceHtmlTsButtonDecorator from "./InterfaceHtmlTsButtonDecorator";
import {HtmlTsButtonSize, HtmlTsButtonType} from "./HtmlTsButtonTypes";
import HtmlTs from "../Core/HtmlTs";


abstract class AbstractHtmlTsButtonDecorator implements InterfaceHtmlTsButtonDecorator {

    protected abstract classes: { [HtmlTsButtonType: string]: string };

    protected abstract sizeClasses: { [HtmlTsButtonSize: string]: string };

    decorate(button: HtmlTs, type: HtmlTsButtonType, size: HtmlTsButtonSize): void {
        const classString = this.classes[type] || this.classes["default"];
        if (classString !== undefined && typeof classString === "string" && classString !== "") {
            button.addClass(classString);
        }
        const sizeString = this.sizeClasses[size];
        if (sizeString !== undefined && typeof sizeString === "string" && sizeString !== "") {
            button.addClass(sizeString);
        }
    }

}

export default AbstractHtmlTsButtonDecorator;
