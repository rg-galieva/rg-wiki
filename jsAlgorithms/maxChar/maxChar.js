// Given a string, return the character that is most
// commonly used in the string.

function maxChar(str) {
    let maxFrequency = 0;
    let maxValue;

    const maxCharMap = str.split('').reduce((maxCharMapTemp, char) => {
        maxCharMapTemp[char] = maxCharMapTemp[char] + 1 || 1;
        return maxCharMapTemp;
    }, {});

    for (let char in maxCharMap) {
        if (maxCharMap[char] > maxFrequency) {
            maxFrequency = maxCharMap[char];
            maxValue = char;
        }
    }

    return maxValue;
}

module.exports = maxChar;
