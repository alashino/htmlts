"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const build_1 = require("./src/HtmlTs/build");
ava_1.default("デフォルトで数字と記号が必須", t => {
    const p = build_1.default.create("p");
    t.is("p", p.getTagName());
});
// test("単一文字の繰り返しはダメ", t => {
//
//     const password_false = input.create({
//         "type": "user_password",
//         "value": "aaaaaa",
//         min_number_of_digit: 0,
//         min_number_of_symbol: 0,
//     });
//
//     t.false(password_false.validate());
// });
//
// test("数字だけはダメ", t => {
//
//     const password_false = input.create({
//         "type": "user_password",
//         "value": "123456",
//         min_number_of_digit: 0,
//         min_number_of_symbol: 0,
//     });
//
//     t.false(password_false.validate());
// });
//
// test("使用できない記号が含まれているとダメ", t => {
//
//     const password_false = input.create({
//         "type": "user_password",
//         "value": "qwe$?rty",
//         min_number_of_digit: 0,
//         min_number_of_symbol: 0,
//     });
//
//     t.false(password_false.validate());
// });
