function memoizer(fn) {
    const cache = {};

    return function (...args) {
        if (cache[args]) {
            return cache[args]
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function fib(n) {
    if (n < 2) {
        return n;
    }

    return cachedFib(n - 1) + cachedFib(n - 2)
}

const cachedFib = memoizer(fib);
