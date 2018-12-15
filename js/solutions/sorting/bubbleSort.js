function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {

		for (let j = 0; j < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j + 1]) {
				let temp1 = arr[j];
				let temp2 = arr[j + 1];

				arr[j] = temp2;
				arr[j + 1] = temp1;
			}
		}
	}

	return arr;
}

module.exports = bubbleSort
