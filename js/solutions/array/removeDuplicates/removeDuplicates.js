/* https://leetcode.com/problems/remove-duplicates-from-sorted-array/ */

function removeDuplicates (nums) {
	let lastIndex = 1;

	for (let i = 0; i < nums.length; i++) {
		if (nums[lastIndex - 1] !== nums[i]) {
			nums[lastIndex] = nums[i];
			lastIndex++;
		}
	}

	return nums.slice(0, lastIndex);
}

removeDuplicates([1, 1, 2, 2, 3, 4, 5, 5, 6]) /* ? */
