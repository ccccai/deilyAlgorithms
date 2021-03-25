/*
 * @Author: caishiyin
 * @Date: 2021-03-25 10:19:36
 * @LastEditTime: 2021-03-25 14:58:04
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: \dailyAlgorithms\20210325\longest-common-prefix.js
 */

const longestCommonPrefix = (strs) => {
  if (strs.length <= 1) {
    return strs.length > 0 ? strs[0] : ''
  }
  let result = ''
  const str = strs.reduce((res, next) => res.length > next ? next : res, '') // 找出最短字符串

  for (let i = 1; i <= str.length; i++) {
    // 遍历最短字符串，看到哪个字符为止就有差异
    if (strs.some(item => !(item.substring(0, i) === str.substring(0, i)))) {
      result = str.substring(0, i - 1)
      break;
    } else {
      result = str // 全部一致
    }
  }

  return result
}

console.log('common', longestCommonPrefix(["flight", "flow", "flower"]))