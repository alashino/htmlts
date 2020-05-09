import AbstractHtmlTsInputDecoratorSet from "../Core/AbstractHtmlTsInputDecoratorSet";
import InterfaceHtmlTsInputDecorator from "../Core/InterfaceHtmlTsInputDecorator";
import {
    HtmlTsInputDecoratorChoiceTypes,
    HtmlTsInputDecoratorTextTypes
} from "../Core/HtmlTsInputDecoratorTypes";


class HtmlTsInputDefaultDecoratorSet extends AbstractHtmlTsInputDecoratorSet {

    protected hiddenClass: { new(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator };
    protected textClass: { new(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator };
    protected passwordClass: { new(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator };
    protected textareaClass: { new(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator };

    protected checkboxClass: { new(params?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator };
    protected radioClass: { new(params?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator };

    protected selectMultiClass: { new(params?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator };
    protected selectOneClass: { new(params?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator };

}

export default HtmlTsInputDefaultDecoratorSet;