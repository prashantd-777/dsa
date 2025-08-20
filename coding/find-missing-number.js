// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation:
// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation:
// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

const inputArray = [4, 0, 2, 1 , 5];

// Solution 1
function findMissingNumber1(arr) {
    const nums = arr.sort(); // O(nlogn)
    for(let i = 1; i<nums.length; i++) {
        if(nums[i] !== nums[i - 1] + 1) {
            return nums[i-1] + 1;
        }
    }
    return 0;
}

console.log("Output 1 is::", findMissingNumber1(inputArray));

// Solution 2  O(n)
function findMissingNumber2(arr) {
    let sum = arr[0];
    for(let i = 1; i< arr.length; i++) {
        sum = sum + arr[i];
    }
    const lengthCount = arr.length;
    const total = (lengthCount* (lengthCount + 1)) / 2;
    console.log('sum is::', sum, total);
    return total - sum;
}

console.log("output 2 is::", findMissingNumber2([...inputArray]));