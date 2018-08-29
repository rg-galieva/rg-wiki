// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let numb = 1; numb <= n; numb++) {
        if (numb % 3 === 0 && numb % 5 === 0) {
            console.log("fizzbuzz");
        } else if (numb % 3 === 0) {
            console.log("fizz");
        } else if (numb % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(numb);
        }
    }
}

module.exports = fizzBuzz;
