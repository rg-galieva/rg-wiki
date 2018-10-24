const maximumSubarray = require('./maximumSubarray');

test('function is defined', () => {
    expect(typeof maximumSubarray).toEqual('function');
});

test('Mixed array 1', () => {
    expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});

test('Mixed array 2', () => {
    expect(maximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual(7);
});

test('Array with 0 only', () => {
    expect(maximumSubarray([0, 0, 0])).toEqual(0);
});

test('Negative only', () => {
    expect(maximumSubarray([-1, -2, -5, -2])).toEqual(-1);
});