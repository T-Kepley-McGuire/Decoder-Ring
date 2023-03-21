// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  /*
  input:    string input--message to be encoded or decoded
            boolean encode?--whether to encode or decode
  returns:  message encoded/decoded according to the polybius cypher
  */
  function polybius(input, encode = true) {
    // ERROR HANDLING
    if(!encode && input.replace(' ', '').length%2 != 0) return false;

    // SETUP
    let output = "";
    input = input.toLowerCase();

    const a = "a".charCodeAt(0);

    // CYPHER
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") output += " ";
      else {
        if (encode) {
          let l = input.charCodeAt(i) - a;
          if (l > 8) l--;
          output += 1 + (l % 5);
          output += 1 + (l - (l % 5)) / 5;
        } else {
          const c = input[i] - 1;
          const r = input[i+1] - 1;

          let position = (r * 5) + c;
          if(position > 8) position++;
          let letter = String.fromCharCode(a + position);
          if(position === 8) letter = "(i/j)";
          
          output += letter;

          i++;
        }
      }
    }

    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
