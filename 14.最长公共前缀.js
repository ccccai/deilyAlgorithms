/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (39.31%)
 * Likes:    1550
 * Dislikes: 0
 * Total Accepted:    489.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 0 
 * strs[i] 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
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
// @lc code=end

