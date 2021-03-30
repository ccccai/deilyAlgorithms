/*
 * @Author: caishiyin
 * @Date: 2021-03-30 23:49:33
 * @LastEditTime: 2021-03-31 00:02:02
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: /deilyAlgorithms/20210330/remove-duplicates-from-sorted-array.js
 */
const removeDuplicates = (nums) => {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums [i + 1]) {
      nums[count] = nums[i]
      count++;
    }
  }
  console.log('nums', nums)
  return count
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))