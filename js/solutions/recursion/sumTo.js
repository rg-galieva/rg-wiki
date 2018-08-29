const sumToWithRecursion = n => {
    if (n < 1) return n;
    return n + sumToWithRecursion(n-1)
};
console.log("[sumToWithRecursion] ", sumToWithRecursion(100));

const sumToWithCycle = n => {
    let sum = 0;

    for (let i = n; i > 0; i--) {
        sum = sum + i;
    }

    return sum;
};
console.log("[sumToWithCycle] ", sumToWithCycle(100));


// a(n) = (a(1)+ a(n))/2 *

const sumToWithFormula = n => (1 + n) / 2 * n;
console.log("[sumToWithFormula] ", sumToWithFormula(100));