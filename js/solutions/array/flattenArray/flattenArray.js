// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

function flattenArray(arr) {
	return arr.reduce((acc, cur) => {
		return Array.isArray(cur) ?
			acc.concat(flattenArray(cur)) :
			acc.concat(cur)
	}, [])
}


function flattenArrayWithStack(arr) {
	const stack = [...arr];
	let result = [];

	while (stack.length) {
		const cur = stack.pop();
		if (Array.isArray(cur)) {
			stack.push(...cur)
		} else {
			result.unshift(cur)
		}
	}

	return result;
}

function flattenArrayWithQueue(arr) {
	const queue = [...arr];
	const res = [];

	while (queue.length) {
		const next = queue.shift();

		if (Array.isArray(next)) {
			queue.push(...next)
		} else {
			res.push(next)
		}
	}

	return res;
}

module.exports = {flattenArray, flattenArrayWithStack, flattenArrayWithQueue}
