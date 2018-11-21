/*
parseInt or toString are forbidden to use
"314" => 314
"-314" => -314
314 => "314"
*/

// 315 = (3 * 10**3) + (1 * 10**2) + 5 * (10**1)
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

/*
315 % 10 = 5 => add to result [5]
(315 - 5) / 10 = 31
31 % 10 = 1 => add to result [1, 5]
(31 - 1) / 10 = 3
3 % 10 = 3 => add to result [3, 1, 5]
(3 - 3) / 10 = 0 => break
 */
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