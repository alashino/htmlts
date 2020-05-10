import HtmlTsInputHidden, {HtmlTsInputHiddenArgs} from "./Elements/SingleValue/HtmlTsInputHidden";
import HtmlTsInputText from "./Elements/SingleValue/Text/HtmlTsInputText";
import HtmlTsInputTextArea, {HtmlTsInputTextAreaArgs} from "./Elements/SingleValue/Text/HtmlTsInputTextArea";
import HtmlTsInputSelectOne, {HtmlTsInputSelectOneArgs} from "./Elements/SingleValue/HtmlTsInputSelectOne";
import HtmlTsInputRadio, {HtmlTsInputRadioArgs} from "./Elements/SingleValue/Choice/HtmlTsInputRadio";
import HtmlTsInputController from "./Elements/InputController/HtmlTsInputController";
import HtmlTsInputSelectMulti, {HtmlTsInputSelectMultiArgs} from "./Elements/MultiValue/HtmlTsInputSelectMulti";
import HtmlTsInputCheckbox, {HtmlTsInputCheckboxArgs} from "./Elements/MultiValue/Choice/HtmlTsInputCheckbox";
import {AbstractHtmlTsInputTextArgs} from "./Elements/SingleValue/Text/AbstractHtmlTsInputText";
import HtmlTsInputPassword from "./Elements/SingleValue/Text/HtmlTsInputPassword";
import HtmlTsInputDefaultDecoratorSet from "./Decorator/Default/HtmlTsInputDefaultDecoratorSet";
import InterfaceHtmlTsInputDecoratorSet from "./Decorator/Core/InterfaceHtmlTsInputDecoratorSet";


class HtmlTsInputFactory {

    private decoratorSet: InterfaceHtmlTsInputDecoratorSet;

    setDecoratorSet(decoratorSet: InterfaceHtmlTsInputDecoratorSet): void {
        this.decoratorSet = decoratorSet;
    }

    getDecoratorSet(): InterfaceHtmlTsInputDecoratorSet {
        return this.decoratorSet;
    }

    controller(): HtmlTsInputController {
        return new HtmlTsInputController();
    }

    //
    // Single value
    //
    hidden(args: HtmlTsInputHiddenArgs): HtmlTsInputHidden {
        return new HtmlTsInputHidden(args);
    }

    text(args: AbstractHtmlTsInputTextArgs): HtmlTsInputText {
        return new HtmlTsInputText(args);
    }

    password(args: AbstractHtmlTsInputTextArgs): HtmlTsInputPassword {
        return new HtmlTsInputPassword(args);
    }

    textarea(args: HtmlTsInputTextAreaArgs): HtmlTsInputTextArea {
        return new HtmlTsInputTextArea(args);
    }

    selectOne(args: HtmlTsInputSelectOneArgs): HtmlTsInputSelectOne {
        return new HtmlTsInputSelectOne(args);
    }

    radio(args: HtmlTsInputRadioArgs): HtmlTsInputRadio {
        return new HtmlTsInputRadio(args);
    }

    //
    // Multi Value
    //

    checkbox(args: HtmlTsInputCheckboxArgs): HtmlTsInputCheckbox {
        return new HtmlTsInputCheckbox(args);
    }

    selectMulti(args: HtmlTsInputSelectMultiArgs): HtmlTsInputSelectMulti {
        return new HtmlTsInputSelectMulti(args);
    }

}

export default HtmlTsInputFactory;