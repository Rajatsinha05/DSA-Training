
---

### Question 1: Two Sum Problem (Two Pointer Approach)

Given an array of integers `nums` and an integer `target`, implement a function `find_two_sum(nums, target)` that finds and returns the indices of two numbers in the array such that they add up to the target value. You may assume that each input will have exactly one solution, and you cannot use the same element twice. If there are multiple valid solutions, return any of them.

**Input:**
- `nums`: An array of integers where 2 <= len(nums) <= 10^5.
- `target`: The target sum, an integer.

**Output:**
- A list of two integers, representing the indices of the two numbers in `nums` that add up to the `target`.

**Example:**

```python
nums = [2, 7, 11, 15]
target = 9
result = find_two_sum(nums, target)
```

**Output:**
```
[0, 1]
```

**Explanation:**
- The numbers at indices 0 and 1 in the array [2, 7, 11, 15] add up to the target value of 9, which is why [0, 1] is the correct answer.

---

### Question 2: Reverse a String (Two Pointer Approach)

Write a JavaScript function that reverses a given string `s` in-place using the Two Pointer Approach.

**Input:**
- `s`: A string containing alphanumeric characters and spaces.

**Output:**
- The same string `s`, reversed.

**Example:**

**Input:**
```javascript
const s = "Hello, World!";
```

**Output:**
```javascript
"!dlroW ,olleH"
```

**Explanation:**

The function takes the input string `"Hello, World!"` and reverses it in-place using two pointers. After the reversal, the output is `"!dlroW ,olleH"`. The Two Pointer Approach efficiently swaps characters to reverse the string, and it correctly maintains the positions of spaces and special characters relative to other characters in the reversed string.

---

### Question 3: Check Palindrome (Two Pointer Approach)

Write a JavaScript function that checks if a given word `word` is a palindrome. A palindrome is a word that reads the same forward and backward.

**Input:**
- `word`: A string containing only lowercase letters and no spaces.

**Output:**
- `true` if the input word is a palindrome, `false` otherwise.

**Example:**

**Input:**
```javascript
const word = "racecar";
```

**Output:**
```javascript
true
```

**Explanation:**

The function takes the input word `"racecar"` and checks if it is a palindrome. Since "racecar" reads the same forward and backward, the output is `true`.

---

### Question 4: Find Nearest Two Sum (Two Pointer Approach)

Write a JavaScript function that finds the nearest sum of two numbers from a given array `nums` to a target number `target`, using the Two Pointer Approach.

**Input:**
- `nums`: An array of integers.
- `target`: An integer.

**Output:**
- The nearest sum of two numbers from the array to the target.

**Example:**

**Input:**
```javascript
const nums = [1, 2, 4, 8, 16];
const target = 10;
```

**Output:**
```javascript
9
```

**Explanation:**

The function takes the input array `[1, 2, 4, 8, 16]` and the target `10`. It uses the Two Pointer Approach to find the nearest sum of two numbers from the array to the target. In this case, the nearest sum is `9`, which is obtained by adding `1` and `8`. Therefore, the output is `9`.

---

### Question 5: Merge Two Sorted Arrays

Write a JavaScript function `mergeSortedArrays(arr1, arr2)` that merges two sorted arrays `arr1` and `arr2` into a single sorted array using the Two Pointer Approach.

**Input:**
- `arr1`: A sorted array of integers.
- `arr2`: A sorted array of integers.
- Both `arr1` and `arr2` can have duplicate values.

**Output:**
- A single sorted array containing all elements from both `arr1` and `arr2`.

**Example:**

**Input:**
```javascript
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
```

**Output:**
```javascript
[1, 2, 3, 4, 5, 6, 7, 8]
```

**Explanation:**

The function takes two input arrays `arr1` and `arr2`, both of which are sorted in ascending order. It uses the Two Pointer Approach to merge the two arrays into a single sorted array. The merged array `[1, 2, 3, 4, 5, 6, 7, 8]` contains all elements from both `arr1` and `arr2` in sorted order.

---

### Question 6: Generate and Print All Substrings of a String

Write a JavaScript function `generateAndPrintSubstrings(str)` that generates and prints all possible substrings of a given string `str` without storing them in an array. A substring is a contiguous sequence of characters within the string.

**Input:**
- `str`: A string containing alphanumeric characters and spaces.

**Output:**
- Print all possible substrings of the input string.

**Example:**

**Input:**
```javascript
const str = "abc";
```

**Output:**
```
a
ab
abc
b
bc
c
```

**Explanation:**

The function takes the input string `"abc"` and generates all possible substrings using nested loops. It prints each substring directly without storing them in an array. The output shows all substrings:

```
a
ab
abc
b
bc
c
```

---

### Question 7: Print All Subarrays of an Array Without Using a Parent Array

Write a JavaScript function `printSubarrays(arr)` that prints all possible subarrays of a given array `arr` without storing them in a parent array. A subarray is a contiguous sequence of elements within the array.

**Input:**
- `arr`: An array containing elements of any data type.

**Output:**
- Print all possible subarrays of the input array without using a parent array to store them.

**Example:**

**Input:**
```javascript
const arr = [1, 2, 3];
```

**Output:**
```
[1]
[1, 2]
[1, 2, 3]
[2]
[2, 3]
[3]
```

**Explanation:**

The function takes the input array `[1, 2, 3]` and generates all possible subarrays using nested loops. It prints each subarray directly without storing them in a parent array. The output shows all subarrays:

```
[1]
[1, 2]
[1, 

2, 3]
[2]
[2, 3]
[3]
```

---

### Question 8: Find Maximum Sum of Contiguous Subarray

Write a JavaScript function `findMaximumSubarraySum(arr)` that finds and returns the maximum sum of a contiguous subarray within a given array `arr` using Kadane's Algorithm.

**Input:**
- `arr`: An array of integers.

**Output:**
- An integer representing the maximum sum of any contiguous subarray in the input array.

**Example:**

**Input:**
```javascript
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
```

**Output:**
```javascript
6
```

**Explanation:**

The function takes the input array `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` and uses Kadane's Algorithm to find the maximum sum of a contiguous subarray. In this case, the maximum sum is `6`, which is obtained by selecting the subarray `[4, -1, 2, 1]`. Therefore, the output is `6`.

You can use this question for practice or interviews to test your ability to find the maximum sum of a contiguous subarray efficiently using Kadane's Algorithm.

---

### Question 9: Find Longest Increasing Subarray

Write a JavaScript function `findLongestIncreasingSubarray(arr)` that finds and returns the length of the longest increasing subarray within a given array `arr`. An increasing subarray is a contiguous sequence of elements within the array where each element is greater than or equal to the previous one.

**Input:**
- `arr`: An array of integers.

**Output:**
- An integer representing the length of the longest increasing subarray in the input array.

**Example:**

**Input:**
```javascript
const arr = [1, 2, 3, 1, 2, 3, 4, 5];
```

**Output:**
```javascript
5
```

**Explanation:**

The function takes the input array `[1, 2, 3, 1, 2, 3, 4, 5]` and finds the longest increasing subarray, which is `[1, 2, 3, 4, 5]`. The length of this subarray is `5`, which is the longest increasing subarray within the input array.

---