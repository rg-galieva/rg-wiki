const replaceRepeatableChars = require('./replaceRepeatableChars');

test('replaceRepeatableChars function is defined', () => {
	expect(replaceRepeatableChars).toBeDefined();
});

test('a', () => {
	expect(replaceRepeatableChars('a')).toEqual('1a');
});

test('dddbbbaa', () => {
	expect(replaceRepeatableChars('dddbbbaa')).toEqual('3d3b2a');
});

test('aaabbbcccc', () => {
	expect(replaceRepeatableChars('aaabbbcccc')).toEqual('3a3b4c');
});

test('aaabbbaacccc', () => {
	expect(replaceRepeatableChars('aaabbbaacccc')).toEqual('3a3b2a4c');
});

test('aaaffdeeaabbbb', () => {
	expect(replaceRepeatableChars('aaaffdeeaabbbb')).toEqual('3a2f1d2e2a4b');
});
