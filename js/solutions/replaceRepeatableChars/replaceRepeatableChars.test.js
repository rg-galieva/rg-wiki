const replaceRepeatableChars = require('./replaceRepeatableChars');

test('replaceRepeatableChars function is defined', () => {
    expect(replaceRepeatableChars).toBeDefined();
});

test('Replaces chars with number + char', () => {
    expect(replaceRepeatableChars('a')).toEqual('1a');
    expect(replaceRepeatableChars('dddbbbaa')).toEqual('3d3b2a');
    expect(replaceRepeatableChars('aaabbbcccc')).toEqual('3a3b4c');
});
