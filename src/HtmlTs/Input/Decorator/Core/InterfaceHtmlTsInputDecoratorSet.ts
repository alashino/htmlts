import InterfaceHtmlTsInputDecorator from "./InterfaceHtmlTsInputDecorator";
import {HtmlTsInputDecoratorChoiceTypes, HtmlTsInputDecoratorBaseTypes} from "./HtmlTsInputDecoratorTypes";


interface InterfaceHtmlTsInputDecoratorSet {

    hidden(prams?: HtmlTsInputDecoratorBaseTypes): InterfaceHtmlTsInputDecorator;
    text(prams?: HtmlTsInputDecoratorBaseTypes): InterfaceHtmlTsInputDecorator;
    password(prams?: HtmlTsInputDecoratorBaseTypes): InterfaceHtmlTsInputDecorator;
    textarea(prams?: HtmlTsInputDecoratorBaseTypes): InterfaceHtmlTsInputDecorator;

    checkbox(prams?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator;
    radio(prams?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator;
    selectOne(prams?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator;
    selectMulti(prams?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator;

}

export default InterfaceHtmlTsInputDecoratorSet;