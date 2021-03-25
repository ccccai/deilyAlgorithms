/*
 * @Author: caishiyin
 * @Date: 2021-03-25 10:19:36
 * @LastEditTime: 2021-03-25 14:06:44
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: \dailyAlgorithms\20210325\longest-common-prefix.js
 */

const longestCommonPrefix = (strs) => {
  if (strs.length <= 1) {
    return strs.length > 0 ? strs[0] : ''
  }
  let result = ''
  const str = strs.reduce((res, next) => res.length > next ? next : res) // 找出最短字符串

  for (let i = 1; i <= str.length; i++) {
    if (strs.some(item => !(item.substring(0, i) === str.substring(0, i)))) {
      result = str.substring(0, i - 1)
      break;
    } else {
      result = str // 
    }
  }

  return result
}

console.log('common', longestCommonPrefix(["flight", "flow", "flower"]))