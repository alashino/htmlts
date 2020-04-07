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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/HtmlTs/Core/HtmlTs.ts":
/*!***********************************!*\
  !*** ./src/HtmlTs/Core/HtmlTs.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst HtmlTsUtil_1 = __webpack_require__(/*! ./HtmlTsUtil */ \"./src/HtmlTs/Core/HtmlTsUtil.ts\");\nclass HtmlTs {\n    constructor(element) {\n        this.children = [];\n        this.htmlElement = element;\n    }\n    empty() {\n        if (!this.htmlElement.hasChildNodes())\n            return;\n        for (const childNode of this.htmlElement.childNodes) {\n            this.htmlElement.removeChild(childNode);\n        }\n    }\n    append(htmlts) {\n        if (htmlts instanceof Array) {\n            htmlts.forEach((h) => {\n                this.append(h);\n            });\n        }\n        else {\n            this.children.push(htmlts);\n            this.htmlElement.appendChild(htmlts.htmlElement);\n        }\n        return this;\n    }\n    remove() {\n        this.parent._removeFromChildren(this);\n        this.children.forEach((child) => {\n            child.remove();\n        });\n    }\n    _removeFromChildren(htmlTs) {\n        for (const [i, child] of this.children.entries()) {\n            if (child === htmlTs) {\n                this.children.slice(i, 1);\n                return;\n            }\n        }\n    }\n    setText(text) {\n        const textNode = document.createTextNode(text.toString());\n        this.htmlElement.appendChild(textNode);\n    }\n    //\n    // class系\n    //\n    addClass(className) {\n        const currentClassNames = this.getCurrentClassNames();\n        const addClassNames = this.splitClassNames(className);\n        for (const addClassName of addClassNames) {\n            if (HtmlTsUtil_1.default.array.in(addClassName, currentClassNames))\n                continue;\n            currentClassNames.push(addClassName);\n        }\n        this.setAttribute(\"class\", currentClassNames.join(\" \"));\n        return this;\n    }\n    hasClass(className) {\n        const currentClassNames = this.getCurrentClassNames();\n        const addClassNames = this.splitClassNames(className);\n        for (const addClassName of addClassNames) {\n            if (HtmlTsUtil_1.default.array.in(addClassName, currentClassNames)) {\n                return true;\n            }\n        }\n        return false;\n    }\n    removeClass(className) {\n        const results = [];\n        const currentClassNames = this.getCurrentClassNames();\n        const removeClassNames = this.splitClassNames(className);\n        for (const currentClassName of currentClassNames) {\n            if (HtmlTsUtil_1.default.array.in(currentClassName, removeClassNames))\n                continue;\n            results.push(currentClassName);\n        }\n        this.setAttribute(\"class\", results.join(\" \"));\n        return this;\n    }\n    getCurrentClassNames() {\n        const currentClassStr = this.htmlElement.getAttribute(\"class\");\n        if (currentClassStr === undefined || currentClassStr === null) {\n            return [];\n        }\n        else {\n            return this.splitClassNames(currentClassStr);\n        }\n    }\n    splitClassNames(classNamesString) {\n        const results = [];\n        const currentClasses = classNamesString.split(\" \");\n        for (const currentClassName of currentClasses) {\n            if (currentClassName === \"\")\n                continue; // 連続する空スペースを排除\n            if (HtmlTsUtil_1.default.array.in(currentClassName, results))\n                continue; // ダブっているものを排除\n            results.push(currentClassName);\n        }\n        return results;\n    }\n    //\n    // CSS系\n    //\n    css(args1, args2) {\n        if (typeof args1 === \"string\") {\n            this.setCss(args1, args2);\n        }\n        else {\n            for (const key in args1) {\n                if (!args1.hasOwnProperty(key))\n                    continue;\n                this.setCss(key, args1[key]);\n            }\n        }\n        return this;\n    }\n    setCss(key, value) {\n        const css = this.getCurrentCss();\n        css[key] = (value === undefined) ? \"\" : `${value}`;\n        let styleString = \"\";\n        for (const key in css) {\n            if (!css.hasOwnProperty(key))\n                continue;\n            const cssValue = css[key];\n            if (cssValue === \"\")\n                continue;\n            styleString += `${key}:${cssValue};`;\n        }\n        this.setAttribute(\"style\", styleString);\n    }\n    getCurrentCss() {\n        const results = {};\n        const currentStyleString = this.htmlElement.getAttribute(\"style\");\n        if (currentStyleString === null || currentStyleString === undefined)\n            return results;\n        currentStyleString.split(\";\").forEach((str) => {\n            const split = str.split(\":\");\n            if (split.length !== 2)\n                return;\n            const key = HtmlTsUtil_1.default.string.strip(split[0]);\n            const value = HtmlTsUtil_1.default.string.strip(split[1]);\n            results[key] = value;\n        });\n        return results;\n    }\n    //\n    // Attribute系\n    //\n    attr(args1, args2) {\n        if (typeof args1 === \"string\") {\n            this.setAttribute(args1, args2);\n        }\n        else {\n            for (const key in args1) {\n                if (!args1.hasOwnProperty(key))\n                    continue;\n                this.setAttribute(key, args1[key]);\n            }\n        }\n        return this;\n    }\n    setAttribute(key, value) {\n        if (value === undefined || value === \"\") {\n            this.htmlElement.removeAttribute(key);\n        }\n        else {\n            this.htmlElement.setAttribute(key, `${value}`);\n        }\n    }\n    getAttr(key) {\n        return this.htmlElement.getAttribute(key);\n    }\n    removeAttr(key) {\n        this.htmlElement.removeAttribute(key);\n    }\n    //\n    // イベント系\n    //\n    click(func) {\n        if (typeof func !== \"function\") {\n            // clickイベントを起こす\n            const event = document.createEvent(\"MouseEvent\");\n            event.initEvent(\"click\", false, true);\n            this.htmlElement.dispatchEvent(event);\n        }\n        else {\n            // eventListenerに追加\n            this.htmlElement.addEventListener('click', event => {\n                event.stopPropagation(); // bubblingの停止。\n                func(this.htmlElement);\n            });\n        }\n        return this;\n    }\n    //\n    // その他\n    //\n    getTagName() {\n        return this.htmlElement.tagName;\n    }\n}\nexports.default = HtmlTs;\n\n\n//# sourceURL=webpack:///./src/HtmlTs/Core/HtmlTs.ts?");

/***/ }),

/***/ "./src/HtmlTs/Core/HtmlTsFactory.ts":
/*!******************************************!*\
  !*** ./src/HtmlTs/Core/HtmlTsFactory.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst HtmlTs_1 = __webpack_require__(/*! ./HtmlTs */ \"./src/HtmlTs/Core/HtmlTs.ts\");\nconst HtmlTsUtil_1 = __webpack_require__(/*! ./HtmlTsUtil */ \"./src/HtmlTs/Core/HtmlTsUtil.ts\");\nclass HtmlTsFactory {\n    constructor() {\n        this.util = HtmlTsUtil_1.default;\n    }\n    createById(id, options) {\n        const htmlTs = new HtmlTs_1.default(document.getElementById(id));\n        if (!options === undefined) {\n            this.modify(htmlTs, options);\n        }\n        return htmlTs;\n    }\n    create(tagName, options) {\n        let htmlTs;\n        if (tagName instanceof Element) {\n            htmlTs = new HtmlTs_1.default(tagName);\n        }\n        else {\n            htmlTs = new HtmlTs_1.default(document.createElement(tagName));\n        }\n        if (options !== undefined) {\n            this.modify(htmlTs, options);\n        }\n        return htmlTs;\n    }\n    modify(htmlTs, options) {\n        if (typeof options === \"string\" ||\n            typeof options === \"number\" ||\n            options instanceof HtmlTs_1.default ||\n            options instanceof Array) {\n            this.modify(htmlTs, {\n                content: options,\n            });\n        }\n        else {\n            // HtmlTsOptions の時\n            if (options.class !== undefined)\n                htmlTs.addClass(options.class);\n            if (options.attr !== undefined)\n                htmlTs.attr(options.attr);\n            if (options.css !== undefined)\n                htmlTs.css(options.css);\n            if (options.content !== undefined)\n                this.setContents(htmlTs, options.content);\n            if (options.click !== undefined)\n                htmlTs.click(options.click);\n        }\n    }\n    setContents(htmlTs, content) {\n        if (typeof content === \"string\" || typeof content === \"number\") {\n            htmlTs.setText(content);\n        }\n        else if (content instanceof HtmlTs_1.default) {\n            htmlTs.append(content);\n        }\n        else if (content instanceof Array) {\n            for (const c of content) {\n                if (typeof c === \"string\" || typeof c === \"number\") {\n                    htmlTs.append(this.create(\"span\", c));\n                }\n                else if (c instanceof HtmlTs_1.default) {\n                    htmlTs.append(c);\n                }\n            }\n        }\n    }\n}\nexports.default = HtmlTsFactory;\n\n\n//# sourceURL=webpack:///./src/HtmlTs/Core/HtmlTsFactory.ts?");

/***/ }),

/***/ "./src/HtmlTs/Core/HtmlTsUtil.ts":
/*!***************************************!*\
  !*** ./src/HtmlTs/Core/HtmlTsUtil.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass UtilString {\n    strip(str, separator = \" \") {\n        return this.lstrip(this.rstrip(str, separator), separator);\n    }\n    lstrip(str, separator = \" \") {\n        return str.replace(RegExp(`^[${separator}]+`), \"\");\n    }\n    rstrip(str, separator = \" \") {\n        return str.replace(RegExp(`[${separator}]+$`), \"\");\n    }\n}\nclass UtilArray {\n    //\n    // Array系\n    //\n    in(value, array) {\n        for (const element of array) {\n            if (value === element) {\n                return true;\n            }\n        }\n        return false;\n    }\n    getIndex(value, array) {\n        for (const [index, element] of array.entries()) {\n            if (value === element) {\n                return index;\n            }\n        }\n        return -1;\n    }\n}\nconst HtmlTsUtil = {\n    array: new UtilArray(),\n    string: new UtilString(),\n};\nexports.default = HtmlTsUtil;\n\n\n//# sourceURL=webpack:///./src/HtmlTs/Core/HtmlTsUtil.ts?");

/***/ }),

/***/ "./src/HtmlTs/build.ts":
/*!*****************************!*\
  !*** ./src/HtmlTs/build.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst HtmlTsFactory_1 = __webpack_require__(/*! ./Core/HtmlTsFactory */ \"./src/HtmlTs/Core/HtmlTsFactory.ts\");\nconst htmlts = new HtmlTsFactory_1.default();\nexports.default = htmlts;\n\n\n//# sourceURL=webpack:///./src/HtmlTs/build.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst build_1 = __webpack_require__(/*! ./HtmlTs/build */ \"./src/HtmlTs/build.ts\");\nwindow.htmlts = build_1.default;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });