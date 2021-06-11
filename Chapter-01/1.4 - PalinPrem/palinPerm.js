/**
 * Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations: "taco cat". "atco cta". etc.)
*/

var palinPerm = function(string) {
    // create object literal to store charcount
    var char = {};
    var currChar;
    var mulligan = false;
    var isPerm = true;
    // pump characters in, spaces not counted, all lowercase
    string.split('').forEach((char) => {
        if(char !== ' ') {
            currChar = char.toLowerCase();
            if (chars[currChar] === undefined) {
                chars[currChar] = 0
            } else {
                chars[currChar]++;
            }
        }
    });
    // check that all chars are even count, except for one exception
    Object.keys(chars).forEach((char) => {
        if(chars[char] % 2 > 0) {
            // if more than one exception, return false
            if(mulligan) {
                isPerm = false; // return is a forEach statement doesn't flow out of function scope
            } else {
                mulligan = true;
            }
        }
    });

    return isPerm;
};

/* TESTS */
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');