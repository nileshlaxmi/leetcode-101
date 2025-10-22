/**
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
/*
 * Space Complexity => O(n^2)
 * Time Complexity => O(1)
*/
var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true
            }
        }
    }
    return false
};

/**
 * Time Complexity => O(n log n)
 * Space Complexity => O(1)
 */
var containsDuplicateSecondSolution = function (nums) {
    nums = nums.sort((a, b) => a - b)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            return true
        }

    }
    return false
};

/**
 * Time Complexity => O(n)
 * Space Complexity => O(n)
 */
var containsDuplicateOptimalSolution = function (nums) {
    const seen = new Set()
    for (const i of nums) {
        if (seen.has(i)) return true
        seen.add(i)
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))