/*
 * @Author: caishiyin
 * @Date: 2021-03-25 16:56:56
 * @LastEditTime: 2021-03-25 17:59:08
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: \dailyAlgorithms\20210325\valid-parentheses.js
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
