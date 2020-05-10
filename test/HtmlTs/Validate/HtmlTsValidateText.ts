import * as chai from 'chai';
import HtmlTsValidateText from "../../../src/HtmlTs/Validate/HtmlTsValidateText";


describe('isNotNull', () => {

    it('undefined', () => {
        chai.assert.equal(false, HtmlTsValidateText.isNotNull(undefined));
    });

    it('', () => {
        chai.assert.equal(false, HtmlTsValidateText.isNotNull(""));
    });

    it('aaa', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNotNull("aaa"));
    });

});

describe('isNumber', () => {

    it('undefined', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber(undefined));
    });

    it('', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber(""));
    });

    it('aaa', () => {
        chai.assert.equal(false, HtmlTsValidateText.isNumber("aaa"));
    });

    it('0123', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber("0123"));
    });

    it('123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber("123545"));
    });

    it('+123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber("+123545"));
    });

    it('0', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber("0"));
    });

    it('-123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber("-123545"));
    });

});

describe('isNumber', () => {

    it('undefined', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber(undefined));
    });

    it('', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber(""));
    });

    it('aaa', () => {
        chai.assert.equal(false, HtmlTsValidateText.isNumber("aaa"));
    });

    it('0123', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber("0123"));
    });

    it('123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber("123545"));
    });

    it('+123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber("+123545"));
    });

    it('0', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber("0"));
    });

    it('-123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isNumber("-123545"));
    });

});

describe('isInteger', () => {

    it('undefined', () => {
        chai.assert.equal(true, HtmlTsValidateText.isInteger(undefined));
    });

    it('', () => {
        chai.assert.equal(true, HtmlTsValidateText.isInteger(""));
    });

    it('aaa', () => {
        chai.assert.equal(false, HtmlTsValidateText.isInteger("aaa"));
    });

    it('0123', () => {
        chai.assert.equal(false, HtmlTsValidateText.isInteger("0123"));
    });

    it('123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isInteger("123545"));
    });

    it('+123545', () => {
        chai.assert.equal(false, HtmlTsValidateText.isInteger("+123545"));
    });

    it('0', () => {
        chai.assert.equal(true, HtmlTsValidateText.isInteger("0"));
    });

    it('-123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isInteger("-123545"));
    });

    it('0.33', () => {
        chai.assert.equal(false, HtmlTsValidateText.isInteger("0.33"));
    });

    it('.33', () => {
        chai.assert.equal(false, HtmlTsValidateText.isInteger(".33"));
    });

   it('-0.33', () => {
        chai.assert.equal(false, HtmlTsValidateText.isInteger("-0.33"));
    });

    it('-.33', () => {
        chai.assert.equal(false, HtmlTsValidateText.isInteger("-.33"));
    });

});

describe('isDecimal', () => {

    it('undefined', () => {
        chai.assert.equal(true, HtmlTsValidateText.isDecimal(undefined));
    });

    it('', () => {
        chai.assert.equal(true, HtmlTsValidateText.isDecimal(""));
    });

    it('aaa', () => {
        chai.assert.equal(false, HtmlTsValidateText.isDecimal("aaa"));
    });

    it('0123', () => {
        chai.assert.equal(false, HtmlTsValidateText.isDecimal("0123"));
    });

    it('123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isDecimal("123545"));
    });

    it('+123545', () => {
        chai.assert.equal(false, HtmlTsValidateText.isDecimal("+123545"));
    });

    it('0', () => {
        chai.assert.equal(true, HtmlTsValidateText.isDecimal("0"));
    });

    it('-123545', () => {
        chai.assert.equal(false, HtmlTsValidateText.isDecimal("-123545"));
    });

    it('0.33', () => {
        chai.assert.equal(false, HtmlTsValidateText.isDecimal("0.33"));
    });

    it('.33', () => {
        chai.assert.equal(false, HtmlTsValidateText.isDecimal(".33"));
    });

    it('-0.33', () => {
        chai.assert.equal(false, HtmlTsValidateText.isDecimal("-0.33"));
    });

    it('-.33', () => {
        chai.assert.equal(false, HtmlTsValidateText.isDecimal("-.33"));
    });

});

describe('isFloat', () => {

    it('undefined', () => {
        chai.assert.equal(true, HtmlTsValidateText.isFloat(undefined));
    });

    it('', () => {
        chai.assert.equal(true, HtmlTsValidateText.isFloat(""));
    });

    it('aaa', () => {
        chai.assert.equal(false, HtmlTsValidateText.isFloat("aaa"));
    });

    it('0123', () => {
        chai.assert.equal(false, HtmlTsValidateText.isFloat("0123"));
    });

    it('123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isFloat("123545"));
    });

    it('+123545', () => {
        chai.assert.equal(false, HtmlTsValidateText.isFloat("+123545"));
    });

    it('0', () => {
        chai.assert.equal(true, HtmlTsValidateText.isFloat("0"));
    });

    it('-123545', () => {
        chai.assert.equal(true, HtmlTsValidateText.isFloat("-123545"));
    });

    it('0.33', () => {
        chai.assert.equal(true, HtmlTsValidateText.isFloat("0.33"));
    });

    it('.33', () => {
        chai.assert.equal(false, HtmlTsValidateText.isFloat(".33"));
    });

    it('-0.33', () => {
        chai.assert.equal(true, HtmlTsValidateText.isFloat("-0.33"));
    });

    it('-.33', () => {
        chai.assert.equal(false, HtmlTsValidateText.isFloat("-.33"));
    });

});

describe('isAlphabet', () => {

    it('undefined', () => {
       chai.assert.equal(true, HtmlTsValidateText.isAlphabet(undefined));
    });

    it('', () => {
       chai.assert.equal(true, HtmlTsValidateText.isAlphabet(""));
    });

    it('aaa', () => {
       chai.assert.equal(true, HtmlTsValidateText.isAlphabet("aaa"));
    });

    it('AAA', () => {
        chai.assert.equal(true, HtmlTsValidateText.isAlphabet("AAA"));
    });

    it('aAa', () => {
       chai.assert.equal(true, HtmlTsValidateText.isAlphabet("aAa"));
    });

    it('aAa0', () => {
       chai.assert.equal(false, HtmlTsValidateText.isAlphabet("aAa0"));
    });

    it('aAa0 ', () => {
       chai.assert.equal(false, HtmlTsValidateText.isAlphabet("aAa0 "));
    });

    it('aAa0あ', () => {
       chai.assert.equal(false, HtmlTsValidateText.isAlphabet("aAa0あ"));
    });

});

describe('isAlphabetUppercase', () => {

    it('undefined', () => {
        chai.assert.equal(true, HtmlTsValidateText.isAlphabetUppercase(undefined));
    });

    it('', () => {
        chai.assert.equal(true, HtmlTsValidateText.isAlphabetUppercase(""));
    });

    it('aaa', () => {
        chai.assert.equal(false, HtmlTsValidateText.isAlphabetUppercase("aaa"));
    });

    it('AAA', () => {
        chai.assert.equal(true, HtmlTsValidateText.isAlphabetUppercase("AAA"));
    });

    it('aAa', () => {
        chai.assert.equal(false, HtmlTsValidateText.isAlphabetUppercase("aAa"));
    });

    it('aAa0', () => {
        chai.assert.equal(false, HtmlTsValidateText.isAlphabetUppercase("aAa0"));
    });

    it('aAa0 ', () => {
        chai.assert.equal(false, HtmlTsValidateText.isAlphabetUppercase("aAa0 "));
    });

    it('aAa0あ', () => {
        chai.assert.equal(false, HtmlTsValidateText.isAlphabetUppercase("aAa0あ"));
    });

});

describe('isAlphabetLowercase', () => {

    it('undefined', () => {
        chai.assert.equal(true, HtmlTsValidateText.isAlphabetLowercase(undefined));
    });

    it('', () => {
        chai.assert.equal(true, HtmlTsValidateText.isAlphabetLowercase(""));
    });

    it('aaa', () => {
        chai.assert.equal(true, HtmlTsValidateText.isAlphabetLowercase("aaa"));
    });

    it('AAA', () => {
        chai.assert.equal(false, HtmlTsValidateText.isAlphabetLowercase("AAA"));
    });

    it('aAa', () => {
        chai.assert.equal(false, HtmlTsValidateText.isAlphabetLowercase("aAa"));
    });

    it('aaa0', () => {
        chai.assert.equal(false, HtmlTsValidateText.isAlphabetLowercase("aaa0"));
    });

    it('aaa0 ', () => {
        chai.assert.equal(false, HtmlTsValidateText.isAlphabetLowercase("aaa "));
    });

    it('aaa0あ', () => {
        chai.assert.equal(false, HtmlTsValidateText.isAlphabetLowercase("aaa0あ"));
    });

});
