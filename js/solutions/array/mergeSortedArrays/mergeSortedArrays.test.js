const mergeSortedArrays = require('./mergeSortedArrays');

test('function is defined', () => {
	expect(typeof mergeSortedArrays).toEqual('function');
});

test('[1, 3, 5], [2, 4, 9]', () => {
	expect(mergeSortedArrays([1, 3, 5], [2, 4, 9])).toEqual([1, 2, 3, 4, 5, 9]);
});

test('[1, 3, 5], []', () => {
	expect(mergeSortedArrays([1, 3, 5], [])).toEqual([1, 3, 5]);
});

test('[], [2, 4, 9]', () => {
	expect(mergeSortedArrays([], [2, 4, 9])).toEqual([2, 4, 9]);
});
