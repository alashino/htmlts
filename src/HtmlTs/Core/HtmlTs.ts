import {TagNameTypes} from "./HtmlTsTypes";

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
        const currentClassStr: string = this.htmlElement.getAttribute("class");
        if (currentClassStr === undefined) {
            this.setAttribute("class", className);
        } else {
            const currentClasses: string[] = currentClassStr.split(" ");
            const results: string[] = [className];
            for (const currentClassName of currentClasses) {
                if (currentClassName === "") continue;
                results.push(currentClassName);
            }
            this.setAttribute("class", results.join(" "));
        }
        return this;
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