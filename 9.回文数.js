/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (58.64%)
 * Likes:    1452
 * Dislikes: 0
 * Total Accepted:    614.9K
 * Total Submissions: 1M
 * Testcase Example:  '121'
 *
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 121
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -121
 * 输出：false
 * 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 10
 * 输出：false
 * 解释：从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：x = -101
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 
 * 
 * 
 * 
 * 
 * 进阶：你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = (x) => {
  return x + "" === (x + "").split("").reverse().join("");
};

const isPalindrome2 = (x) => {
  const num = (x + "").split("");
  const tempNum = [...num];
  let result = true;

  while (num.length > 0) {
    if (num.pop() !== tempNum.shift()) {
      result = false;
      break;
    }
  }

  return result;
};

console.log(isPalindrome2(121));
// @lc code=end

