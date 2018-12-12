function mergeSortedArrays(array1, array2) {
	const result = [];

	while (array1.length && array2.length) {
		if (array1[0] < array2[0]) {
			result.push(array1.shift())
		} else {
			result.push(array2.shift())
		}
	}

	return [...result, ...array1, ...array2]
}

module.exports = mergeSortedArrays;
