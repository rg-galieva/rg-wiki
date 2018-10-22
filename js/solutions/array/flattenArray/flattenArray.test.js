const {flattenArray, flattenArrayWithStack, flattenArrayWithQueue} = require('./flattenArray');

describe('flattenArray', () => {
    test('function is defined', () => {
        expect(typeof flattenArray).toEqual('function');
    });

    test('calculates correct 1 level deep', () => {
        expect(flattenArray([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
    });

    test('calculates correct 2 level deep', () => {
        expect(flattenArray([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]])).toEqual([1, 2, 3, 1, 2, 3, 4, 2, 3, 4]);
    });

    test('calculates correct 3 level deep', () => {
        expect(flattenArray([1, [4, 5, [6, 7, [8]]]])).toEqual([1, 4, 5, 6, 7, 8]);
    });
});

describe('flattenArrayWithStack', () => {
    test('function is defined', () => {
        expect(typeof flattenArrayWithStack).toEqual('function');
    });

    test('calculates correct 1 level deep', () => {
        expect(flattenArrayWithStack([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
    });

    test('calculates correct 2 level deep', () => {
        expect(flattenArrayWithStack([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]])).toEqual([1, 2, 3, 1, 2, 3, 4, 2, 3, 4]);
    });

    test('calculates correct 3 level deep', () => {
        expect(flattenArrayWithStack([1, [4, 5, [6, 7, [8]]]])).toEqual([1, 4, 5, 6, 7, 8]);
    });
});

describe('flattenArrayWithQueue', () => {
    test('function is defined', () => {
        expect(typeof flattenArrayWithQueue).toEqual('function');
    });

    test('calculates correct 1 level deep', () => {
        expect(flattenArrayWithQueue([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
    });

    test('calculates correct 2 level deep', () => {
        expect(flattenArrayWithQueue([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]])).toEqual([1, 2, 3, 1, 2, 3, 4, 2, 3, 4]);
    });

    test('calculates correct 3 level deep', () => {
        expect(flattenArrayWithQueue([1, [4, 5, [6, 7, [8]]]])).toEqual([1, 4, 5, 6, 7, 8]);
    });
});
