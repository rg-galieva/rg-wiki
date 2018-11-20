// Given a string, return the character that is most
// commonly used in the string.

function mostFrequentChar(str) {
    const charMap = str.split('').reduce((charMapTemp, char) => {
        charMapTemp[char] = charMapTemp[char] + 1 || 1;
        return charMapTemp;
    }, {});

    let maxFrequency = 0;
    let maxFrequentChar = 0;

    for (let char in charMap) {
        if (maxFrequency < charMap[char]) {
            maxFrequency = charMap[char];
            maxFrequentChar = char;
        }
    }

    return maxFrequentChar;
}

module.exports = mostFrequentChar;
