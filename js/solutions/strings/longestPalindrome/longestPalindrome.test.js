const palindrome = require('./longestPalindrome.repeat');

test('palindrome function is defined', () => {
    expect(typeof palindrome).toEqual('function');
});

test('babad' , () => {
    expect(palindrome('babad')).toEqual('bab');
});

test('cbbd' , () => {
    expect(palindrome('cbbd')).toEqual('bb');
});

test('cbbd' , () => {
    expect(palindrome('cbavvabd')).toEqual('bavvab');
});
