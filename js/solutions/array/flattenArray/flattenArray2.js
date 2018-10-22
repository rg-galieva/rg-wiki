// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

function flattenArray(arr) {
    return arr.reduce((acc, cur) => {
        return Array.isArray(cur) ? acc.concat(flattenArray(cur)) : acc.concat(cur)
    }, [])
}

function flattenArrayWithStack(arr) {
    const stack = [...arr];
    const res = [];

    while (stack.length) {
        const next = stack.pop();

        if (Array.isArray(next)) {
            stack.push(...next)
        } else {
            res.push(next)
        }
    }

    return res.reverse();
}

module.exports = {flattenArray, flattenArrayWithStack}