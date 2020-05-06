import AbstractHtmlTsInputDecoratorSet from "../../HtmlTs/Input/Decorator/AbstractHtmlTsInputDecoratorSet";
import InterfaceHtmlTsInputDecorator from "../../HtmlTs/Input/Decorator/InterfaceHtmlTsInputDecorator";
import {
    HtmlTsInputDecoratorBaseTypes,
    HtmlTsInputDecoratorChoiceTypes,
    HtmlTsInputDecoratorTextTypes
} from "../../HtmlTs/Input/Decorator/HtmlTsInputDecoratorTypes";
import BootStrap4InputDecoratorText from "./BootStrap4InputDecoratorText";
import BootStrap4InputDecoratorSelect from "./BootStrap4InputDecoratorSelect";
import BootStrap4InputDecoratorChoice from "./BootStrap4InputDecoratorChoice";

class BootStrap4InputDecoratorSet extends AbstractHtmlTsInputDecoratorSet {

    protected hiddenClass: { new(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator } = BootStrap4InputDecoratorText;
    protected textClass: { new(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator } = BootStrap4InputDecoratorText;
    protected passwordClass: { new(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator } = BootStrap4InputDecoratorText;
    protected textareaClass: { new(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator } = BootStrap4InputDecoratorText;

    protected checkboxClass: { new(params?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator } = BootStrap4InputDecoratorChoice;
    protected radioClass: { new(params?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator } = BootStrap4InputDecoratorChoice;

    protected selectMultiClass: { new(params?: HtmlTsInputDecoratorBaseTypes): InterfaceHtmlTsInputDecorator } = BootStrap4InputDecoratorSelect;
    protected selectOneClass: { new(params?: HtmlTsInputDecoratorBaseTypes): InterfaceHtmlTsInputDecorator } = BootStrap4InputDecoratorSelect;

}

export default BootStrap4InputDecoratorSet;