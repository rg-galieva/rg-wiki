/*
n! = n * (n - 1) * (n - 2) * ...* 1

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
*/

const factorial = n => {
    if (n < 2) return n;
    return n * factorial(--n);
}

console.log("factorial(2): ", factorial(2))
console.log("factorial(5): ", factorial(5))