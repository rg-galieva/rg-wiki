const addOne = require('./arbitraryPrecisionIncrement');

test('function is defined', () => {
	expect(typeof addOne).toEqual('function');
});

describe('addOne', () => {
	test('[1, 0, 9]', () => {
		expect(addOne([1, 0, 0])).toEqual([1, 0, 1]);
	});

	test('[1, 0, 9]', () => {
		expect(addOne([1, 0, 9])).toEqual([1, 1, 0]);
	});

	test('[1, 9, 9]', () => {
		expect(addOne([1, 9, 9])).toEqual([2, 0, 0]);
	});
})
