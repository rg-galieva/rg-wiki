const isomorphic = require('./isomorphic');

test('isomorphic function is defined', () => {
    expect(typeof isomorphic).toEqual('function');
});

test('isomorphic: Basic check 1', () => {
    expect(isomorphic('paper', 'title')).toBeTruthy();
});

test('isomorphic: Basic check 2', () => {
    expect(isomorphic('dgggg', 'adddd')).toBeTruthy();
});

test('isomorphic: Basic check 3', () => {
    expect(isomorphic('egg', 'sad')).toBeFalsy();
});

