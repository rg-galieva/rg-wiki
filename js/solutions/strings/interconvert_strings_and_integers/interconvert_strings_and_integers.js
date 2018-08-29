/*
"314" => 314
"-314" => -314
314 => "314"
parseInt or toString are forbidden to use
*/

function convertStringToIntegers(input) {
    const inputList = input.split('');
    let result = 0;
    let prefix = 1;

    if (inputList[0] === '-') {
        prefix = -1;
        inputList.shift();
    }

    for (let i = 1; i <= inputList.length; i++) {
        result += (10 ** (inputList.length - i)) * inputList[i - 1];
    }

    return result * prefix;
}


function convertIntegersToString(input) {
    let result = [];
    let tempInput = Math.abs(input);

    while (tempInput > 0) {
        const lastDigit = tempInput % 10;
        result.unshift(lastDigit);
        tempInput = (tempInput - lastDigit) / 10;
    }

    if (input < 0) {
        result.unshift('-');
    }

    return result.join('');
}

function interconvert(input) {
    if (typeof input === 'string') {
        return convertStringToIntegers(input);
    }

    if (typeof input === 'number') {
        return convertIntegersToString(input);
    }
}

module.exports = interconvert;