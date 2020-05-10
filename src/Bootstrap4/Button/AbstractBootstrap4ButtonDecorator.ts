import AbstractHtmlTsButtonDecorator from "../../HtmlTs/Button/AbstractHtmlTsButtonDecorator";


abstract class AbstractBootstrap4ButtonDecorator extends AbstractHtmlTsButtonDecorator {

    protected sizeClasses = {
        "xs": "btn-sm",
        "s": "btn-sm",
        "m": "",
        "l": "btn-lg",
        "xl": "btn-lg",
    };

}

export default AbstractBootstrap4ButtonDecorator;
