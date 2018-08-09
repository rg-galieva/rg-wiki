// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// alternative to js repeat
function createString(symbol, numberOfChars) {
    const intialArray = new Array(numberOfChars + 1);
    return intialArray.join(symbol);
}

function steps(n) {
    for (let i = 1; i <= n; i++) {
        const steps = '#'.repeat(i);
        const emptySteps = ' '.repeat(n - i);
        console.log(steps + emptySteps)
    }
}

module.exports = steps;