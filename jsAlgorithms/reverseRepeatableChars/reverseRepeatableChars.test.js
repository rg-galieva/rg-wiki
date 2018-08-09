const reverseRepeatableChars = require('./reverseRepeatableChars');

test('replaceRepeatableChars function is defined', () => {
    expect(reverseRepeatableChars).toBeDefined();
});

test('Replaces chars with number + char', () => {
    expect(reverseRepeatableChars('1a')).toEqual('a');
    expect(reverseRepeatableChars('3d3b2a')).toEqual('dddbbbaa');
    expect(reverseRepeatableChars('3a3b4c')).toEqual('aaabbbcccc');
});
