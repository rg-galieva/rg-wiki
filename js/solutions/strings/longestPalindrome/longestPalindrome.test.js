const palindrome = require('./longestPalindrome');

test('palindrome function is defined', () => {
    expect(typeof palindrome).toEqual('function');
});

test('babad' , () => {
    expect(palindrome('babad')).toBeEqual('bab');
});

test('cbbd' , () => {
    expect(palindrome('cbbd')).toBeEqual('bb');
});
