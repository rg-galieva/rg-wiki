const balanced_parentheses = require('./balanced_parentheses');

test('balanced_parentheses function is defined', () => {
    expect(typeof balanced_parentheses).toEqual('function');
});

test('balanced_parentheses: Basic check 1', () => {
    expect(balanced_parentheses('{{}}{}{}')).toBeTruthy();
});

test('balanced_parentheses: Basic check 1', () => {
    expect(balanced_parentheses('{}')).toBeTruthy();
});

test('balanced_parentheses: Basic check 1', () => {
    expect(balanced_parentheses('{}{{}')).toBeFalsy();
});

test('balanced_parentheses: Basic check 1', () => {
    expect(balanced_parentheses('{{')).toBeFalsy();
});


