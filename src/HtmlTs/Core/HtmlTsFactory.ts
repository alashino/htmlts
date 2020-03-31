import HtmlTs from "./HtmlTs";
import {TagNameTypes, HtmlTsOptionType, HtmlTsOptions, HtmlTsContentType} from "./HtmlTsTypes";


class HtmlTsFactory {

    createById(id: string, options?: HtmlTsOptionType): HtmlTs {
        const htmlTs = new HtmlTs(document.getElementById(id));
        if (!options === undefined) {
            this.modify(htmlTs, options);
        }
        return htmlTs;
    }

    create(tagName: TagNameTypes, options?: HtmlTsOptionType): HtmlTs {
        const htmlTs = new HtmlTs(document.createElement(tagName));
        if (options !== undefined) {
            this.modify(htmlTs, options);
        }
        return htmlTs;
    }

    modify(htmlTs: HtmlTs, options: HtmlTsOptionType): void {
        if (
            typeof options === "string" ||
            typeof options === "number" ||
            options instanceof HtmlTs ||
            options instanceof Array
        ) {
            this.modify(htmlTs, {
                content: options,
            });
        } else {
            // HtmlTsOptions の時
            if (options.class !== undefined) htmlTs.addClass(options.class);
            if (options.attr !== undefined) this.setAttr(htmlTs, options.attr);
            if (options.css !== undefined) this.setCss(htmlTs, options.css);
            if (options.content !== undefined) this.setContents(htmlTs, options.content);
        }
    }

    private setAttr(htmlTs: HtmlTs, attr: { [key: string]: string }): void {
        for (const key in attr) {
            const value = attr[key];
            htmlTs.setAttribute(key, value);
        }
    }

    private setCss(htmlTs: HtmlTs, css: { [key: string]: string }): void {
        for (const key in css) {
            const value = css[key];
            htmlTs.setAttribute(key, value);
        }
    }

    private setContents(htmlTs: HtmlTs, content: HtmlTsContentType): void {
        if (typeof content === "string" || typeof content === "number") {
            htmlTs.setText(content);
        } else if (content instanceof HtmlTs) {
            htmlTs.append(content);
        } else if (content instanceof Array) {
            for (const c of content) {
                if (typeof c === "string" || typeof c === "number") {
                    htmlTs.append(
                        this.create("span", c)
                    );
                } else if (c instanceof HtmlTs) {
                    htmlTs.append(c);
                }
            }
        }
    }

}

export default HtmlTsFactory;