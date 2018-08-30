const isomorphic = require('./isomorphic');

test('Converter function is defined', () => {
    expect(typeof isomorphic).toEqual('function');
});

test('Checks basic case', () => {
    expect(isomorphic('paper', 'title')).toBeTruthy();
});

test('Converts correctly string to integers', () => {
    expect(isomorphic('dgggg', 'adddd')).toBeTruthy();
});

test('Converts correctly string to integers', () => {
    expect(isomorphic('egg', 'sad')).toBeFalsy();
});

