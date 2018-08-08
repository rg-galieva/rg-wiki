var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        const sum = numbers[i] + numbers[j];

        if (sum === target) {
            return [i+1, j+1]
        } else if (sum < target) {
            i++
        } else {
            j--;
        }
    }
};

console.log("[Client debug] ", twoSum([2, 7, 11, 15], 9))
console.log("[Client debug] ", twoSum([2, 3, 4], 6))
console.log("[Client debug] ", twoSum([-1, 0], -1))
console.log("[Client debug] ", twoSum([0, 0, 3, 4], 0))
console.log("[Client debug] ", twoSum([-3, 3, 4, 90], 0))