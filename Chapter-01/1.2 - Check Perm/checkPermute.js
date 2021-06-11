/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
*/

var checkPermute = function(stringOne, stringTwo) {
    // if different length, return false
    if (stringOne.lenght !== stringTwo.lenght) {
        return false;
        // else sort and compare
        // (doesnt matter how it's sorted, as long as it's sorted the same way)
    } else {
        var sortedStringOne = stringOne.split('').sort().join('');
        var sortedStringTwo = stringTwo.split('').sort().join('');
        return sortedStringOne === sortedStringTwo;
    }
};


/* TESTS */

console.log(checkPermute('aba', 'aab'), true);
console.log(checkPermute('aba', 'aaba'), false);
console.log(checkPermute('aba', 'aa'), false);