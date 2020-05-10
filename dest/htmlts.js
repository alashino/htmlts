/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/HtmlTs/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/HtmlTs/Button/HtmlTsButtonFactory.ts":
/*!**************************************************!*\
  !*** ./src/HtmlTs/Button/HtmlTsButtonFactory.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __webpack_require__(/*! ../build */ "./src/HtmlTs/build.ts");
class HtmlTsButtonFactory {
    setDecorator(decorator) {
        this.defaultDecorator = decorator;
    }
    create(params, decorator = undefined) {
        const button = build_1.default.create("button", params);
        // 必ずtype属性はbuttonにする
        button.setAttr("type", "button");
        if (decorator !== undefined) {
            decorator.decorate(button, params.type, params.size);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.decorate(button, params.type, params.size);
        }
        return button;
    }
}
exports.default = HtmlTsButtonFactory;


/***/ }),

/***/ "./src/HtmlTs/Core/HtmlTs.ts":
/*!***********************************!*\
  !*** ./src/HtmlTs/Core/HtmlTs.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTsUtil_1 = __webpack_require__(/*! ./HtmlTsUtil */ "./src/HtmlTs/Core/HtmlTsUtil.ts");
class HtmlTs {
    constructor(element) {
        this.children = [];
        this.htmlElement = element;
    }
    //
    // 要素の追加、削除
    //
    empty() {
        // for系でまわすと最後までまわらないのでwhile
        while (this.htmlElement.hasChildNodes()) {
            this.htmlElement.childNodes[0].remove();
        }
        return this;
    }
    append(htmlTs) {
        if (htmlTs === undefined)
            return this;
        if (htmlTs instanceof Array) {
            htmlTs.forEach((h) => {
                this.append(h);
            });
        }
        else {
            this.children.push(htmlTs);
            this.htmlElement.appendChild(htmlTs.htmlElement);
        }
        return this;
    }
    prepend(htmlTs) {
        if (htmlTs === undefined)
            return this;
        if (htmlTs instanceof Array) {
            htmlTs.reverse().forEach((element) => {
                this.prepend(element);
            });
        }
        else {
            this.children.unshift(htmlTs);
            this.htmlElement.prepend(htmlTs.htmlElement);
        }
        return this;
    }
    remove() {
        this.parent._removeFromChildren(this);
        this.children.forEach((child) => {
            child.remove();
        });
    }
    _removeFromChildren(htmlTs) {
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
    /**
     * @deprecated setText
     */
    text(text) {
        return this.setText(text);
    }
    setText(text) {
        this.htmlElement.textContent = `${text}`;
        return this;
    }
    getText() {
        const text = this.htmlElement.textContent;
        if (text === null) {
            return "";
        }
        else {
            return text;
        }
    }
    //
    // class系
    //
    addClass(className) {
        if (className instanceof Array) {
            className.forEach((cn) => {
                if (cn !== undefined) {
                    this.addClass(cn);
                }
            });
        }
        else {
            const currentClassNames = this.getCurrentClassNames();
            const addClassNames = this.splitClassNames(className);
            for (const addClassName of addClassNames) {
                if (HtmlTsUtil_1.default.array.in(addClassName, currentClassNames))
                    continue;
                currentClassNames.push(addClassName);
            }
            this.setAttribute("class", currentClassNames.join(" "));
        }
        return this;
    }
    hasClass(className) {
        const currentClassNames = this.getCurrentClassNames();
        const addClassNames = this.splitClassNames(className);
        for (const addClassName of addClassNames) {
            if (HtmlTsUtil_1.default.array.in(addClassName, currentClassNames)) {
                return true;
            }
        }
        return false;
    }
    removeClass(className) {
        if (className instanceof Array) {
            className.forEach((cn) => {
                this.removeClass(cn);
            });
        }
        else {
            const results = [];
            const currentClassNames = this.getCurrentClassNames();
            const removeClassNames = this.splitClassNames(className);
            for (const currentClassName of currentClassNames) {
                if (HtmlTsUtil_1.default.array.in(currentClassName, removeClassNames))
                    continue;
                results.push(currentClassName);
            }
            this.setAttribute("class", results.join(" "));
        }
        return this;
    }
    getCurrentClassNames() {
        const currentClassStr = this.htmlElement.getAttribute("class");
        if (currentClassStr === undefined || currentClassStr === null) {
            return [];
        }
        else {
            return this.splitClassNames(currentClassStr);
        }
    }
    splitClassNames(classNamesString) {
        const results = [];
        const currentClasses = classNamesString.split(" ");
        for (const currentClassName of currentClasses) {
            if (currentClassName === "")
                continue; // 連続する空スペースを排除
            if (HtmlTsUtil_1.default.array.in(currentClassName, results))
                continue; // ダブっているものを排除
            results.push(currentClassName);
        }
        return results;
    }
    //
    // CSS系
    //
    css(args1, args2) {
        if (typeof args1 === "string") {
            this.setCss(args1, args2);
        }
        else {
            for (const key in args1) {
                if (!args1.hasOwnProperty(key))
                    continue;
                this.setCss(key, args1[key]);
            }
        }
        return this;
    }
    setCss(key, value) {
        const css = this.getCurrentCss();
        css[key] = (value === undefined) ? "" : `${value}`;
        let styleString = "";
        for (const key in css) {
            if (!css.hasOwnProperty(key))
                continue;
            const cssValue = css[key];
            if (cssValue === "")
                continue;
            styleString += `${key}:${cssValue};`;
        }
        this.setAttribute("style", styleString);
    }
    getCurrentCss() {
        const results = {};
        const currentStyleString = this.htmlElement.getAttribute("style");
        if (currentStyleString === null || currentStyleString === undefined)
            return results;
        currentStyleString.split(";").forEach((str) => {
            const split = str.split(":");
            if (split.length !== 2)
                return;
            const key = HtmlTsUtil_1.default.string.strip(split[0]);
            const value = HtmlTsUtil_1.default.string.strip(split[1]);
            results[key] = value;
        });
        return results;
    }
    //
    // Attribute系
    //
    setAttr(args1, args2) {
        if (typeof args1 === "string") {
            this.setAttribute(args1, args2);
        }
        else {
            for (const key in args1) {
                if (!args1.hasOwnProperty(key))
                    continue;
                this.setAttribute(key, args1[key]);
            }
        }
        return this;
    }
    setAttribute(key, value) {
        if (value === undefined || value === "") {
            this.htmlElement.removeAttribute(key);
        }
        else {
            this.htmlElement.setAttribute(key, `${value}`);
        }
    }
    getAttr(key) {
        return this.htmlElement.getAttribute(key);
    }
    removeAttr(key) {
        if (key instanceof Array) {
            key.forEach((k) => {
                this.htmlElement.removeAttribute(k);
            });
        }
        else {
            this.htmlElement.removeAttribute(key);
        }
        return this;
    }
    //
    // イベント系
    //
    on(eventName, func) {
        this.htmlElement.addEventListener(eventName, event => {
            event.stopPropagation(); // bubblingの停止。
            func(this.htmlElement);
        });
        return this;
    }
    click(func) {
        if (typeof func !== "function") {
            // clickイベントを起こす
            const event = document.createEvent("MouseEvent");
            event.initEvent("click", false, true);
            this.htmlElement.dispatchEvent(event);
        }
        else {
            // eventListenerに追加
            this.on("click", func);
        }
        return this;
    }
    change(func) {
        if (typeof func !== "function") {
            // clickイベントを起こす
            const event = document.createEvent("MouseEvent");
            event.initEvent("change", false, true);
            this.htmlElement.dispatchEvent(event);
        }
        else {
            // eventListenerに追加
            this.on("change", func);
        }
        return this;
    }
    //
    // その他
    //
    getTagName() {
        return this.htmlElement.tagName;
    }
}
exports.default = HtmlTs;


/***/ }),

/***/ "./src/HtmlTs/Core/HtmlTsDictionary.ts":
/*!*********************************************!*\
  !*** ./src/HtmlTs/Core/HtmlTsDictionary.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HtmlTsDictionaryClass {
    constructor() {
        this.currentLang = "ja";
        this.wordOfNoDict = "[N/A]"; // 辞書が見つからなかった時にかえる文字
        this.dictionaries = {};
    }
    /**
     * ライブラリ内で使う用
     * @param dictionary
     */
    subscribe(dictionary) {
        this.dictionaries[dictionary.getCategory()] = dictionary;
    }
    /**
     * 辞書の更新用
     * @param category
     * @param lang
     * @param dictionary
     */
    update(category, lang, dictionary) {
        if (this.dictionaries[category] === undefined)
            return;
        this.dictionaries[category].update(lang, dictionary);
    }
    /**
     * 定義されてない言語が指定されているとき
     * @param category
     */
    noLang(category) {
        console.log(`HtmlTs: No Lang=${this.currentLang} IN Category=${category}!`);
        return this.wordOfNoDict;
    }
    /**
     * 定義されてないwordを指定されたとき
     * @param category
     * @param wordKey
     */
    noWord(category, wordKey) {
        console.log(`HtmlTs: No wordKey=${wordKey} IN Lang=${this.currentLang}, Category=${category}!`);
        return this.wordOfNoDict;
    }
}
class AbstractHtmlTsDictionary {
    getCategory() {
        return this.category;
    }
    get(wordKey) {
        const dictionary = this.dictionary[HtmlTsDictionary.currentLang];
        if (dictionary === undefined)
            return HtmlTsDictionary.noLang(this.category);
        const word = dictionary[wordKey];
        if (word === undefined)
            return HtmlTsDictionary.noWord(this.category, wordKey);
        return word;
    }
    update(lang, dictionary) {
        for (const wordKey in dictionary) {
            if (this.dictionary[lang] === undefined) {
                this.dictionary[lang] = {};
            }
            this.dictionary[lang][wordKey] = dictionary[wordKey];
        }
    }
}
exports.AbstractHtmlTsDictionary = AbstractHtmlTsDictionary;
const HtmlTsDictionary = new HtmlTsDictionaryClass();
exports.default = HtmlTsDictionary;


/***/ }),

/***/ "./src/HtmlTs/Core/HtmlTsFactory.ts":
/*!******************************************!*\
  !*** ./src/HtmlTs/Core/HtmlTsFactory.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTs_1 = __webpack_require__(/*! ./HtmlTs */ "./src/HtmlTs/Core/HtmlTs.ts");
const HtmlTsUtil_1 = __webpack_require__(/*! ./HtmlTsUtil */ "./src/HtmlTs/Core/HtmlTsUtil.ts");
const HtmlTsTableFactory_1 = __webpack_require__(/*! ../Table/HtmlTsTableFactory */ "./src/HtmlTs/Table/HtmlTsTableFactory.ts");
const HtmlTsButtonFactory_1 = __webpack_require__(/*! ../Button/HtmlTsButtonFactory */ "./src/HtmlTs/Button/HtmlTsButtonFactory.ts");
const HtmlTsInputFactory_1 = __webpack_require__(/*! ../Input/HtmlTsInputFactory */ "./src/HtmlTs/Input/HtmlTsInputFactory.ts");
const HtmlTsDictionary_1 = __webpack_require__(/*! ./HtmlTsDictionary */ "./src/HtmlTs/Core/HtmlTsDictionary.ts");
class HtmlTsFactory {
    constructor() {
        this.util = HtmlTsUtil_1.default;
        this.table = new HtmlTsTableFactory_1.default();
        this.button = new HtmlTsButtonFactory_1.default();
        this.input = new HtmlTsInputFactory_1.default();
        this.dictionary = HtmlTsDictionary_1.default;
    }
    createById(id, options) {
        const htmlTs = new HtmlTs_1.default(document.getElementById(id));
        if (!options === undefined) {
            this.modify(htmlTs, options);
        }
        return htmlTs;
    }
    create(tagName, options) {
        let htmlTs;
        if (tagName instanceof Element) {
            htmlTs = new HtmlTs_1.default(tagName);
        }
        else {
            htmlTs = new HtmlTs_1.default(document.createElement(tagName));
        }
        if (options !== undefined) {
            this.modify(htmlTs, options);
        }
        return htmlTs;
    }
    modify(htmlTs, options) {
        if (typeof options === "string" ||
            typeof options === "number" ||
            options instanceof HtmlTs_1.default ||
            options instanceof Array) {
            this.modify(htmlTs, {
                content: options,
            });
        }
        else {
            // HtmlTsOptions の時
            if (options.class !== undefined)
                htmlTs.addClass(options.class);
            if (options.attr !== undefined)
                htmlTs.setAttr(options.attr);
            if (options.css !== undefined)
                htmlTs.css(options.css);
            if (options.content !== undefined)
                this.setContents(htmlTs, options.content);
            if (options.click !== undefined)
                htmlTs.click(options.click);
        }
    }
    setContents(htmlTs, content) {
        if (content === undefined)
            return;
        if (typeof content === "string" || typeof content === "number") {
            htmlTs.setText(content);
        }
        else if (content instanceof Array) {
            for (const c of content) {
                if (c === undefined)
                    continue;
                if (typeof c === "string" || typeof c === "number") {
                    htmlTs.append(this.create("span", c));
                }
                else {
                    htmlTs.append(c);
                }
            }
        }
        else {
            htmlTs.append(content);
        }
    }
}
exports.default = HtmlTsFactory;


/***/ }),

/***/ "./src/HtmlTs/Core/HtmlTsUtil.ts":
/*!***************************************!*\
  !*** ./src/HtmlTs/Core/HtmlTsUtil.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UtilString {
    strip(str, separator = " ") {
        return this.lstrip(this.rstrip(str, separator), separator);
    }
    lstrip(str, separator = " ") {
        return str.replace(RegExp(`^[${separator}]+`), "");
    }
    rstrip(str, separator = " ") {
        return str.replace(RegExp(`[${separator}]+$`), "");
    }
    /**
     * 文字列のバイト数を返します。
     * @param {string} str
     * @return {number}
     */
    countByte(str) {
        if (str === undefined || str === "") {
            return 0;
        }
        // UTF-8なので、encodeURIしてから "%" の数を数える
        const value = encodeURI(str);
        const cnt = value.replace(/%[0-9A-F]{2}/g, '*').length;
        /*
            var cnt = 0;
            for (var i = 0; i < value.length; i++) {
                var charcode = value.charCodeAt(i);
                // Shift_JIS: 0x0 ～ 0x80, 0xa0 , 0xa1 ～ 0xdf , 0xfd ～ 0xff
                // Unicode : 0x0 ～ 0x80, 0xf8f0, 0xff61 ～ 0xff9f, 0xf8f1 ～ 0xf8f3
                if ((charcode >= 0x0 && charcode < 0x81) || (charcode == 0xf8f0) || (charcode >= 0xff61 && charcode < 0xffa0) || (charcode >= 0xf8f1 && charcode < 0xf8f4)) {
                    cnt++;
                } else {
                    cnt += 2;
                }
            }
        */
        return cnt;
    }
}
class UtilArray {
    //
    // Array系
    //
    in(value, array) {
        for (const element of array) {
            if (value === element) {
                return true;
            }
        }
        return false;
    }
    getIndex(value, array) {
        for (const [index, element] of array.entries()) {
            if (value === element) {
                return index;
            }
        }
        return -1;
    }
}
const HtmlTsUtil = {
    array: new UtilArray(),
    string: new UtilString(),
};
exports.default = HtmlTsUtil;


/***/ }),

/***/ "./src/HtmlTs/Input/Decorator/Core/AbstractHtmlTsInputDecorator.ts":
/*!*************************************************************************!*\
  !*** ./src/HtmlTs/Input/Decorator/Core/AbstractHtmlTsInputDecorator.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __webpack_require__(/*! ../../../build */ "./src/HtmlTs/build.ts");
class AbstractHtmlTsInputDecorator {
    constructor(params) {
        this.params = params;
    }
    createLabel(htmlTsInput) {
        if (htmlTsInput.labelContent === undefined)
            return undefined;
        return build_1.default.create("label", {
            content: htmlTsInput.labelContent,
        });
    }
    createHelpText(htmlTsInput) {
        if (htmlTsInput.helpTextContent === undefined)
            return undefined;
        return build_1.default.create("small", {
            content: htmlTsInput.helpTextContent,
        });
    }
}
exports.default = AbstractHtmlTsInputDecorator;


/***/ }),

/***/ "./src/HtmlTs/Input/Decorator/Default/HtmlTsInputDefaultDecorator.ts":
/*!***************************************************************************!*\
  !*** ./src/HtmlTs/Input/Decorator/Default/HtmlTsInputDefaultDecorator.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputDecorator_1 = __webpack_require__(/*! ../Core/AbstractHtmlTsInputDecorator */ "./src/HtmlTs/Input/Decorator/Core/AbstractHtmlTsInputDecorator.ts");
const build_1 = __webpack_require__(/*! ../../../build */ "./src/HtmlTs/build.ts");
class HtmlTsInputDefaultDecorator extends AbstractHtmlTsInputDecorator_1.default {
    createHtml(htmlTsInput) {
        return build_1.default.create("div", {
            content: [
                this.createLabel(htmlTsInput),
                htmlTsInput.input,
                build_1.default.create("div", this.createHelpText(htmlTsInput)),
                htmlTsInput.validation,
            ],
        });
    }
    validateHtmlThen(htmlTsInput, validateResult) {
        htmlTsInput.validation.empty();
        if (!validateResult.result) {
            validateResult.messages.forEach((message) => {
                htmlTsInput.validation.append(build_1.default.create("p", message));
            });
        }
    }
}
exports.default = HtmlTsInputDefaultDecorator;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/Choice/AbstractChoiceWithLabel.ts":
/*!*********************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/Choice/AbstractChoiceWithLabel.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __webpack_require__(/*! ../../../build */ "./src/HtmlTs/build.ts");
class AbstractChoiceWithLabel {
    constructor(args) {
        this.name = args.name;
        this.value = args.value;
        this.label = args.label;
        this.title = args.title;
        this.state = args.state || "enable";
    }
    build() {
        this.htmlInput = build_1.default.create("input", {
            attr: {
                name: this.name,
                type: this.type,
                value: this.value,
                title: this.title,
            },
            content: this.label,
        });
        this.htmlLabel = build_1.default.create("label", {
            content: [
                this.htmlInput,
                this.label,
            ]
        });
        this.html = this.htmlLabel;
    }
    clear() {
        this.htmlInput.removeAttr("checked");
        // @ts-ignore
        this.htmlInput.htmlElement.checked = false;
    }
    set() {
        this.htmlInput.setAttr("checked", "true");
        // @ts-ignore
        this.htmlInput.htmlElement.checked = true;
    }
    isSelected() {
        // @ts-ignore
        return this.htmlInput.htmlElement.checked;
    }
    changeState(state) {
        switch (state) {
            case "enable":
                this.htmlInput.removeAttr(["readonly", "disabled"]);
                break;
            case "readonly":
                this.htmlInput.removeAttr(["disabled"]);
                this.htmlInput.setAttr(state, "true");
                break;
            case "disabled":
                this.htmlInput.removeAttr(["readonly"]);
                this.htmlInput.setAttr(state, "true");
                break;
        }
    }
}
exports.default = AbstractChoiceWithLabel;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/Choice/HtmlTsInputChoiceCheckbox.ts":
/*!***********************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/Choice/HtmlTsInputChoiceCheckbox.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractChoiceWithLabel_1 = __webpack_require__(/*! ./AbstractChoiceWithLabel */ "./src/HtmlTs/Input/Elements/Choice/AbstractChoiceWithLabel.ts");
class HtmlTsInputChoiceCheckbox extends AbstractChoiceWithLabel_1.default {
    constructor(args) {
        super(args);
        this.type = "checkbox";
        this.build();
    }
}
exports.default = HtmlTsInputChoiceCheckbox;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/Choice/HtmlTsInputChoiceRadio.ts":
/*!********************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/Choice/HtmlTsInputChoiceRadio.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractChoiceWithLabel_1 = __webpack_require__(/*! ./AbstractChoiceWithLabel */ "./src/HtmlTs/Input/Elements/Choice/AbstractChoiceWithLabel.ts");
class HtmlTsInputChoiceRadio extends AbstractChoiceWithLabel_1.default {
    constructor(args) {
        super(args);
        this.type = "radio";
        this.build();
    }
}
exports.default = HtmlTsInputChoiceRadio;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/Choice/HtmlTsInputOption.ts":
/*!***************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/Choice/HtmlTsInputOption.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __webpack_require__(/*! ../../../build */ "./src/HtmlTs/build.ts");
class HtmlTsInputOption {
    constructor(value, label, title = "", state = "enable") {
        this.value = value;
        this.label = label;
        this.title = title;
        this.state = state;
        this.html = build_1.default.create("option", {
            attr: {
                value: this.value,
                title: this.title,
            },
            content: this.label,
        });
    }
    clear() {
        this.html.removeAttr("selected");
        // @ts-ignore
        this.html.htmlElement.selected = false;
    }
    set() {
        this.html.setAttr("selected", "true");
        // @ts-ignore
        this.html.htmlElement.selected = true;
    }
    isSelected() {
        // @ts-ignore
        return this.html.htmlElement.selected;
    }
    changeState(state) {
        switch (state) {
            case "enable":
                this.html.removeAttr(["readonly", "disabled"]);
                break;
            case "readonly":
                this.html.removeAttr(["disabled"]);
                this.html.setAttr(state, "true");
                break;
            case "disabled":
                this.html.removeAttr(["readonly"]);
                this.html.setAttr(state, "true");
                break;
        }
    }
}
exports.default = HtmlTsInputOption;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputBase.ts":
/*!*******************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputBase.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __webpack_require__(/*! ../../../build */ "./src/HtmlTs/build.ts");
const HtmlTsInputDefaultDecorator_1 = __webpack_require__(/*! ../../Decorator/Default/HtmlTsInputDefaultDecorator */ "./src/HtmlTs/Input/Decorator/Default/HtmlTsInputDefaultDecorator.ts");
class AbstractHtmlTsInputBase {
    constructor(args) {
        this.validation = build_1.default.create("div");
        this.name = args.name;
        this.state = args.state || "enable";
        this.validateParam = args.validate;
        this.labelContent = args.label;
        this.helpTextContent = args.helpText;
        this.displayParam = args.display;
        this.functions = args.functions;
    }
    build() {
        this.input = this.createInput();
        this.set(this.init_value);
        this.changeState(this.state);
        this.setOnChange();
        let decorator;
        if (build_1.default.input.getDecoratorSet() !== undefined) {
            decorator = this.getDecorator(build_1.default.input.getDecoratorSet());
        }
        else {
            decorator = new HtmlTsInputDefaultDecorator_1.default(this.displayParam);
        }
        this.html = decorator.createHtml(this);
    }
    reset() {
        this.set(this.init_value);
    }
    validate() {
        const validatorResult = this.validator.validate(this.value());
        let decorator;
        if (build_1.default.input.getDecoratorSet() !== undefined) {
            decorator = this.getDecorator(build_1.default.input.getDecoratorSet());
        }
        else {
            decorator = new HtmlTsInputDefaultDecorator_1.default(this.displayParam);
        }
        decorator.validateHtmlThen(this, validatorResult);
        if (this.functions !== undefined) {
            if (validatorResult.result &&
                this.functions.validateSuccess === undefined &&
                typeof this.functions.validateSuccess === "function") {
                this.functions.validateSuccess(this);
            }
            if (!validatorResult.result &&
                this.functions.validateError === undefined &&
                typeof this.functions.validateError === "function") {
                this.functions.validateError(this);
            }
        }
        return validatorResult.result;
    }
    //
    // 値が変わった時の動作
    //
    setOnChange() {
        this.input.on("change", (html) => {
            this.whenValueChanged();
        });
    }
    whenValueChanged() {
        if (this.functions !== undefined &&
            this.functions.valueChanged !== undefined &&
            typeof this.functions.valueChanged === "function") {
            this.functions.valueChanged(this);
        }
        if (this.validator !== undefined &&
            this.validateParam !== undefined &&
            this.validateParam.realTimeValidate) {
            this.validate();
        }
    }
    //
    // state
    //
    isEnable() {
        return this.state === "enable";
    }
    isReadOnly() {
        return this.state === "readonly";
    }
    isDisabled() {
        return (this.state === "disabled");
    }
    changeState(state) {
        this.state = state;
        switch (state) {
            case "enable":
                this.input.removeAttr(["readonly", "disabled"]);
                break;
            case "readonly":
                this.input.removeAttr(["disabled"]);
                this.input.setAttr("readonly", "true");
                break;
            case "disabled":
                this.input.removeAttr(["readonly"]);
                this.input.setAttr("disabled", "true");
                break;
        }
    }
    rotateState() {
        switch (this.state) {
            case "enable":
                this.changeState("readonly");
                break;
            case "readonly":
                this.changeState("disabled");
                break;
            case "disabled":
                this.changeState("enable");
                break;
            default:
                this.changeState("enable");
        }
    }
}
exports.default = AbstractHtmlTsInputBase;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputMultiValue.ts":
/*!*************************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputMultiValue.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputBase_1 = __webpack_require__(/*! ./AbstractHtmlTsInputBase */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputBase.ts");
const HtmlTsUtil_1 = __webpack_require__(/*! ../../../Core/HtmlTsUtil */ "./src/HtmlTs/Core/HtmlTsUtil.ts");
const build_1 = __webpack_require__(/*! ../../../build */ "./src/HtmlTs/build.ts");
const HtmlTsInputChoiceValidatorMulti_1 = __webpack_require__(/*! ../../Validator/HtmlTsInputChoiceValidatorMulti */ "./src/HtmlTs/Input/Validator/HtmlTsInputChoiceValidatorMulti.ts");
class AbstractHtmlTsInputMultiValue extends AbstractHtmlTsInputBase_1.default {
    constructor(args) {
        super(args);
        this.init_value = [];
        this.choice = [];
        this.choiceValues = [];
        this.args = args;
        this.name = args.name;
        this.init_value = args.value || [];
        this.choiceValues = args.choice || [];
        this.validator = new HtmlTsInputChoiceValidatorMulti_1.default(args.validate);
    }
    createInput() {
        this.choice = this.choiceValues.map((choice) => {
            return this.createChoice(choice);
        });
        const input = build_1.default.create(this.inputTagName, {
            content: this.choice.map((choice) => {
                return choice.html;
            }),
        });
        return input;
    }
    clear() {
        this.set([]);
    }
    set(value) {
        this.choice.forEach((choice) => {
            choice.clear();
            if (HtmlTsUtil_1.default.array.in(choice.value, value)) {
                choice.set();
            }
        });
    }
    value() {
        const results = [];
        this.choice.forEach((choice) => {
            if (choice.isSelected()) {
                results.push(choice.value);
            }
        });
        return results;
    }
}
exports.default = AbstractHtmlTsInputMultiValue;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValue.ts":
/*!**************************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValue.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __webpack_require__(/*! ../../../build */ "./src/HtmlTs/build.ts");
const AbstractHtmlTsInputBase_1 = __webpack_require__(/*! ./AbstractHtmlTsInputBase */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputBase.ts");
class AbstractHtmlTsInputSingleValue extends AbstractHtmlTsInputBase_1.default {
    constructor(args) {
        super(args);
        this.args = args;
        this.name = args.name;
        this.init_value = (args.value === undefined) ? "" : args.value + "";
    }
    createInput() {
        const input = build_1.default.create("input", {
            attr: {
                "type": this.type,
            },
        });
        if (this.name !== undefined) {
            input.setAttr("name", this.name);
        }
        return input;
    }
    clear() {
        this.set("");
    }
    set(value) {
        // @ts-ignore
        this.input.htmlElement.value = value;
    }
    value() {
        // @ts-ignore
        return this.input.htmlElement.value;
    }
}
exports.default = AbstractHtmlTsInputSingleValue;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValueChoice.ts":
/*!********************************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValueChoice.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputSingleValue_1 = __webpack_require__(/*! ./AbstractHtmlTsInputSingleValue */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValue.ts");
const build_1 = __webpack_require__(/*! ../../../build */ "./src/HtmlTs/build.ts");
const HtmlTsInputChoiceValidatorSingle_1 = __webpack_require__(/*! ../../Validator/HtmlTsInputChoiceValidatorSingle */ "./src/HtmlTs/Input/Validator/HtmlTsInputChoiceValidatorSingle.ts");
class AbstractHtmlTsInputSingleValueChoice extends AbstractHtmlTsInputSingleValue_1.default {
    constructor(args) {
        super(args);
        this.choice = [];
        this.choiceValues = [];
        this.choiceValues = args.choice || [];
        this.validator = new HtmlTsInputChoiceValidatorSingle_1.default(args.validate);
    }
    createInput() {
        this.choice = this.choiceValues.map((choice) => {
            return this.createChoice(choice);
        });
        return build_1.default.create(this.inputTagName, {
            content: this.choice.map((option) => {
                return option.html;
            })
        });
    }
    set(value) {
        this.choice.forEach((choice) => {
            choice.clear();
            if (choice.value === value) {
                choice.set();
            }
        });
    }
    value() {
        for (const choice of this.choice) {
            if (choice.isSelected()) {
                return choice.value;
            }
        }
        return "";
    }
}
exports.default = AbstractHtmlTsInputSingleValueChoice;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/InputController/HtmlTsInputController.ts":
/*!****************************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/InputController/HtmlTsInputController.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __webpack_require__(/*! ../../../build */ "./src/HtmlTs/build.ts");
const AbstractHtmlTsInputSingleValue_1 = __webpack_require__(/*! ../Core/AbstractHtmlTsInputSingleValue */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValue.ts");
const AbstractHtmlTsInputMultiValue_1 = __webpack_require__(/*! ../Core/AbstractHtmlTsInputMultiValue */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputMultiValue.ts");
class HtmlTsInputController {
    constructor() {
        this.inputs = [];
    }
    subscribe(input) {
        if (build_1.default.util.array.in(input, this.inputs))
            return;
        this.inputs.push(input);
    }
    getInputs(name) {
        const results = [];
        this.inputs.forEach((input) => {
            if (input.name == name) {
                results.push(input);
            }
        });
        return results;
    }
    validate() {
        let result = true;
        this.inputs.forEach((input) => {
            const each_result = input.validate();
            result = result && each_result;
        });
        return result;
    }
    getValues() {
        const results = {};
        this.inputs.forEach((input) => {
            if (input.name !== undefined && input.isDisabled() === false) {
                results[input.name] = input.value();
            }
        });
        return results;
    }
    reset() {
        this.inputs.forEach((input) => {
            input.reset();
        });
    }
    clear() {
        this.inputs.forEach((input) => {
            input.clear();
        });
    }
    setValue(name, value) {
        for (const input of this.inputs) {
            if (input.name !== name)
                continue;
            if (input instanceof AbstractHtmlTsInputSingleValue_1.default) {
                if (typeof value === "string") {
                    input.set(value);
                }
                else {
                    if (value.length > 0) {
                        input.set(value[0]);
                    }
                    else {
                        input.set("");
                    }
                }
            }
            else if (input instanceof AbstractHtmlTsInputMultiValue_1.default) {
                if (typeof value === "string") {
                    input.set([value]);
                }
                else {
                    input.set(value);
                }
            }
        }
    }
}
exports.default = HtmlTsInputController;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/MultiValue/Choice/HtmlTsInputCheckbox.ts":
/*!****************************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/MultiValue/Choice/HtmlTsInputCheckbox.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputMultiValue_1 = __webpack_require__(/*! ../../Core/AbstractHtmlTsInputMultiValue */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputMultiValue.ts");
const HtmlTsInputChoiceCheckbox_1 = __webpack_require__(/*! ../../Choice/HtmlTsInputChoiceCheckbox */ "./src/HtmlTs/Input/Elements/Choice/HtmlTsInputChoiceCheckbox.ts");
class HtmlTsInputCheckbox extends AbstractHtmlTsInputMultiValue_1.default {
    constructor(args) {
        super(args);
        this.type = "checkbox";
        this.inputTagName = "div";
        this.build();
    }
    createChoice(choice) {
        return new HtmlTsInputChoiceCheckbox_1.default({
            name: this.name,
            value: choice.value,
            label: choice.label,
            title: choice.title,
            state: this.state,
        });
    }
    setOnChange() {
        this.choice.forEach((choice) => {
            choice.htmlInput.on("change", (html) => {
                this.whenValueChanged();
            });
        });
    }
    changeState(state) {
        this.state = state;
        this.choice.forEach((choice) => {
            choice.changeState(state);
        });
    }
    getDecorator(decoratorSet) {
        return decoratorSet.checkbox(this.args.display);
    }
}
exports.default = HtmlTsInputCheckbox;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/MultiValue/HtmlTsInputSelectMulti.ts":
/*!************************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/MultiValue/HtmlTsInputSelectMulti.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputMultiValue_1 = __webpack_require__(/*! ../Core/AbstractHtmlTsInputMultiValue */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputMultiValue.ts");
const HtmlTsInputOption_1 = __webpack_require__(/*! ../Choice/HtmlTsInputOption */ "./src/HtmlTs/Input/Elements/Choice/HtmlTsInputOption.ts");
class HtmlTsInputSelectMulti extends AbstractHtmlTsInputMultiValue_1.default {
    constructor(args) {
        super(args);
        this.type = "select";
        this.inputTagName = "select";
        this.build();
    }
    createInput() {
        const input = super.createInput();
        input.setAttr("multiple", "true");
        if (this.args.size !== undefined) {
            input.setAttr("size", `${this.args.size}`);
        }
        else {
            input.setAttr("size", `${this.choiceValues.length}`);
        }
        return input;
    }
    createChoice(choice) {
        return new HtmlTsInputOption_1.default(choice.value, choice.label, choice.title, this.state);
    }
    getDecorator(decoratorSet) {
        return decoratorSet.selectMulti(this.args.display);
    }
}
exports.default = HtmlTsInputSelectMulti;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/SingleValue/Choice/HtmlTsInputRadio.ts":
/*!**************************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/SingleValue/Choice/HtmlTsInputRadio.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputSingleValueChoice_1 = __webpack_require__(/*! ../../Core/AbstractHtmlTsInputSingleValueChoice */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValueChoice.ts");
const HtmlTsInputChoiceRadio_1 = __webpack_require__(/*! ../../Choice/HtmlTsInputChoiceRadio */ "./src/HtmlTs/Input/Elements/Choice/HtmlTsInputChoiceRadio.ts");
class HtmlTsInputRadio extends AbstractHtmlTsInputSingleValueChoice_1.default {
    constructor(args) {
        super(args);
        this.type = "radio";
        this.inputTagName = "div";
        this.build();
    }
    createChoice(choice) {
        return new HtmlTsInputChoiceRadio_1.default({
            name: this.name,
            value: choice.value,
            label: choice.label,
            title: choice.title,
            state: this.state,
        });
    }
    setOnChange() {
        this.choice.forEach((choice) => {
            choice.htmlInput.on("change", (html) => {
                this.whenValueChanged();
            });
        });
    }
    changeState(state) {
        this.state = state;
        this.choice.forEach((choice) => {
            choice.changeState(state);
        });
    }
    getDecorator(decoratorSet) {
        return decoratorSet.radio(this.args.display);
    }
}
exports.default = HtmlTsInputRadio;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/SingleValue/HtmlTsInputHidden.ts":
/*!********************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/SingleValue/HtmlTsInputHidden.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputSingleValue_1 = __webpack_require__(/*! ../Core/AbstractHtmlTsInputSingleValue */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValue.ts");
class HtmlTsInputHidden extends AbstractHtmlTsInputSingleValue_1.default {
    constructor(args) {
        super(args);
        this.type = "hidden";
        this.build();
    }
    clear() {
        // hiddenはdefaultではclearできない。
        if (this.args.isClearable !== undefined && this.args.isClearable === true) {
            super.clear();
        }
    }
    validate() {
        // hiddenはvalidateしない
        return true;
    }
    getDecorator(decoratorSet) {
        return decoratorSet.hidden(this.args.display);
    }
}
exports.default = HtmlTsInputHidden;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/SingleValue/HtmlTsInputSelectOne.ts":
/*!***********************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/SingleValue/HtmlTsInputSelectOne.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTsInputOption_1 = __webpack_require__(/*! ../Choice/HtmlTsInputOption */ "./src/HtmlTs/Input/Elements/Choice/HtmlTsInputOption.ts");
const AbstractHtmlTsInputSingleValueChoice_1 = __webpack_require__(/*! ../Core/AbstractHtmlTsInputSingleValueChoice */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValueChoice.ts");
class HtmlTsInputSelectOne extends AbstractHtmlTsInputSingleValueChoice_1.default {
    constructor(args) {
        super(args);
        this.type = "select";
        this.inputTagName = "select";
        this.build();
    }
    createChoice(choice) {
        return new HtmlTsInputOption_1.default(choice.value, choice.label, choice.title, this.state);
    }
    getDecorator(decoratorSet) {
        return decoratorSet.selectOne(this.args.display);
    }
}
exports.default = HtmlTsInputSelectOne;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/SingleValue/Text/AbstractHtmlTsInputText.ts":
/*!*******************************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/SingleValue/Text/AbstractHtmlTsInputText.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputSingleValue_1 = __webpack_require__(/*! ../../Core/AbstractHtmlTsInputSingleValue */ "./src/HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValue.ts");
const HtmlTsInputTextValidator_1 = __webpack_require__(/*! ../../../Validator/HtmlTsInputTextValidator */ "./src/HtmlTs/Input/Validator/HtmlTsInputTextValidator.ts");
class AbstractHtmlTsInputText extends AbstractHtmlTsInputSingleValue_1.default {
    constructor(args) {
        super(args);
        this.type = "password";
        this.validator = new HtmlTsInputTextValidator_1.default(args.validate);
        this.placeHolder = args.placeHolder;
    }
    build() {
        super.build();
        if (this.placeHolder !== undefined) {
            this.input.setAttr("placeholder", this.placeHolder);
        }
    }
    setOnChange() {
        this.input.on("input", (html) => {
            this.whenValueChanged();
        });
    }
}
exports.default = AbstractHtmlTsInputText;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/SingleValue/Text/HtmlTsInputPassword.ts":
/*!***************************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/SingleValue/Text/HtmlTsInputPassword.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputText_1 = __webpack_require__(/*! ./AbstractHtmlTsInputText */ "./src/HtmlTs/Input/Elements/SingleValue/Text/AbstractHtmlTsInputText.ts");
class HtmlTsInputPassword extends AbstractHtmlTsInputText_1.default {
    constructor(args) {
        super(args);
        this.type = "password";
        this.build();
    }
    getDecorator(decoratorSet) {
        return decoratorSet.password(this.args.display);
    }
}
exports.default = HtmlTsInputPassword;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/SingleValue/Text/HtmlTsInputText.ts":
/*!***********************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/SingleValue/Text/HtmlTsInputText.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputText_1 = __webpack_require__(/*! ./AbstractHtmlTsInputText */ "./src/HtmlTs/Input/Elements/SingleValue/Text/AbstractHtmlTsInputText.ts");
class HtmlTsInputText extends AbstractHtmlTsInputText_1.default {
    constructor(args) {
        super(args);
        this.type = "text";
        this.build();
    }
    getDecorator(decoratorSet) {
        return decoratorSet.text(this.args.display);
    }
}
exports.default = HtmlTsInputText;


/***/ }),

/***/ "./src/HtmlTs/Input/Elements/SingleValue/Text/HtmlTsInputTextArea.ts":
/*!***************************************************************************!*\
  !*** ./src/HtmlTs/Input/Elements/SingleValue/Text/HtmlTsInputTextArea.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __webpack_require__(/*! ../../../../build */ "./src/HtmlTs/build.ts");
const AbstractHtmlTsInputText_1 = __webpack_require__(/*! ./AbstractHtmlTsInputText */ "./src/HtmlTs/Input/Elements/SingleValue/Text/AbstractHtmlTsInputText.ts");
class HtmlTsInputTextArea extends AbstractHtmlTsInputText_1.default {
    constructor(args) {
        super(args);
        this.type = "textarea";
        this.build();
        if (args.rows !== undefined) {
            this.input.setAttr("rows", args.rows);
        }
        if (args.cols !== undefined) {
            this.input.setAttr("cols", args.cols);
        }
    }
    getDecorator(decoratorSet) {
        return decoratorSet.textarea(this.args.display);
    }
    createInput() {
        return build_1.default.create("textarea");
    }
    set(value) {
        this.input.setText(value);
    }
    value() {
        return this.input.getText();
    }
}
exports.default = HtmlTsInputTextArea;


/***/ }),

/***/ "./src/HtmlTs/Input/HtmlTsInputDictionary.ts":
/*!***************************************************!*\
  !*** ./src/HtmlTs/Input/HtmlTsInputDictionary.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTsDictionary_1 = __webpack_require__(/*! ../Core/HtmlTsDictionary */ "./src/HtmlTs/Core/HtmlTsDictionary.ts");
class HtmlTsInputDictionaryClass extends HtmlTsDictionary_1.AbstractHtmlTsDictionary {
    constructor() {
        super(...arguments);
        this.category = "input";
        this.dictionary = {
            "ja": {
                "isNotNull": "入力必須項目です",
                "isNumber": "数値で入力してください",
                "isDecimal": "整数で入力してください",
                "isFloat": "小数で入力してください",
                "isAlphabet": "英字のみで入力してください",
                "isAlphabetUppercase": "大文字の英字のみで入力してください",
                "isAlphabetLowercase": "小文字の英字のみで入力してください",
                "isAlphanumeric": "英数字のみで入力してください",
                "isSymbol": "記号のみで入力してください",
                "isPassword": "パスワードの形式で入力してください",
                "isUrl": "URLの形式で入力してください",
                "isEmail": "メールアドレスの形式で入力してください",
                "isLengthOrMore": "%s文字以上で入力してください",
                "isLengthOrLess": "%s文字以下で入力してください",
                "isByteOrMore": "%sByte以上で入力してください",
                "isByteOrLess": "%sByte以下で入力してください",
                "isNumberOrMore": "%s以上の数値で入力してください",
                "isNumberOrLess": "%s以下の数値で入力してください",
                "isIncludeDigitOrMore": "%s文字以上の数値を含めてください",
                "isIncludeSymbolOrMore": "%s文字以上の記号を含めてください",
                "isInList": "不正な入力値です",
                "isNotInList": "不正な入力値です",
                "isMatchRegexp": "不正な入力値です(%s)",
                // choice
                "choiceIsNotNull": "選択必須項目です",
                "choiceMinSelect": "%s個以上選択してください",
                "choiceMaxSelect": "%s個以下で選択してください",
            },
            "en": {
                "isNotNull": "This Field is Required",
                "isNumber": "数値で入力してください",
                "isDecimal": "整数で入力してください",
                "isFloat": "小数で入力してください",
                "isAlphabet": "英字のみで入力してください",
                "isAlphabetUppercase": "大文字の英字のみで入力してください",
                "isAlphabetLowercase": "小文字の英字のみで入力してください",
                "isAlphanumeric": "英数字のみで入力してください",
                "isSymbol": "記号のみで入力してください",
                "isPassword": "パスワードの形式で入力してください",
                "isUrl": "URLの形式で入力してください",
                "isEmail": "メールアドレスの形式で入力してください",
                "isLengthOrMore": "%s文字以上で入力してください",
                "isLengthOrLess": "%s文字以下で入力してください",
                "isByteOrMore": "%sByte以上で入力してください",
                "isByteOrLess": "%sByte以下で入力してください",
                "isNumberOrMore": "%s以上の数値で入力してください",
                "isNumberOrLess": "%s以下の数値で入力してください",
                "isIncludeDigitOrMore": "%s文字以上の数値を含めてください",
                "isIncludeSymbolOrMore": "%s文字以上の記号を含めてください",
                "isInList": "不正な入力値です",
                "isNotInList": "不正な入力値です",
                "isMatchRegexp": "不正な入力値です(%s)",
                // choice
                "choiceIsNotNull": "選択必須項目です",
                "choiceMinSelect": "%s個以上選択してください",
                "choiceMaxSelect": "%s個以下で選択してください",
            },
        };
    }
}
const HtmlTsInputDictionary = new HtmlTsInputDictionaryClass();
// 辞書の登録
HtmlTsDictionary_1.default.subscribe(HtmlTsInputDictionary);
exports.default = HtmlTsInputDictionary;


/***/ }),

/***/ "./src/HtmlTs/Input/HtmlTsInputFactory.ts":
/*!************************************************!*\
  !*** ./src/HtmlTs/Input/HtmlTsInputFactory.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTsInputHidden_1 = __webpack_require__(/*! ./Elements/SingleValue/HtmlTsInputHidden */ "./src/HtmlTs/Input/Elements/SingleValue/HtmlTsInputHidden.ts");
const HtmlTsInputText_1 = __webpack_require__(/*! ./Elements/SingleValue/Text/HtmlTsInputText */ "./src/HtmlTs/Input/Elements/SingleValue/Text/HtmlTsInputText.ts");
const HtmlTsInputTextArea_1 = __webpack_require__(/*! ./Elements/SingleValue/Text/HtmlTsInputTextArea */ "./src/HtmlTs/Input/Elements/SingleValue/Text/HtmlTsInputTextArea.ts");
const HtmlTsInputSelectOne_1 = __webpack_require__(/*! ./Elements/SingleValue/HtmlTsInputSelectOne */ "./src/HtmlTs/Input/Elements/SingleValue/HtmlTsInputSelectOne.ts");
const HtmlTsInputRadio_1 = __webpack_require__(/*! ./Elements/SingleValue/Choice/HtmlTsInputRadio */ "./src/HtmlTs/Input/Elements/SingleValue/Choice/HtmlTsInputRadio.ts");
const HtmlTsInputController_1 = __webpack_require__(/*! ./Elements/InputController/HtmlTsInputController */ "./src/HtmlTs/Input/Elements/InputController/HtmlTsInputController.ts");
const HtmlTsInputSelectMulti_1 = __webpack_require__(/*! ./Elements/MultiValue/HtmlTsInputSelectMulti */ "./src/HtmlTs/Input/Elements/MultiValue/HtmlTsInputSelectMulti.ts");
const HtmlTsInputCheckbox_1 = __webpack_require__(/*! ./Elements/MultiValue/Choice/HtmlTsInputCheckbox */ "./src/HtmlTs/Input/Elements/MultiValue/Choice/HtmlTsInputCheckbox.ts");
const HtmlTsInputPassword_1 = __webpack_require__(/*! ./Elements/SingleValue/Text/HtmlTsInputPassword */ "./src/HtmlTs/Input/Elements/SingleValue/Text/HtmlTsInputPassword.ts");
class HtmlTsInputFactory {
    setDecoratorSet(decoratorSet) {
        this.decoratorSet = decoratorSet;
    }
    getDecoratorSet() {
        return this.decoratorSet;
    }
    controller() {
        return new HtmlTsInputController_1.default();
    }
    //
    // Single value
    //
    hidden(args) {
        return new HtmlTsInputHidden_1.default(args);
    }
    text(args) {
        return new HtmlTsInputText_1.default(args);
    }
    password(args) {
        return new HtmlTsInputPassword_1.default(args);
    }
    textarea(args) {
        return new HtmlTsInputTextArea_1.default(args);
    }
    selectOne(args) {
        return new HtmlTsInputSelectOne_1.default(args);
    }
    radio(args) {
        return new HtmlTsInputRadio_1.default(args);
    }
    //
    // Multi Value
    //
    checkbox(args) {
        return new HtmlTsInputCheckbox_1.default(args);
    }
    selectMulti(args) {
        return new HtmlTsInputSelectMulti_1.default(args);
    }
}
exports.default = HtmlTsInputFactory;


/***/ }),

/***/ "./src/HtmlTs/Input/Validator/Core/AbstractHtmlTsInputValidator.ts":
/*!*************************************************************************!*\
  !*** ./src/HtmlTs/Input/Validator/Core/AbstractHtmlTsInputValidator.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTsInputValidatorResult_1 = __webpack_require__(/*! ./HtmlTsInputValidatorResult */ "./src/HtmlTs/Input/Validator/Core/HtmlTsInputValidatorResult.ts");
const HtmlTsInputDictionary_1 = __webpack_require__(/*! ../../HtmlTsInputDictionary */ "./src/HtmlTs/Input/HtmlTsInputDictionary.ts");
class AbstractHtmlTsInputValidator {
    constructor(params) {
        this.params = params;
    }
    validate(value) {
        const results = new HtmlTsInputValidatorResult_1.default();
        for (const key of this.keys) {
            if (this.isTest[key] !== true)
                continue;
            if (this.map[key] === undefined)
                continue;
            results.append(this.map[key].func(value), HtmlTsInputDictionary_1.default.get(this.map[key].wordKey));
        }
        if (this.params !== undefined &&
            this.params.custom !== undefined &&
            this.params.custom instanceof Array) {
            this.params.custom.forEach((custom) => {
                if (typeof custom.test === "function") {
                    results.append(custom.test(value), custom.message);
                }
            });
        }
        return results;
    }
}
exports.default = AbstractHtmlTsInputValidator;


/***/ }),

/***/ "./src/HtmlTs/Input/Validator/Core/HtmlTsInputValidatorResult.ts":
/*!***********************************************************************!*\
  !*** ./src/HtmlTs/Input/Validator/Core/HtmlTsInputValidatorResult.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HtmlTsInputValidatorResult {
    constructor() {
        this.result = true;
        this.messages = [];
    }
    append(result, message) {
        if (result)
            return;
        this.result = false;
        if (message !== undefined && message !== "") {
            this.messages.push(message);
        }
    }
}
exports.default = HtmlTsInputValidatorResult;


/***/ }),

/***/ "./src/HtmlTs/Input/Validator/HtmlTsInputChoiceValidatorMulti.ts":
/*!***********************************************************************!*\
  !*** ./src/HtmlTs/Input/Validator/HtmlTsInputChoiceValidatorMulti.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTsValidateArray_1 = __webpack_require__(/*! ../../Validate/HtmlTsValidateArray */ "./src/HtmlTs/Validate/HtmlTsValidateArray.ts");
const AbstractHtmlTsInputValidator_1 = __webpack_require__(/*! ./Core/AbstractHtmlTsInputValidator */ "./src/HtmlTs/Input/Validator/Core/AbstractHtmlTsInputValidator.ts");
const HtmlTsInputDictionary_1 = __webpack_require__(/*! ../HtmlTsInputDictionary */ "./src/HtmlTs/Input/HtmlTsInputDictionary.ts");
class HtmlTsInputChoiceValidatorMulti extends AbstractHtmlTsInputValidator_1.default {
    constructor(params) {
        super(params);
        this.keys = [
            "isNotNull",
        ];
        this.map = {
            isNotNull: {
                func: HtmlTsValidateArray_1.default.isNotNull,
                wordKey: "choiceIsNotNull",
            },
        };
        this.isTest = {
            "isNotNull": false,
        };
        if (this.params === undefined)
            return;
        if (this.params.isNotNull !== undefined)
            this.isTest["isNotNull"] = this.params.isNotNull;
    }
    validate(value) {
        const result = super.validate(value);
        if (this.params === undefined)
            return result;
        if (this.params.minSelect !== undefined) {
            result.append(HtmlTsValidateArray_1.default.minSelect(value, this.params.minSelect), HtmlTsInputDictionary_1.default.get("choiceMinSelect").replace("%s", this.params.minSelect.toString()));
        }
        if (this.params.maxSelect !== undefined) {
            result.append(HtmlTsValidateArray_1.default.maxSelect(value, this.params.maxSelect), HtmlTsInputDictionary_1.default.get("choiceMaxSelect").replace("%s", this.params.maxSelect.toString()));
        }
        return result;
    }
}
exports.default = HtmlTsInputChoiceValidatorMulti;


/***/ }),

/***/ "./src/HtmlTs/Input/Validator/HtmlTsInputChoiceValidatorSingle.ts":
/*!************************************************************************!*\
  !*** ./src/HtmlTs/Input/Validator/HtmlTsInputChoiceValidatorSingle.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputValidator_1 = __webpack_require__(/*! ./Core/AbstractHtmlTsInputValidator */ "./src/HtmlTs/Input/Validator/Core/AbstractHtmlTsInputValidator.ts");
const HtmlTsValidateText_1 = __webpack_require__(/*! ../../Validate/HtmlTsValidateText */ "./src/HtmlTs/Validate/HtmlTsValidateText.ts");
class HtmlTsInputChoiceValidatorSingle extends AbstractHtmlTsInputValidator_1.default {
    constructor(params) {
        super(params);
        this.keys = [
            "isNotNull",
        ];
        this.map = {
            isNotNull: {
                func: HtmlTsValidateText_1.default.isNotNull,
                wordKey: "choiceIsNotNull",
            },
        };
        this.isTest = {
            "isNotNull": false,
        };
        if (this.params === undefined)
            return;
        if (this.params.isNotNull !== undefined)
            this.isTest["isNotNull"] = this.params.isNotNull;
    }
}
exports.default = HtmlTsInputChoiceValidatorSingle;


/***/ }),

/***/ "./src/HtmlTs/Input/Validator/HtmlTsInputTextValidator.ts":
/*!****************************************************************!*\
  !*** ./src/HtmlTs/Input/Validator/HtmlTsInputTextValidator.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHtmlTsInputValidator_1 = __webpack_require__(/*! ./Core/AbstractHtmlTsInputValidator */ "./src/HtmlTs/Input/Validator/Core/AbstractHtmlTsInputValidator.ts");
const HtmlTsValidateText_1 = __webpack_require__(/*! ../../Validate/HtmlTsValidateText */ "./src/HtmlTs/Validate/HtmlTsValidateText.ts");
const HtmlTsInputDictionary_1 = __webpack_require__(/*! ../HtmlTsInputDictionary */ "./src/HtmlTs/Input/HtmlTsInputDictionary.ts");
class HtmlTsInputTextValidator extends AbstractHtmlTsInputValidator_1.default {
    constructor(params) {
        super(params);
        this.keys = [
            "isNotNull",
            "isNumber",
            "isDecimal",
            "isFloat",
            "isAlphabet",
            "isAlphabetUppercase",
            "isAlphabetLowercase",
            "isAlphanumeric",
            "isSymbol",
            "isFloat",
            "isUrl",
            "isEmail",
        ];
        this.map = {
            isNotNull: {
                func: HtmlTsValidateText_1.default.isNotNull,
                wordKey: "isNotNull",
            },
            isNumber: {
                func: HtmlTsValidateText_1.default.isNumber,
                wordKey: "isNumber",
            },
            isDecimal: {
                func: HtmlTsValidateText_1.default.isDecimal,
                wordKey: "isDecimal",
            },
            isFloat: {
                func: HtmlTsValidateText_1.default.isFloat,
                wordKey: "isFloat",
            },
            isAlphabet: {
                func: HtmlTsValidateText_1.default.isAlphabet,
                wordKey: "isAlphabet",
            },
            isAlphabetUppercase: {
                func: HtmlTsValidateText_1.default.isAlphabetUppercase,
                wordKey: "isAlphabetUppercase",
            },
            isAlphabetLowercase: {
                func: HtmlTsValidateText_1.default.isAlphabetLowercase,
                wordKey: "isAlphabetLowercase",
            },
            isAlphanumeric: {
                func: HtmlTsValidateText_1.default.isAlphanumeric,
                wordKey: "isAlphanumeric",
            },
            isSymbol: {
                func: HtmlTsValidateText_1.default.isSymbol,
                wordKey: "isSymbol",
            },
            isPassword: {
                func: HtmlTsValidateText_1.default.isPassword,
                wordKey: "isPassword",
            },
            isUrl: {
                func: HtmlTsValidateText_1.default.isUrl,
                wordKey: "isUrl",
            },
            isEmail: {
                func: HtmlTsValidateText_1.default.isEmail,
                wordKey: "isEmail",
            },
        };
        this.isTest = {
            "isNotNull": false,
            "isNumber": false,
            "isDecimal": false,
            "isFloat": false,
            "isAlphabet": false,
            "isAlphabetUppercase": false,
            "isAlphabetLowercase": false,
            "isAlphanumeric": false,
            "isSymbol": false,
            "isPassword": false,
            "isUrl": false,
            "isEmail": false,
        };
        if (this.params === undefined)
            return;
        if (this.params.isNotNull !== undefined)
            this.isTest["isNotNull"] = this.params.isNotNull;
        if (this.params.isNumber !== undefined)
            this.isTest["isNumber"] = this.params.isNumber;
        if (this.params.isDecimal !== undefined)
            this.isTest["isDecimal"] = this.params.isDecimal;
        if (this.params.isFloat !== undefined)
            this.isTest["isFloat"] = this.params.isFloat;
        if (this.params.isAlphabet !== undefined)
            this.isTest["isAlphabet"] = this.params.isAlphabet;
        if (this.params.isAlphabetUppercase !== undefined)
            this.isTest["isAlphabetUppercase"] = this.params.isAlphabetUppercase;
        if (this.params.isAlphabetLowercase !== undefined)
            this.isTest["isAlphabetLowercase"] = this.params.isAlphabetLowercase;
        if (this.params.isAlphanumeric !== undefined)
            this.isTest["isAlphanumeric"] = this.params.isAlphanumeric;
        if (this.params.isSymbol !== undefined)
            this.isTest["isSymbol"] = this.params.isSymbol;
        if (this.params.isPassword !== undefined)
            this.isTest["isPassword"] = this.params.isPassword;
        if (this.params.isUrl !== undefined)
            this.isTest["isUrl"] = this.params.isUrl;
        if (this.params.isEmail !== undefined)
            this.isTest["isEmail"] = this.params.isEmail;
    }
    validate(value) {
        const results = super.validate(value);
        if (this.params === undefined)
            return results;
        // isLengthOrMore
        if (this.params.isLengthOrMore !== undefined) {
            results.append(HtmlTsValidateText_1.default.isLengthOrMore(value, this.params.isLengthOrMore), HtmlTsInputDictionary_1.default.get("isLengthOrMore").replace("%s", this.params.isLengthOrMore.toString()));
        }
        // isLengthOrLess
        if (this.params.isLengthOrLess !== undefined) {
            results.append(HtmlTsValidateText_1.default.isLengthOrLess(value, this.params.isLengthOrLess), HtmlTsInputDictionary_1.default.get("isLengthOrLess").replace("%s", this.params.isLengthOrLess.toString()));
        }
        // isByteOrMore
        if (this.params.isByteOrMore !== undefined) {
            results.append(HtmlTsValidateText_1.default.isByteOrMore(value, this.params.isByteOrMore), HtmlTsInputDictionary_1.default.get("isByteOrMore").replace("%s", this.params.isByteOrMore.toString()));
        }
        // isByteOrLess
        if (this.params.isByteOrLess !== undefined) {
            results.append(HtmlTsValidateText_1.default.isByteOrLess(value, this.params.isByteOrLess), HtmlTsInputDictionary_1.default.get("isByteOrLess").replace("%s", this.params.isByteOrLess.toString()));
        }
        // isNumberOrMore
        if (this.params.isNumberOrMore !== undefined) {
            results.append(HtmlTsValidateText_1.default.isNumberOrMore(value, this.params.isNumberOrMore), HtmlTsInputDictionary_1.default.get("isNumberOrMore").replace("%s", this.params.isNumberOrMore.toString()));
        }
        // isNumberOrLess
        if (this.params.isNumberOrLess !== undefined) {
            results.append(HtmlTsValidateText_1.default.isNumberOrLess(value, this.params.isNumberOrLess), HtmlTsInputDictionary_1.default.get("isNumberOrLess").replace("%s", this.params.isNumberOrLess.toString()));
        }
        // isIncludeDigitOrMore
        if (this.params.isIncludeDigitOrMore !== undefined) {
            results.append(HtmlTsValidateText_1.default.isIncludeDigitOrMore(value, this.params.isIncludeDigitOrMore), HtmlTsInputDictionary_1.default.get("isIncludeDigitOrMore").replace("%s", this.params.isIncludeDigitOrMore.toString()));
        }
        // isIncludeSymbolOrMore
        if (this.params.isIncludeSymbolOrMore !== undefined) {
            results.append(HtmlTsValidateText_1.default.isIncludeSymbolOrMore(value, this.params.isIncludeSymbolOrMore), HtmlTsInputDictionary_1.default.get("isIncludeSymbolOrMore").replace("%s", this.params.isIncludeSymbolOrMore.toString()));
        }
        // isInList
        if (this.params.isInList !== undefined && this.params.isInList.length > 0) {
            results.append(HtmlTsValidateText_1.default.isInList(value, this.params.isInList), HtmlTsInputDictionary_1.default.get("isInList"));
        }
        // isMatchRegexp
        if (this.params.isMatchRegexp !== undefined && this.params.isMatchRegexp !== "") {
            results.append(HtmlTsValidateText_1.default.isMatchRegexp(value, this.params.isMatchRegexp), HtmlTsInputDictionary_1.default.get("isMatchRegexp").replace("%s", this.params.isMatchRegexp));
        }
        return results;
    }
}
exports.default = HtmlTsInputTextValidator;


/***/ }),

/***/ "./src/HtmlTs/Table/HtmlTsTableFactory.ts":
/*!************************************************!*\
  !*** ./src/HtmlTs/Table/HtmlTsTableFactory.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __webpack_require__(/*! ../build */ "./src/HtmlTs/build.ts");
class HtmlTsTableFactory {
    constructor() {
        this.noDataText = "No Data.";
    }
    setDecorator(decorator) {
        this.defaultDecorator = decorator;
    }
    setNoDataText(text) {
        this.noDataText = text;
    }
    create(params, tableDecorator = undefined) {
        const $table = build_1.default.create("table", {
            content: [
                this.createThead(params.thead, tableDecorator),
                this.createTbody(params.tbody, tableDecorator) || this.createNoData(params.noData, tableDecorator),
                this.createTfoot(params.tfoot, tableDecorator),
                this.createCaption(params.caption, tableDecorator),
            ],
        });
        if (tableDecorator !== undefined) {
            tableDecorator.table($table);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.table($table);
        }
        return $table;
    }
    createVertical(params, tableDecorator = undefined) {
        const $table = build_1.default.create("table", {
            content: [
                this.createTbodyVertical(params.tbody, tableDecorator),
                this.createCaption(params.caption, tableDecorator),
            ],
        });
        if (tableDecorator !== undefined) {
            tableDecorator.table($table);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.table($table);
        }
        return $table;
    }
    createThead(thead, tableDecorator) {
        if (thead === undefined || thead.length === 0)
            return undefined;
        const tr = this.createTr(thead.map((element) => {
            return this.createTh(element, tableDecorator);
        }));
        if (tableDecorator !== undefined) {
            tableDecorator.theadTr(tr);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.theadTr(tr);
        }
        const $thead = build_1.default.create("thead", {
            content: tr,
        });
        if (tableDecorator !== undefined) {
            tableDecorator.thead($thead);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.thead($thead);
        }
        return $thead;
    }
    createTbody(tbody, tableDecorator) {
        if (tbody === undefined || tbody.length === 0)
            return undefined;
        const $tbody = build_1.default.create("tbody", {
            content: tbody.map((row) => {
                const tr = this.createTr(row.map((element) => {
                    return this.createTd(element, tableDecorator);
                }));
                if (tableDecorator !== undefined) {
                    tableDecorator.tbodyTr(tr);
                }
                else if (this.defaultDecorator !== undefined) {
                    this.defaultDecorator.tbodyTr(tr);
                }
                return tr;
            }),
        });
        if (tableDecorator !== undefined) {
            tableDecorator.tbody($tbody);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.tbody($tbody);
        }
        return $tbody;
    }
    createTfoot(tfoot, tableDecorator) {
        if (tfoot === undefined || tfoot.length === 0)
            return undefined;
        const tr = this.createTr(tfoot.map((element) => {
            return this.createTh(element, tableDecorator);
        }));
        if (tableDecorator !== undefined) {
            tableDecorator.tfootTr(tr);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.tfootTr(tr);
        }
        const $tfoot = build_1.default.create("tfoot", {
            content: tr,
        });
        if (tableDecorator !== undefined) {
            tableDecorator.tfoot($tfoot);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.tfoot($tfoot);
        }
        return $tfoot;
    }
    createCaption(caption, tableDecorator) {
        if (caption === undefined)
            return undefined;
        const $caption = build_1.default.create("caption", {
            content: caption,
        });
        if (tableDecorator !== undefined) {
            tableDecorator.caption($caption);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.caption($caption);
        }
        return $caption;
    }
    createTr(contents) {
        return build_1.default.create("tr", {
            content: contents,
        });
    }
    createTh(th, tableDecorator) {
        const $th = build_1.default.create("th", {
            content: th,
        });
        if (tableDecorator !== undefined) {
            tableDecorator.th($th);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.th($th);
        }
        return $th;
    }
    createTd(td, tableDecorator) {
        const $td = build_1.default.create("td", {
            content: td,
        });
        if (tableDecorator !== undefined) {
            tableDecorator.td($td);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.td($td);
        }
        return $td;
    }
    createTbodyVertical(tbody, tableDecorator) {
        if (tbody === undefined || tbody.length === 0)
            return undefined;
        const $tbody = build_1.default.create("tbody", {
            content: tbody.map((row) => {
                const $row = [];
                for (const [index, element] of row.entries()) {
                    if (index === 0) {
                        $row.push(this.createTh(element, tableDecorator));
                    }
                    else {
                        $row.push(this.createTd(element, tableDecorator));
                    }
                }
                return this.createTr($row);
            })
        });
        if (tableDecorator !== undefined) {
            tableDecorator.tbody($tbody);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.tbody($tbody);
        }
        return $tbody;
    }
    createNoData(noData, tableDecorator) {
        let td;
        if (noData !== undefined) {
            td = build_1.default.create("td", noData);
        }
        else {
            td = build_1.default.create("td", this.noDataText);
        }
        td.setAttr("colspan", "9999");
        if (tableDecorator !== undefined) {
            tableDecorator.noData(td);
        }
        else if (this.defaultDecorator !== undefined) {
            this.defaultDecorator.noData(td);
        }
        return this.createTr([td]);
    }
}
exports.default = HtmlTsTableFactory;


/***/ }),

/***/ "./src/HtmlTs/Validate/HtmlTsValidateArray.ts":
/*!****************************************************!*\
  !*** ./src/HtmlTs/Validate/HtmlTsValidateArray.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTsValidateArray = {
    isNotNull: (value) => {
        return value.length > 0;
    },
    minSelect: (value, minSelect) => {
        return value.length >= minSelect;
    },
    maxSelect: (value, maxSelect) => {
        return value.length <= maxSelect;
    },
};
exports.default = HtmlTsValidateArray;


/***/ }),

/***/ "./src/HtmlTs/Validate/HtmlTsValidateText.ts":
/*!***************************************************!*\
  !*** ./src/HtmlTs/Validate/HtmlTsValidateText.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTsUtil_1 = __webpack_require__(/*! ../Core/HtmlTsUtil */ "./src/HtmlTs/Core/HtmlTsUtil.ts");
const validate_const = {
    "regexp": {
        // 数値
        "integer": /^-?(0|[1-9][0-9]*)$/,
        "decimal": /^(0|[1-9][0-9]*)$/,
        "float": /^-?(0|[1-9][0-9]*)([\.]{1}[0-9]+)?$/,
        // 文字列
        "alphabet": /^[a-z]*$/i,
        "alphabet_uppercase": /^[A-Z]*$/,
        "alphabet_lowercase": /^[a-z]*$/,
        "alphanumeric": /^[0-9a-z]*$/i,
        "symbols": /^[(){}\[\]_\-+;:*@&%!^~`,.]+$/,
        "password": /^[a-zA-Z0-9(){}\[\]_\-+;:*@&%!^~`,.]+$/,
        // 特定のフォーマット
        "url": /^(https?):\/\/.+$/i,
        "email": /^[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i,
    }
};
const HtmlTsValidateText = {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 入力必須
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    isNotNull: (value) => {
        if (value === undefined)
            return false;
        return value !== "";
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 使用文字制限（数値系）
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 数値かどうか
     * 入力値がNULLの時は true を返します
     */
    isNumber: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        // globalなisNaNはnumberじゃなくてもいけるはずだが？
        // @ts-ignore
        return !isNaN(value);
    },
    /**
     * 整数かどうか
     * 先頭が0は許さない
     */
    isInteger: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.integer, value);
    },
    /**
     * 正の整数かどうか
     * 先頭が0は許さない
     */
    isDecimal: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.decimal, value);
    },
    /**
     * 小数値かどうか
     */
    isFloat: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        // 表現をチェック
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.float, value);
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 使用文字制限（文字列系）
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 英字だけかどうか（大文字小文字両方可）
     * @param {string} value
     * @returns {boolean}
     */
    isAlphabet: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.alphabet, value);
    },
    /**
     * 英字だけかどうか（大文字のみ）
     * @param {string} value
     * @returns {boolean}
     */
    isAlphabetUppercase: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.alphabet_uppercase, value);
    },
    /**
     * 英字だけかどうか（小文字のみ）
     * @param {string} value
     * @returns {boolean}
     */
    isAlphabetLowercase: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.alphabet_lowercase, value);
    },
    /**
     * 英数字だけかどうか
     * @param {string} value
     * @returns {boolean}
     */
    isAlphanumeric: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.alphanumeric, value);
    },
    isSymbol: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.symbols, value);
    },
    isPassword: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.password, value);
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 特定のフォーマット
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * URLの形式かどうか
     * @param {string} value
     * @returns {boolean}
     */
    isUrl: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.url, value);
    },
    /**
     * Emailアドレスの形式かどうか
     * @param {string} value
     * @returns {boolean}
     */
    isEmail: (value) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsValidateText.isMatchRegexp(validate_const.regexp.email, value);
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //  文字数
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    isLengthOrLess: (value, length) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return value.length <= length;
    },
    isLengthOrMore: (value, length) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return value.length >= length;
    },
    isByteOrMore: (value, length) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return (HtmlTsUtil_1.default.string.countByte(value + "") >= length);
    },
    isByteOrLess: (value, length) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return (HtmlTsUtil_1.default.string.countByte(value + "") <= length);
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 数値の大小
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * [limit]以下の数値かどうか
     * @param {string} value
     * @param {float} limit
     * @returns {boolean}
     */
    isNumberOrLess: (value, limit) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return parseFloat(value) <= limit;
    },
    /**
     * [limit]以上の数値かどうか
     * @param value {int|float|string}
     * @param limit {int|float|string}
     * @returns {boolean}
     */
    isNumberOrMore: (value, limit) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return parseFloat(value) >= limit;
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // 含まれているかどうか
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 指定された個数の数字が含まれているかどうか
     * @param {string} value
     * @param {number} min_number
     * @return {boolean}
     */
    isIncludeDigitOrMore: (value, size) => {
        let count = 0;
        for (const char of value) {
            if (HtmlTsValidateText.isInteger(char))
                count++;
        }
        return count >= size;
    },
    /**
     * 指定された個数の記号が含まれているかどうか
     * @param {string} value
     * @param {number} size
     * @return {boolean}
     */
    isIncludeSymbolOrMore: (value, size) => {
        let count = 0;
        for (const char of value) {
            if (HtmlTsValidateText.isSymbol(char))
                count++;
        }
        return count >= size;
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // リストにあるかどうか
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * ホワイトリストにあるかどうか
     */
    isInList: (value, list) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return HtmlTsUtil_1.default.array.in(value, list);
    },
    /**
     * ブラックリストにないかどうか
     * @param value
     * @param list_in {Array | function}
     * @returns {boolean}
     */
    isNotInList: (value, list) => {
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        return !HtmlTsValidateText.isInList(value, list);
    },
    //
    //
    // UTILITY
    //
    //
    /**
     * テストする文字列が指定された正規表現を通るかどうか
     * マッチしたらTrueを返す。
     * マッチしなかったらFalseを返す
     * @param {RegExp|string} regexp 正規表現
     * @param {string} value_in テストする文字列
     * @returns {boolean}
     */
    isMatchRegexp: (regexp, value) => {
        // 空文字の時は常にマッチすることにする（チェックを抜けるようにする）
        if (!HtmlTsValidateText.isNotNull(value))
            return true;
        if (regexp instanceof RegExp) {
            return regexp.test(value);
        }
        else {
            return (value.match(regexp).length > 0);
        }
    },
};
exports.default = HtmlTsValidateText;


/***/ }),

/***/ "./src/HtmlTs/build.ts":
/*!*****************************!*\
  !*** ./src/HtmlTs/build.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTsFactory_1 = __webpack_require__(/*! ./Core/HtmlTsFactory */ "./src/HtmlTs/Core/HtmlTsFactory.ts");
const htmlts = new HtmlTsFactory_1.default();
exports.default = htmlts;


/***/ }),

/***/ "./src/HtmlTs/index.ts":
/*!*****************************!*\
  !*** ./src/HtmlTs/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __webpack_require__(/*! ./build */ "./src/HtmlTs/build.ts");
window.htmlts = build_1.default;


/***/ })

/******/ });
//# sourceMappingURL=htmlts.js.map