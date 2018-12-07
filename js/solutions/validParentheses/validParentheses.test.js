const isValid = require('./validParentheses');

test('function is defined', () => {
	expect(typeof isValid).toBe('function');
});

test('[', () => {
	expect(isValid('[')).toBeFalsy()
});

test('[]', () => {
	expect(isValid('[]')).toBeTruthy();
});

test('([])', () => {
	expect(isValid('([])')).toBeTruthy()
});

test('([]}', () => {
	expect(isValid('([]}')).toBeFalsy()
});

test('{([])}', () => {
	expect(isValid('{([])}')).toBeTruthy();
});
