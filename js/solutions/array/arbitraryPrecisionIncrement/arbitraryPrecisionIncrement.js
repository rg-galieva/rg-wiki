function addOne(list) {
	const listLength = list.length - 1;

	let result = [...list];
	result[listLength] = result[listLength] + 1;

	if (result[listLength] < 10) return result;
	let carry = 1;

	for (let i = listLength; i >= 0; i--) {
		let sum = list[i] + carry;

		if (sum >= 10) {
			carry = 1;
			result[i] = sum % 10;
		} else {
			result[i] = sum;
			carry = 0;
		}
	}

	return result;
}

module.exports = addOne;
