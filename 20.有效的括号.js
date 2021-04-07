/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (43.93%)
 * Likes:    2310
 * Dislikes: 0
 * Total Accepted:    591.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(]"
 * 输出：false
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "([)]"
 * 输出：false
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：s = "{[]}"
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由括号 '()[]{}' 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const keyMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let strs = s.split("");
  let result = strs.reduce((prev, next) => {
    if (prev.length && keyMap[prev[prev.length - 1]] === next) {
      return prev.filter((_, index) => index !== prev.length - 1);
    } else {
      return [...prev, next];
    }
  }, []);
  return !result.length;
};

const isValid2 = (s) => {
  const stack = [];
  for (let item of s) {
    switch (true) {
      case ["(", "[", "{"].includes(item):
        stack.push(item);
        break;
      case item === ")":
        if (stack.pop() !== "(") {
          return false;
        }
        break;
      case item === "]":
        if (stack.pop() !== "[") {
          return false;
        }
        break;
      case item === "}":
        if (stack.pop() !== "{") {
          return false;
        }
        break;
    }
  }
  return !stack.length;
};

console.log(isValid("()[]"));

// @lc code=end

