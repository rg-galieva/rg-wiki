/*
LEETCODE

Given an array of integers, return indices of the two numbers such that
they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.
*/

const twoSum = function (nums, target) {
    const numsMap = {};

    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        const second = target - first;

        if (numsMap[second] !== undefined) {
            return [numsMap[second], i]
        } else {
            numsMap[first] = i;
        }
    }
};