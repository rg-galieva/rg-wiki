const mostFrequentChar = require('./mostFrequentChar');

test('mostFrequentChar function exists', () => {
    expect(typeof mostFrequentChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
    expect(mostFrequentChar('a')).toEqual('a');
    expect(mostFrequentChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
    expect(mostFrequentChar('ab1c1d1e1f1g1')).toEqual('1');
});
