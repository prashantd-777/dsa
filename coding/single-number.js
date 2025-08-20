// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

const inputArray = [3, 1, 5, 4, 1, 5, 3];

function findSingleNumber(arr) {
    const output = {};
    for(let i = 0; i< arr.length; i++) {
        output[arr[i]] = output[arr[i]] ? output[arr[i]] + 1: 1;
    }
    const result = Object.keys(output).find(item => output[item] === 1);
    console.log(result);
    return result;
}

console.log("Output 1 is::", findSingleNumber(inputArray));

// Solution 2
function findSingleNumber2(arr) {
    let xor = 0;
    for(let i = 0; i< arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
}

console.log("output 2 is::", findSingleNumber2([...inputArray]));