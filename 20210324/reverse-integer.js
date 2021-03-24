/*
 * @Author: caishiyin
 * @Date: 2021-03-24 10:54:48
 * @LastEditTime: 2021-03-24 11:49:22
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: \dailyAlgorithms\20210323\reverse-integer.js
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
