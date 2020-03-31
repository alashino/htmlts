import {TagNameTypes} from "./HtmlTsTypes";
import HtmlTsUtil from "./HtmlTsUtil";

class HtmlTs {

    private htmlElement: Element;

    parent: HtmlTs;
    children: HtmlTs[] = [];

    constructor(element: Element) {
        this.htmlElement = element;
    }

    empty(): void {
        if (!this.htmlElement.hasChildNodes()) return;
        for (const childNode of this.htmlElement.childNodes) {
            this.htmlElement.removeChild(childNode);
        }
    }

    append(htmlts: HtmlTs | HtmlTs[]): HtmlTs {
        if (htmlts instanceof Array) {
            htmlts.forEach((h) => {
                this.append(h);
            });
        } else {
            this.children.push(htmlts);
            this.htmlElement.appendChild(htmlts.htmlElement);
        }
        return this;
    }

    remove(): void {
        this.parent._removeFromChildren(this);
        this.children.forEach((child) => {
            child.remove();
        });
    }

    _removeFromChildren(htmlTs: HtmlTs): void {
        for (const [i, child] of this.children.entries()) {
            if (child === htmlTs) {
                this.children.slice(i, 1);
                return;
            }
        }
    }

    setText(text: string | number): void {
        const textNode = document.createTextNode(text.toString());
        console.log(textNode);
        this.htmlElement.appendChild(textNode);
    }

    addClass(className: string): HtmlTs {
        const currentClassNames: string[] = this.getCurrentClassNames();
        const addClassNames: string[] = this.splitClassNames(className);
        for (const addClassName of addClassNames) {
            if (HtmlTsUtil.array.in(addClassName, currentClassNames)) continue;
            currentClassNames.push(addClassName);
        }
        this.setAttribute("class", currentClassNames.join(" "));
        return this;
    }

    removeClass(className: string): HtmlTs {
        const results: string[] = [];
        const currentClassNames: string[] = this.getCurrentClassNames();
        const removeClassNames: string[] = this.splitClassNames(className);
        for (const currentClassName of currentClassNames) {
            if (HtmlTsUtil.array.in(currentClassName, removeClassNames)) continue;
            results.push(currentClassName);
        }
        this.setAttribute("class", results.join(" "));
        return this;
    }

    private getCurrentClassNames(): string[] {
        const currentClassStr: string = this.htmlElement.getAttribute("class");
        if (currentClassStr === undefined || currentClassStr === null) {
            return [];
        } else {
            return this.splitClassNames(currentClassStr);
        }
    }

    private splitClassNames(classNamesString: string): string[] {
        const results: string[] = [];
        const currentClasses: string[] = classNamesString.split(" ");
        for (const currentClassName of currentClasses) {
            if (currentClassName === "") continue; // 連続する空スペースを排除
            if (HtmlTsUtil.array.in(currentClassName, results)) continue; // ダブっているものを排除
            results.push(currentClassName);
        }
        return results;
    }

    setCss(key: string, value: string): void {

    }

    setAttribute(key: string, value?: string): void {
        if (value === undefined || value === "") {
            this.htmlElement.removeAttribute(key);
        } else {
            this.htmlElement.setAttribute(key, value);
        }
    }

    getAttribute(key: string): string {
        return this.htmlElement.getAttribute(key);
    }

    removeAttribute(key: string): void {
        this.htmlElement.removeAttribute(key);
    }

    getTagName(): string {
        return this.htmlElement.tagName;
    }
}

export default HtmlTs;