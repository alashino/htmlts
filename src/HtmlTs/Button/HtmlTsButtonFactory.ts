import HtmlTs from "../Core/HtmlTs";
import {HtmlTsButtonParams} from "./HtmlTsButtonTypes";
import InterfaceHtmlTsButtonDecorator from "./InterfaceHtmlTsButtonDecorator";
import htmlts from "../build";


class HtmlTsButtonFactory {

    private defaultDecorator: InterfaceHtmlTsButtonDecorator;

    setDecorator(decorator: InterfaceHtmlTsButtonDecorator): void {
        this.defaultDecorator = decorator;
    }

    create(params: HtmlTsButtonParams, decorator: InterfaceHtmlTsButtonDecorator = undefined): HtmlTs {
        const button = htmlts.create("button", params);
        // 必ずtype属性はbuttonにする
        button.setAttr("type", "button");
        if (decorator !== undefined) {
            decorator.decorate(button, params.type, params.size);
        } else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.decorate(button, params.type, params.size);
        }
        return button;
    }

}

export default HtmlTsButtonFactory;