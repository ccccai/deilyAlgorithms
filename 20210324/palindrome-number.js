/*
 * @Author: caishiyin
 * @Date: 2021-03-24 11:53:58
 * @LastEditTime: 2021-03-24 14:43:43
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: \dailyAlgorithms\20210324\palindrome-number.js
 */
const isPalindrome = (x) => {
  return x + '' === (x + '').split('').reverse().join('');
}

const isPalindrome2 = (x) => {
  const num = (x + '').split('');
  const tempNum = [...num];
  let result = true

  while (num.length > 0) {
    if (num.pop() !== tempNum.shift()) {
      result = false
      break;
    }
  }

  return result;
}

console.log(isPalindrome2(121))