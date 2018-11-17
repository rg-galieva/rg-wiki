/*
LEETCODE:
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

function longestPalindrome(input) {
	if (!input || input.length <= 1) {
		return input
	}

	let longest = input.slice(0, 1);

	for (let i = 0; i < input.length; i++) {
		let temp1 = expandAroundCenter(input, i, i);
		let temp2 = expandAroundCenter(input, i, i + 1); // because center can be in between letters

		let tempLongest = temp1.length >= temp2.length ? temp1 : temp2;

		if (longest.length <= tempLongest.length) {
			longest = tempLongest;
		}
	}

	return longest;
}

function expandAroundCenter(input, left, right) {
	let leftIndex = left;
	let rightIndex = right;

	while (leftIndex >= 0 && rightIndex < input.length && input.charAt(leftIndex) === input.charAt(rightIndex)) {
		leftIndex--;
		rightIndex++;
	}

	return input.slice(leftIndex + 1, rightIndex);
}

module.exports = longestPalindrome;
