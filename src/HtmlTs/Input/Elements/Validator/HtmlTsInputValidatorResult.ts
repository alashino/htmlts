class HtmlTsInputValidatorResult {

    result: boolean = true;
    messages: string[] = [];

    append(result: boolean, message: string): void {
        if (result) return;
        this.result = false;
        this.messages.push(message);
    }

}

export default HtmlTsInputValidatorResult;