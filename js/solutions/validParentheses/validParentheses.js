/*
https://leetcode.com/problems/valid-parentheses/
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
 */


const parMap = {
	'{': '}',
	'[': ']',
	'(': ')'
};


function isValid (s) {
	const chars = s.replace(/\s/g, '').split('');
	const stack = [];

	for (let char of chars) {
		if (parMap[char]) {
			stack.push(char);
		} else {
			if (!stack.length) return false;

			const prev = stack.pop();
			if (parMap[prev] !== char) return false;
		}
	}

	return !stack.length;
};

module.exports = isValid;
