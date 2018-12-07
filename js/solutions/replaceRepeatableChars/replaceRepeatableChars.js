// Write a program to encrypt a given string. eg : aaaffdeeaabbbb to a3f2d1e2a2b4

function replaceRepeatableChars(s) {
	const chars = s.split('');
	let curChar = null;
	let count = 0;

	let result = '';

	for (let char of chars) {
		if (curChar === char) {
			count++;
		} else {

			if (count > 0) {
				result += `${count}${curChar}`;
			}

			curChar = char;
			count = 1;
		}
	}

	if (count > 0) {
		result += `${count}${curChar}`;
	}

	return result;
}


module.exports = replaceRepeatableChars;
