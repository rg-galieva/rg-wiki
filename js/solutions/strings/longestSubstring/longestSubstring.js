/*
LEETCODE: https://leetcode.com/problems/longest-substring-without-repeating-characters/
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

const lengthOfLongestSubstring = function (s) {
	if (!s || s.length < 1) return 0;

	let longestSubstringLength = 1;

	for (let i = 0; i < s.length; i++) {
		let tempLongestLength = getLongestSubstringLength(s, i);

		if (longestSubstringLength < tempLongestLength) {
			longestSubstringLength = tempLongestLength;
		}
	}

	return longestSubstringLength;
};

function getLongestSubstringLength(input, startIndex) {
	let curIndex = startIndex;
	let uniqueChars = {};

	while (curIndex >= 0 && curIndex < input.length && !uniqueChars[input.charAt(curIndex)]) {
		uniqueChars[input.charAt(curIndex)] = 1;
		curIndex++;
	}

	return curIndex - startIndex;
}

module.exports = lengthOfLongestSubstring;
