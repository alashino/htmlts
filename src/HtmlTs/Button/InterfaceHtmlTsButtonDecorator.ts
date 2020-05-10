import {HtmlTsButtonSize, HtmlTsButtonType} from "./HtmlTsButtonTypes";
import HtmlTs from "../Core/HtmlTs";

interface InterfaceHtmlTsButtonDecorator {

    decorate(button: HtmlTs, type: HtmlTsButtonType, size: HtmlTsButtonSize): void;

}

export default InterfaceHtmlTsButtonDecorator;