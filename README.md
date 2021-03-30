# dailyAlgorithms-算法练习

## 1. 两数之和 -easy
> 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

> 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

* leetcode: https://leetcode-cn.com/problems/two-sum/

## 2. 整数反转 -easy
> 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

> 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

> 假设环境不允许存储 64 位整数（有符号或无符号）。

示例

```
输入：x = 123
输出：321
```

* leetcode: https://leetcode-cn.com/problems/reverse-integer

## 3. 回文数 -easy
> 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

> 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

示例

```
输入：x = 121
输出：true
```

* leetcode: https://leetcode-cn.com/problems/palindrome-number

## 4. 罗马数字转整数 -easy
> 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

> 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

> 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

* I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
* X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
* C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

> 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例

```
输入: "III"
输出: 3
```

* leetcode: https://leetcode-cn.com/problems/roman-to-integer

## 5. 最长公共前缀 -easy
> 编写一个函数来实现查找字符串数组中的最长公共前缀。

> 如果不存在公共前缀，返回空字符串""。

示例

```
输入：strs = ["flower", "flow", "flight"]
输出："fl"
```

* leetcode: https://leetcode-cn.com/problems/longest-common-prefix

## 6. 有效的括号 -easy
> 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

> 有效字符串需满足：

* 左括号必须用相同类型的右括号闭合。
* 左括号必须以正确的顺序闭合。

示例

```
输入：s = "{[]}"
输出：true

输入：s = "([)]"
输出：false
```

* leetcode: https://leetcode-cn.com/problems/valid-parentheses

## 7. 合并两个有序链表 -easy
> 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

* leetcode: https://leetcode-cn.com/problems/merge-two-sorted-lists/

## 8. 删除有序数组中的重复项 -easy
> 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

> 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。


示例

```
输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

* leetcode: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array