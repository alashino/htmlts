import HtmlTs from "./HtmlTs";
import {TagNameTypes, HtmlTsOptionType, HtmlTsOptions, HtmlTsContentType} from "./HtmlTsTypes";
import HtmlTsUtil from "./HtmlTsUtil";
import HtmlTsTableFactory from "../Table/HtmlTsTableFactory";
import HtmlTsButtonFactory from "../Button/HtmlTsButtonFactory";
import HtmlTsInputFactory from "../Input/HtmlTsInputFactory";
import HtmlTsDictionary from "./HtmlTsDictionary";


class HtmlTsFactory {

    util = HtmlTsUtil;
    table = new HtmlTsTableFactory();
    button = new HtmlTsButtonFactory();
    input = new HtmlTsInputFactory();
    dictionary = HtmlTsDictionary;

    createById(id: string, options?: HtmlTsOptionType): HtmlTs {
        const htmlTs = new HtmlTs(document.getElementById(id));
        if (!options === undefined) {
            this.modify(htmlTs, options);
        }
        return htmlTs;
    }

    create(tagName: Element | TagNameTypes, options?: HtmlTsOptionType): HtmlTs {
        let htmlTs: HtmlTs;
        if (tagName instanceof Element) {
            htmlTs = new HtmlTs(tagName);
        } else {
            htmlTs = new HtmlTs(document.createElement(tagName));
        }
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
            if (options.attr !== undefined) htmlTs.setAttr(options.attr);
            if (options.css !== undefined) htmlTs.css(options.css);
            if (options.content !== undefined) this.setContents(htmlTs, options.content);
            if (options.click !== undefined) htmlTs.click(options.click);
        }
    }

    private setContents(htmlTs: HtmlTs, content: HtmlTsContentType): void {
        if (content === undefined) return;
        if (typeof content === "string" || typeof content === "number") {
            htmlTs.setText(content);
        } else if (content instanceof Array) {
            for (const c of content) {
                if (c === undefined) continue;
                if (typeof c === "string" || typeof c === "number") {
                    htmlTs.append(
                        this.create("span", c)
                    );
                } else {
                    htmlTs.append(c);
                }
            }
        } else {
            htmlTs.append(content);
        }
    }

}

export default HtmlTsFactory;