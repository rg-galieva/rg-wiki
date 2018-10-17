/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
*/

function twoSum(nums, target) {
    if (!nums && !nums.length) return [];

    const numsMap = {};

    for (let i = 0; i < nums.length; i++) {
       const firstArgument = nums[i];
       const secondArgument = target - firstArgument;

       if (numsMap[secondArgument] !== undefined) {
           return [numsMap[secondArgument], i]
       } else {
           numsMap[firstArgument] = i;
       }
    }

    return [];
}

const result = twoSum([2, 7, 11, 15], 9);

console.log("[Client debug] re", result);
console.log("[Client debug] re2", twoSum([3,2,4], 6));