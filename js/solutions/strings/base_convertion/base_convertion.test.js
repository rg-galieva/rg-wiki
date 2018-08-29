const converter = require('./base_convertion');

test('Converter function is defined', () => {
    expect(typeof converter).toEqual('function');
});

test('Converts correctly string to integers', () => {
    expect(converter(615, 7, 13)).toEqual('1a7');
});

test('Converts correctly string to integers', () => {
    expect(converter(440, 5, 8)).toEqual('170');
});

test('Converts correctly string to integers', () => {
    expect(converter('E164', 16, 8)).toEqual('160544');
});