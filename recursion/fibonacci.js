// Fn = Fn-1 + Fn-2
/*
0 = a
1 = b
1 = c = a + b
2 
3
5
8
13
*/

const fibWithCycle = n => {
        let a = 0;
        let b = 1;
        let c = a + b;

        for (let i=2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }

        return c;
};

console.log("fibWithCycle(3)", fibWithCycle(3))
console.log("fibWithCycle(7)", fibWithCycle(7))
console.log("fibWithCycle(7)", fibWithCycle(8))
console.log("fibWithCycle(77)", fibWithCycle(77))


const fibWithRecursion = (n, a = 0, b = 1, fibList = [0, 1]) => {
    if (n) {
        fibList.push(a + b);
        return fibWithRecursion(n-1, b, a + b, fibList);
    }
    return {
        a,
        fibList,
    }
}

console.log("fibWithRecursion(3)", fibWithRecursion(3))
console.log("fibWithRecursion(7)", fibWithRecursion(7))
// console.log("fibWithRecursion(77)", fibWithRecursion(77))


function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

console.log("[Client debug] ", fib(7))