/**
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
 * You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
 * Return the answer with the smaller index first.
 * 
 * Example 1:
 * Input: 
 * nums = [3,4,5,6], target = 7
 * Output: [0,1]
 * 
 * Example 2:
 * Input: nums = [4,5,6], target = 10
 * Output: [0,2]
 * 
 * Example 3:
 * Input: nums = [5,5], target = 10
 * Output: [0,1]
 * 
 * Constraints:
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 */
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * Time Complexity => O(n^2)
     * Space Complexity => O(n)
     */

    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j]
                }
            }
        }
    }
}