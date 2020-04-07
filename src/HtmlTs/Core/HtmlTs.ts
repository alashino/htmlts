import {TagNameTypes} from "./HtmlTsTypes";
import HtmlTsUtil from "./HtmlTsUtil";

class HtmlTs {

    private htmlElement: Element;

    parent: HtmlTs;
    children: HtmlTs[] = [];

    constructor(element: Element) {
        this.htmlElement = element;
    }

    //
    // 要素の追加、削除
    //
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

    prepend(htmlTs: HtmlTs | HtmlTs[]): HtmlTs {
        if (htmlTs instanceof Array) {
            htmlTs.reverse().forEach((element) => {
                this.prepend(element);
            });
        } else {
            this.children.unshift(htmlTs);
            this.htmlElement.prepend(htmlTs.htmlElement);
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

    //
    // text
    //
    text(text: string | number): HtmlTs {
        const textNode = document.createTextNode(text.toString());
        this.htmlElement.appendChild(textNode);
        return this;
    }

    //
    // class系
    //

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

    hasClass(className: string): boolean {
        const currentClassNames: string[] = this.getCurrentClassNames();
        const addClassNames: string[] = this.splitClassNames(className);
        for (const addClassName of addClassNames) {
            if (HtmlTsUtil.array.in(addClassName, currentClassNames)) {
                return true;
            }
        }
        return false;
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

    //
    // CSS系
    //

    css(args1: { [key: string]: string | number } | string, args2?: string | number): HtmlTs {
        if (typeof args1 === "string") {
            this.setCss(args1, args2);
        } else {
            for (const key in args1) {
                if (!args1.hasOwnProperty(key)) continue;
                this.setCss(key, args1[key]);
            }
        }
        return this;
    }

    private setCss(key: string, value?: string | number): void {
        const css: { [key: string]: string } = this.getCurrentCss();
        css[key] = (value === undefined) ? "" : `${value}`;
        let styleString = "";
        for (const key in css) {
            if (!css.hasOwnProperty(key)) continue;
            const cssValue = css[key];
            if (cssValue === "") continue;
            styleString += `${key}:${cssValue};`;
        }
        this.setAttribute("style", styleString);
    }

    private getCurrentCss(): { [key: string]: string } {
        const results: { [key: string]: string } = {};
        const currentStyleString = this.htmlElement.getAttribute("style");
        if (currentStyleString === null || currentStyleString === undefined) return results;
        currentStyleString.split(";").forEach((str) => {
            const split = str.split(":");
            if (split.length !== 2) return;
            const key = HtmlTsUtil.string.strip(split[0]);
            const value = HtmlTsUtil.string.strip(split[1]);
            results[key] = value;
        });
        return results;
    }

    //
    // Attribute系
    //

    attr(args1: {[key: string]: string | number} | string, args2?: string | number): HtmlTs {
        if (typeof args1 === "string") {
            this.setAttribute(args1, args2);
        } else {
            for (const key in args1) {
                if (!args1.hasOwnProperty(key)) continue;
                this.setAttribute(key, args1[key]);
            }
        }
        return this;
    }

    private setAttribute(key: string, value?: string | number): void {
        if (value === undefined || value === "") {
            this.htmlElement.removeAttribute(key);
        } else {
            this.htmlElement.setAttribute(key, `${value}`);
        }
    }

    getAttr(key: string): string {
        return this.htmlElement.getAttribute(key);
    }

    removeAttr(key: string): void {
        this.htmlElement.removeAttribute(key);
    }

    //
    // イベント系
    //

    click(func?: (html?: Element) => void): HtmlTs {
        if (typeof func !== "function") {
            // clickイベントを起こす
            const event = document.createEvent("MouseEvent");
            event.initEvent("click", false, true);
            this.htmlElement.dispatchEvent(event);
        } else {
            // eventListenerに追加
            this.htmlElement.addEventListener('click', event => {
                event.stopPropagation(); // bubblingの停止。
                func(this.htmlElement);
            });
        }
        return this;
    }

    //
    // その他
    //
    getTagName(): string {
        return this.htmlElement.tagName;
    }
}

export default HtmlTs;