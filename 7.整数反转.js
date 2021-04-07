/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (35.01%)
 * Likes:    2673
 * Dislikes: 0
 * Total Accepted:    642.6K
 * Total Submissions: 1.8M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 123
 * 输出：321
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -123
 * 输出：-321
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 120
 * 输出：21
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：x = 0
 * 输出：0
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
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const num = (x + "").split(""); // 转化为数组
  const newNum = []; // 结果
  // 开始反转
  for (let i = 1; i < num.length; i++) {
    newNum.unshift(num[i]);
  }

  if (num[0] === "-") {
    // 是负数
    newNum = Number(`-${newNum.join("")}`);
  } else {
    // 正数
    newNum.push(num[0]);
    newNum = Number(newNum.join(""));
  }

  // 是不是在范围内
  if (newNum <= -Math.pow(2, 31) || newNum >= Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return newNum;
  }
};

const reverse2 = (x) => {
  const num = (x + "").split("");
  let hasMinus;
  let newNum = num.filter((item, index) => {
    if (item !== "-") {
      return item;
    } else {
      hasMinus = true;
    }
  });
  newNum.reverse(); //翻转数组
  newNum = hasMinus ? Number(`-${newNum.join("")}`) : Number(newNum.join(""));

  // 是不是在范围内
  if (newNum <= -Math.pow(2, 31) || newNum >= Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return newNum;
  }
};

console.log("reverse", reverse2(-321));
// @lc code=end

