const lengthOfLongestSubstring = require('./longestSubstring');

test('lengthOfLongestSubstring function is defined', () => {
    expect(typeof lengthOfLongestSubstring).toEqual('function');
});

test('babad' , () => {
    expect(lengthOfLongestSubstring('babad')).toEqual(3);
});

test('cbbd' , () => {
    expect(lengthOfLongestSubstring('cbbd')).toEqual(2);
});

test("abcabcbb" , () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
});
