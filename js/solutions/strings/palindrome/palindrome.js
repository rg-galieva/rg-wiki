// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


/*
 * If case sensitivity should be taken into account and whitespaces are allowed:
 * const formattedStr = str.replace(/\s/g, '').toLowerCase();
 */

const palindrome1 = str => str === str.split('').reverse().join('');

const palindrome = str => !str.split('').find((char, index) => char !== str[str.length - 1 - index]);

module.exports = palindrome;