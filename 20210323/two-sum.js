/*
 * @Author: caishiyin
 * @Date: 2021-03-23 11:08:54
 * @LastEditTime: 2021-03-24 17:51:55
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: \dailyAlgorithms\20210323\two-sum.js
 */
const twoSum1 = (nums, target) => {
  let result = [];
  nums.some((item, index) => {
    for (let i = index + 1; i < nums.length; i++) {
      if (item + nums[i] === target) {
        result = [index, i];
      }
    }
    return result.length;
  });
  return result;
};

const twoSum2 = (nums, target) => {
  const currNums = {};
  let res;
  let differ;
  nums.forEach((item, index) => {
    differ = target - item;
    if (currNums[differ] !== undefined) {
      res = [currNums[differ], index];
    } else {
      currNums[item] = index;
    }
  });
  return res;
};

console.log("result", twoSum1([3, 2, 4], 6));
console.log("result2", twoSum2([3, 2, 4], 6));
