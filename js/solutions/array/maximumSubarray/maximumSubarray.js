/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
*/

/*
Algorithm:
maxSumTotal = 0
maxSumCurrent = 0

iterate
maxSumCurrent = maxSumCurrent + curElement
if maxSumCurrent > maxSumTotal, maxSumTotal = maxSumCurrent
 */


function maxSubArray(nums) {
    let maxSumTotal = nums[0];
    let maxSumCurrent = nums[0];

    for (let curIndex = 1; curIndex < nums.length; curIndex++) {
        const tempSum = maxSumCurrent + nums[curIndex];
        maxSumCurrent = Math.max(nums[curIndex], tempSum);
        maxSumTotal = Math.max(maxSumTotal, maxSumCurrent);
    }

    return maxSumTotal
}

function maxSubArrayList(nums) {
    let maxSumTotal = nums[0];
    let maxSumCurrent = nums[0];
    let startIndex = 0;
    let endIndex = 0;

    for (let curIndex = 1; curIndex < nums.length; curIndex++) {
        const tempSum = maxSumCurrent + nums[curIndex];

        if (nums[curIndex] > tempSum) {
            maxSumCurrent = nums[curIndex];
            startIndex = curIndex;
        } else {
            maxSumCurrent = tempSum;
            endIndex = curIndex;
        }

        if (maxSumTotal < maxSumCurrent) {
            maxSumTotal = maxSumCurrent;
            endIndex = curIndex;
        }
    }

    return nums.slice(startIndex, endIndex)
}


module.exports = {maxSubArray, maxSubArrayList};