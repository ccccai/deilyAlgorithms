/*
 * @Author: caishiyin
 * @Date: 2021-04-07 15:14:16
 * @LastEditTime: 2021-04-07 15:33:27
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: \dailyAlgorithmsd:\leetcode\26.删除有序数组中的重复项.js
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 0
  nums.forEach((item, index) => {
    if (item < nums[index + 1]) {
      nums[count] = item
      nums[count + 1] = nums[index + 1]
      count++
    }
  })
  console.log('nums', nums)
  return count + 1
};

console.log(removeDuplicates([1, 1, 2]))
// @lc code=end

