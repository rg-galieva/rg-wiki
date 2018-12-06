function memoizer(fn) {

}

function fib(n) {
    if (n < 2) {
        return n;
    }

    return cachedFib(n - 1) + cachedFib(n - 2)
}

const cachedFib = memoizer(fib);
