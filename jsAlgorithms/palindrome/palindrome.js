const palindrome1 = str => str === str.split('').reverse().join('');

const palindrome = str => !str.split('').find((char, index) => char !== str[str.length - 1 - index]);

module.exports = palindrome;