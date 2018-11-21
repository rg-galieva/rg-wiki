const interconvert = require('./interconvertStringAndInteger');

test('Interconvert function is defined', () => {
    expect(typeof interconvert).toEqual('function');
});

test('Converts correctly string to integers', () => {
    expect(interconvert("198")).toEqual(198);
});

test('Converts correctly negative value: string to integers', () => {
    expect(interconvert("-549")).toEqual(-549);
});

test('Converts correctly integers to string', () => {
    expect(interconvert(123)).toEqual("123");
});

test('Converts correctly integers to string', () => {
    expect(interconvert(3650)).toEqual("3650");
});

test('Converts correctly integers to string', () => {
    expect(interconvert(-3650)).toEqual("-3650");
});

