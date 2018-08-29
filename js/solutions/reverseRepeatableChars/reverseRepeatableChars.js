const str = '1234567';

const reversed = str.split('').reverse().join(''); /*?*/

function reverse(str) {
    let result = '';

    for (let char of str) {
        result = char + result
    }

    return result;
}

reverse(str) /*?*/