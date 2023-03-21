// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("function should exist", () => {
        expect(substitution).to.not.be.undefined;
    });
    it("should encode a message with the substitution cypher", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");

        expect(actual).to.equal(expected);
    });
    it("should leave spaces and other unique characters untouched", () => {
        const expected = "elp xhm_xf3mbymwwmfj#dne";
        const actual = substitution("You are_an3excellent#spy", "xoyqmcgrukswaflnthdjpzibev");

        expect(actual).to.equal(expected);
    });
    it("should return false if alphabet does not exist", () => {
        const actual = substitution("translate this nerd");
        expect(actual).to.be.false;
    });
    it("should return false if alphabet is not exactly 26 characters long", () => {
        const actual = substitution("Hello", "getWrecked");
        expect(actual).to.be.false;
    });
    it("should return false if alphabet contains repeat characters", () => {
        const actual = substitution("Hello", "abcabcabcabcabcabcabcabcyz");

        expect(actual).to.be.false;
    });
    it("should decode a message with given substitution alphabet and encode = false", () => {
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);

        expect(actual).to.equal(expected);
    });
});