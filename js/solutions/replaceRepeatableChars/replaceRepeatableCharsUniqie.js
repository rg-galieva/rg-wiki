// --- Directions
//  Shorten a string of repeated letters (dddbbbaa) into numerical format (3d3b2a).
//  Write function to reverse this process

function replaceRepeatableCharsUniqie(inputString) {
    const sortedInputMap = inputString.split('').reduce((sortedInputMapTemp, char) => {
        sortedInputMapTemp[char] = sortedInputMapTemp[char] + 1 || 1;
        return sortedInputMapTemp;
    }, {});

    let result = '';

    for (let char in sortedInputMap) {
        result += sortedInputMap[char] + char;
    }

    return result;
}

module.exports = replaceRepeatableCharsUniqie;
