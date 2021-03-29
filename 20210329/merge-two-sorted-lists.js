/*
 * @Author: caishiyin
 * @Date: 2021-03-29 21:32:22
 * @LastEditTime: 2021-03-29 21:38:15
 * @LastEditors: caishiyin
 * @Description: 
 * @FilePath: /deilyAlgorithms/20210329/merge-two-sorted-lists.js
 */
const mergeTwoLists = (l1, l2) => {
  switch (true) {
      case l1 === null:
          return l2;
      case l2 === null:
          return l1;
      case (l1.val > l2.val):
          l2.next = mergeTwoLists(l1, l2.next)
          return l2;
      case (l1.val <= l2.val):
          l1.next = mergeTwoLists(l2, l1.next)
          return l1
  }
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))