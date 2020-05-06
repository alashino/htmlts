import InterfaceHtmlTsInputDecoratorSet from "./InterfaceHtmlTsInputDecoratorSet";
import InterfaceHtmlTsInputDecorator from "./InterfaceHtmlTsInputDecorator";
import HtmlTsInputDefaultDecorator from "./HtmlTsInputDefaultDecorator";
import {
    HtmlTsInputDecoratorBaseTypes,
    HtmlTsInputDecoratorChoiceTypes,
    HtmlTsInputDecoratorTextTypes
} from "./HtmlTsInputDecoratorTypes";


abstract class AbstractHtmlTsInputDecoratorSet implements InterfaceHtmlTsInputDecoratorSet {

    protected abstract hiddenClass: new (params?: HtmlTsInputDecoratorTextTypes) => InterfaceHtmlTsInputDecorator;
    protected abstract passwordClass: new (params?: HtmlTsInputDecoratorTextTypes) => InterfaceHtmlTsInputDecorator;
    protected abstract textClass: new (params?: HtmlTsInputDecoratorTextTypes) => InterfaceHtmlTsInputDecorator;
    protected abstract textareaClass: new (params?: HtmlTsInputDecoratorTextTypes) => InterfaceHtmlTsInputDecorator;

    protected abstract checkboxClass: new (params?: HtmlTsInputDecoratorChoiceTypes) => InterfaceHtmlTsInputDecorator;
    protected abstract radioClass: new (params?: HtmlTsInputDecoratorChoiceTypes) => InterfaceHtmlTsInputDecorator;

    protected abstract selectOneClass: new (params?: HtmlTsInputDecoratorBaseTypes) => InterfaceHtmlTsInputDecorator;
    protected abstract selectMultiClass: new (params?: HtmlTsInputDecoratorBaseTypes) => InterfaceHtmlTsInputDecorator;

    hidden(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator {
        return new this.hiddenClass(params);
    }

    text(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator {
        if (this.textClass === undefined) return new HtmlTsInputDefaultDecorator();
        return new this.textClass(params);
    }

    textarea(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator {
        if (this.textareaClass === undefined) return new HtmlTsInputDefaultDecorator();
        return new this.textareaClass(params);
    }

    password(params?: HtmlTsInputDecoratorTextTypes): InterfaceHtmlTsInputDecorator {
        if (this.passwordClass === undefined) return new HtmlTsInputDefaultDecorator();
        return new this.passwordClass(params);
    }

    checkbox(params?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator {
        if (this.checkboxClass === undefined) return new HtmlTsInputDefaultDecorator();
        return new this.checkboxClass(params);
    }

    radio(params?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator {
        if (this.radioClass === undefined) return new HtmlTsInputDefaultDecorator();
        return new this.radioClass(params);
    }

    selectOne(params?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator {
        if (this.selectOneClass === undefined) return new HtmlTsInputDefaultDecorator();
        return new this.selectOneClass(params);
    }

    selectMulti(params?: HtmlTsInputDecoratorChoiceTypes): InterfaceHtmlTsInputDecorator {
        if (this.selectMultiClass === undefined) return new HtmlTsInputDefaultDecorator();
        return new this.selectMultiClass(params);
    }

}

export default AbstractHtmlTsInputDecoratorSet;