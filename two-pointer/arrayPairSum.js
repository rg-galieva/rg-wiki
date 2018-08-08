var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);

    let i = 0;
    let j = nums.length - 1;
    let sum = 0;

    while (i < j) {
        if ((i + 2) < j) {
            sum = sum + Math.min(nums[i], nums[i + 1]) + Math.min(nums[j], nums[j - 1]);
            i = i + 2;
            j = j - 2;
        } else {
            sum = sum + Math.min(nums[i], nums[i + 1]);
            break;
        }
    }

    return sum;
};

console.log("[Client debug] ", arrayPairSum([1, 4, 3, 2]))
console.log("[Client debug] ", arrayPairSum([1, 1]))
console.log("[Client debug] ", arrayPairSum([7, 3, 1, 0, 0, 6]))
console.log("[Client debug] ", arrayPairSum([-470, 66, -4835, -5623]))