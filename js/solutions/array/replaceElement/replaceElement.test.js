const replaceElement = require('./replaceElement');

test('function is defined', () => {
    expect(typeof replaceElement).toEqual('function');
});

describe('replaceElement', () => {
    test('First index', () => {
        expect(replaceElement([-2, 1, -3], -2, 100)).toEqual([100, 1, -3]);
    });

    test('Basic', () => {
        expect(replaceElement([1, 5, -3], 5, 200)).toEqual([1, 200, -3]);
    });

    test('Not present element', () => {
        expect(replaceElement([1, 5, -3], 8, 200)).toEqual([1, 5, -3]);
    });

    test('Replace with object', () => {
        expect(replaceElement([1, 5, -3], 1, {200: 'test'})).toEqual([{200: 'test'}, 5, -3]);
    });
})