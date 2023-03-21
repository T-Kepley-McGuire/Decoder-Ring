// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("function should exist", () => {
        expect(polybius).to.not.be.undefined;
    });
    it("should return input encoded into a polybius cypher", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");

        expect(actual).to.equal(expected);
    });
    it("should encode i and j as 42", () => {
        const expected = "4242";
        const actual = polybius("ij");

        expect(actual).to.equal(expected);
    });
    it("should leave spaces untouched in returned string", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello world");

        expect(actual).to.equal(expected);
    });
    it("should decode message properly when encode is false", () => {
        const expected = "thnkful";
        const actual = polybius("44323352125413", false);

        expect(actual).to.equal(expected);
    });
    it("should return false when decoding and input length is odd (ignoring spaces)", () => {
        const actual = polybius("121", false);

        expect(actual).to.be.false;
    });
});