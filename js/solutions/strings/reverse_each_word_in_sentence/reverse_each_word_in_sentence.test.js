const reverse = require('./reverse_each_word_in_sentence');

test('function is defined', () => {
    expect(typeof reverse).toEqual('function');
});

test('Converts a sentence correctly', () => {
    expect(reverse("Welcome to this Javascript Guide!")).toEqual("emocleW ot siht tpircsavaJ !ediuG");
});

