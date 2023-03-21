// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  /*
  input:    number n--modulo base
            number m--modulus
  returns:  n % m--works for negative numbers
  */
  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  /*
  input:    string input--message to be encoded or decoded
            string shift--the amount to shift letters by (decoding reverses direction)
            boolean encode?--whether to encode or decode
  returns:  message encoded/decoded according to the caesar cypher
  */
  function caesar(input, shift, encode = true) {
    // ERROR HANDLING
    if(shift === 0 || shift < -25 || shift > 25) return false;

    // SETUP
    if(!encode) shift *= -1;
    input = input.toLowerCase();
    let output = "";
    const a = "a".charCodeAt(0);

    // CYPHER
    for(let i = 0; i < input.length; i++) {
      let newChar = (input.charCodeAt(i) - a);
      if(newChar >= 0 && newChar < 26) {
        newChar += shift;
        newChar = mod(newChar, 26);
      }
      output += String.fromCharCode(newChar + a);
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
