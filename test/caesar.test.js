// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("function should exist", () => {
        expect(caesar).to.not.be.undefined;
    });
    it("should return input shifted by shift characters", () => {
        const expected = "cdefg"
        const actual = caesar("abcde", 2);

        expect(actual).to.equal(expected);
    });
    it("should not modify any characters except alphabetical", () => {
        const expected = "bcd\nefg hij\tklm_nop`qrs-tuv5wxyz!";
        const actual = caesar("abc\ndef ghi\tjkl_mno`pqr-stu5vwxy!", 1);

        expect(actual).to.equal(expected);
    });
    it("should decode a message by reversing cypher when encode is set to false", () => {
        const expected = "abcdef";
        const actual = caesar("bcdefg", 1, false);

        expect(actual).to.equal(expected);
    });
});


