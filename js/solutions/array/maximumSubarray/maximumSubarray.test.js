const {maxSubArray, maxSubArrayList} = require('./maximumSubarray');

test('function is defined', () => {
    expect(typeof maxSubArray).toEqual('function');
});

describe('maxSubArray', () => {
    test('Mixed array 1', () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
    });

    test('Mixed array 2', () => {
        expect(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual(7);
    });

    test('Array with 0 only', () => {
        expect(maxSubArray([0, 0, 0])).toEqual(0);
    });

    test('Negative only', () => {
        expect(maxSubArray([-1, -2, -5, -2])).toEqual(-1);
    });
})


describe('maxSubArrayList', () => {
    test('Mixed array 1', () => {
        expect(maxSubArrayList([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual([4, -1, 2, 1]);
    });

    test('Mixed array 2', () => {
        expect(maxSubArrayList([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual([4, -1, -2, 1, 5]);
    });

    test('Negative only', () => {
        expect(maxSubArrayList([-1, -2, -5, -2])).toEqual([-1]);
    });
})

