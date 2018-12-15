function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}

	const midPoint = Math.floor(arr.length / 2);
	const left = arr.slice(0, midPoint);
	const right = arr.slice(midPoint);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return [...result, ...left, ...right];
}

module.exports = {mergeSort, merge};
