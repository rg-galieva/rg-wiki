// --- Directions
//  Shorten a string of repeated letters (dddbbbaa) into numerical format (3d3b2a).
//  Write function to reverse this process

function reverseRepeatableChars(inputString) {
    let result = '';

    for (let i = 0; i < inputString.length; i = i + 2) {
        result += inputString[i + 1].repeat(parseInt(inputString[i]));
    }

    return result;
}

module.exports = reverseRepeatableChars;
