import HtmlTsInputHidden, {HtmlTsInputHiddenArgs} from "./Elements/SingleValue/HtmlTsInputHidden";
import HtmlTsInputText, {HtmlTsInputTextArgs} from "./Elements/SingleValue/HtmlTsInputText";
import HtmlTsInputTextArea, {HtmlTsInputTextAreaArgs} from "./Elements/SingleValue/HtmlTsInputTextArea";
import HtmlTsInputSelectOne, {HtmlTsInputSelectOneArgs} from "./Elements/SingleValue/HtmlTsInputSelectOne";
import HtmlTsInputRadio, {HtmlTsInputRadioArgs} from "./Elements/SingleValue/HtmlTsInputRadio";
import HtmlTsInputController from "./Elements/InputController/HtmlTsInputController";
import HtmlTsInputSelectMulti, {HtmlTsInputSelectMultiArgs} from "./Elements/MultiValue/HtmlTsInputSelectMulti";
import HtmlTsInputCheckbox, {HtmlTsInputCheckboxArgs} from "./Elements/MultiValue/HtmlTsInputCheckbox";


class HtmlTsInputFactory {

    controller(): HtmlTsInputController {
        return new HtmlTsInputController();
    }

    //
    // Single value
    //
    hidden(args: HtmlTsInputHiddenArgs): HtmlTsInputHidden {
        return new HtmlTsInputHidden(args);
    }

    text(args: HtmlTsInputTextArgs): HtmlTsInputText {
        return new HtmlTsInputText(args);
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