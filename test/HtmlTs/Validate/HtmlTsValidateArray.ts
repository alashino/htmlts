import * as chai from 'chai';
import HtmlTsValidateArray from "../../../src/HtmlTs/Validate/HtmlTsValidateArray";


describe('isNotNull', () => {

    it('undefind', () => {
        chai.assert.equal(false, HtmlTsValidateArray.isNotNull(undefined));
    });

    it('[]', () => {
        chai.assert.equal(false, HtmlTsValidateArray.isNotNull([]));
    });

    it('["hoge"]', () => {
        chai.assert.equal(true, HtmlTsValidateArray.isNotNull(["hoge"]));
    });


});

describe('minSelect', () => {

    it('undefind, undefined', () => {
        chai.assert.equal(false, HtmlTsValidateArray.minSelect(undefined, undefined));
    });

    it('undefind, 2', () => {
        chai.assert.equal(false, HtmlTsValidateArray.minSelect(undefined, 2));
    });

    it('[], 0', () => {
        chai.assert.equal(true, HtmlTsValidateArray.minSelect([], 0));
    });

    it('[], 1', () => {
        chai.assert.equal(false, HtmlTsValidateArray.minSelect([], 1));
    });

    it('["hoge"], 0', () => {
        chai.assert.equal(true, HtmlTsValidateArray.minSelect(["hoge"], 0));
    });

    it('["hoge"], 1', () => {
        chai.assert.equal(true, HtmlTsValidateArray.minSelect(["hoge"], 1));
    });

    it('["hoge"], 2', () => {
        chai.assert.equal(false, HtmlTsValidateArray.minSelect(["hoge"], 2));
    });

});

describe('maxSelect', () => {

    it('undefind, undefined', () => {
        chai.assert.equal(false, HtmlTsValidateArray.maxSelect(undefined, undefined));
    });

    it('undefind, 2', () => {
        chai.assert.equal(false, HtmlTsValidateArray.maxSelect(undefined, 2));
    });

    it('[], 0', () => {
        chai.assert.equal(true, HtmlTsValidateArray.maxSelect([], 0));
    });

    it('[], 1', () => {
        chai.assert.equal(true, HtmlTsValidateArray.maxSelect([], 1));
    });

    it('["hoge"], 0', () => {
        chai.assert.equal(false, HtmlTsValidateArray.maxSelect(["hoge"], 0));
    });

    it('["hoge"], 1', () => {
        chai.assert.equal(true, HtmlTsValidateArray.maxSelect(["hoge"], 1));
    });

    it('["hoge"], 2', () => {
        chai.assert.equal(true, HtmlTsValidateArray.maxSelect(["hoge"], 2));
    });

});

