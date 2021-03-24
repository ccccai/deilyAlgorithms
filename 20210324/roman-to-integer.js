/*
 * @Author: caishiyin
 * @Date: 2021-03-24 15:12:37
 * @LastEditTime: 2021-03-24 17:51:36
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: \dailyAlgorithms\20210324\roman-to-integer.js
 */

const romanToInt = (s) => {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const strArr = s.split("");

  return strArr.reduce((total, curr, currI, arr) => {
    return currI > 0 && romanMap[curr] > romanMap[arr[currI - 1]]
      ? total + romanMap[curr] - 2 * romanMap[arr[currI - 1]]
      : total + romanMap[curr];
  }, 0);
};

console.log(romanToInt("IX"));
