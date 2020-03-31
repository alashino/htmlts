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

/***/ "./src/HtmlTs/HtmlTs.ts":
/*!******************************!*\
  !*** ./src/HtmlTs/HtmlTs.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass HtmlTs {\n    constructor(element) {\n        this.children = [];\n        this.htmlElement = element;\n    }\n    empty() {\n        if (!this.htmlElement.hasChildNodes())\n            return;\n        for (const childNode of this.htmlElement.childNodes) {\n            this.htmlElement.removeChild(childNode);\n        }\n    }\n    append(htmlts) {\n        if (htmlts instanceof Array) {\n            htmlts.forEach((h) => {\n                this.append(h);\n            });\n        }\n        else {\n            this.children.push(htmlts);\n            this.htmlElement.appendChild(htmlts.htmlElement);\n        }\n        return this;\n    }\n    remove() {\n        this.parent._removeFromChildren(this);\n        this.children.forEach((child) => {\n            child.remove();\n        });\n    }\n    _removeFromChildren(htmlTs) {\n        for (const [i, child] of this.children.entries()) {\n            if (child === htmlTs) {\n                this.children.slice(i, 1);\n                return;\n            }\n        }\n    }\n    setText(text) {\n        const textNode = document.createTextNode(text.toString());\n        console.log(textNode);\n        this.htmlElement.appendChild(textNode);\n    }\n    addClass(className) {\n        const currentClassStr = this.htmlElement.getAttribute(\"class\");\n        if (currentClassStr === undefined) {\n            this.setAttribute(\"class\", className);\n        }\n        else {\n            const currentClasses = currentClassStr.split(\" \");\n            const results = [className];\n            for (const currentClassName of currentClasses) {\n                if (currentClassName === \"\")\n                    continue;\n                results.push(currentClassName);\n            }\n            this.setAttribute(\"class\", results.join(\" \"));\n        }\n        return this;\n    }\n    setCss(key, value) {\n    }\n    setAttribute(key, value) {\n        if (value === undefined || value === \"\") {\n            this.htmlElement.removeAttribute(key);\n        }\n        else {\n            this.htmlElement.setAttribute(key, value);\n        }\n    }\n    getAttribute(key) {\n        return this.htmlElement.getAttribute(key);\n    }\n    removeAttribute(key) {\n        this.htmlElement.removeAttribute(key);\n    }\n    getTagName() {\n        return this.htmlElement.tagName;\n    }\n}\nexports.default = HtmlTs;\n\n\n//# sourceURL=webpack:///./src/HtmlTs/HtmlTs.ts?");

/***/ }),

/***/ "./src/HtmlTs/HtmlTsFactory.ts":
/*!*************************************!*\
  !*** ./src/HtmlTs/HtmlTsFactory.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst HtmlTs_1 = __webpack_require__(/*! ./HtmlTs */ \"./src/HtmlTs/HtmlTs.ts\");\nclass HtmlTsFactory {\n    createById(id, options) {\n        const htmlTs = new HtmlTs_1.default(document.getElementById(id));\n        if (!options === undefined) {\n            this.modify(htmlTs, options);\n        }\n        return htmlTs;\n    }\n    create(tagName, options) {\n        const htmlTs = new HtmlTs_1.default(document.createElement(tagName));\n        if (options !== undefined) {\n            this.modify(htmlTs, options);\n        }\n        return htmlTs;\n    }\n    modify(htmlTs, options) {\n        if (typeof options === \"string\" ||\n            typeof options === \"number\" ||\n            options instanceof HtmlTs_1.default ||\n            options instanceof Array) {\n            this.modify(htmlTs, {\n                content: options,\n            });\n        }\n        else {\n            // HtmlTsOptions の時\n            if (options.class !== undefined)\n                htmlTs.addClass(options.class);\n            if (options.attr !== undefined)\n                this.setAttr(htmlTs, options.attr);\n            if (options.css !== undefined)\n                this.setCss(htmlTs, options.css);\n            if (options.content !== undefined)\n                this.setContents(htmlTs, options.content);\n        }\n    }\n    setAttr(htmlTs, attr) {\n        for (const key in attr) {\n            const value = attr[key];\n            htmlTs.setAttribute(key, value);\n        }\n    }\n    setCss(htmlTs, css) {\n        for (const key in css) {\n            const value = css[key];\n            htmlTs.setAttribute(key, value);\n        }\n    }\n    setContents(htmlTs, content) {\n        if (typeof content === \"string\" || typeof content === \"number\") {\n            htmlTs.setText(content);\n        }\n        else if (content instanceof HtmlTs_1.default) {\n            htmlTs.append(content);\n        }\n        else if (content instanceof Array) {\n            for (const c of content) {\n                if (typeof c === \"string\" || typeof c === \"number\") {\n                    htmlTs.append(this.create(\"span\", c));\n                }\n                else if (c instanceof HtmlTs_1.default) {\n                    htmlTs.append(c);\n                }\n            }\n        }\n    }\n}\nexports.default = HtmlTsFactory;\n\n\n//# sourceURL=webpack:///./src/HtmlTs/HtmlTsFactory.ts?");

/***/ }),

/***/ "./src/HtmlTs/build.ts":
/*!*****************************!*\
  !*** ./src/HtmlTs/build.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst HtmlTsFactory_1 = __webpack_require__(/*! ./HtmlTsFactory */ \"./src/HtmlTs/HtmlTsFactory.ts\");\nconst htmlts = new HtmlTsFactory_1.default();\nexports.default = htmlts;\n\n\n//# sourceURL=webpack:///./src/HtmlTs/build.ts?");

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