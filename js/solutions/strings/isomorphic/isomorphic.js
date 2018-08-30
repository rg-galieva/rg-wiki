/*
For two strings to be isomorphic, all occurrences of a character
in string A can be replaced with another character
to get string B. The order of the characters must be preserved.
There must be one-to-one mapping for every char of
string A to every char of string B.

`paper` and `title` would return true.
`egg` and `sad` would return false.
`dgg` and `add` would return true.
 */


function isomorphic(firstString, secondString) {
    if (firstString.length !== secondString.length) return false;

    const letterMap = {};

    for (let i = 0; i < firstString.length; i++) {
        const letterA = firstString[i];
        const letterB = secondString[i];

        // If the letter does not exist, create a map and map it to the value
        // of the second letter
        if (!letterMap[letterA]) {
            letterMap[letterA] = letterB;
        } else if (letterMap[letterA] !== letterB) {
            return false;
        }
    }

    return true;
}


module.exports = isomorphic;