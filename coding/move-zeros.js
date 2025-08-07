// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

let nums = [0,1,0,3,12];

function moveZeros(arr) {
    let x = 0;
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[x];
            arr[x] = temp;
            x += 1;
        }
    }
    return arr;
}

console.log('output is::', moveZeros(nums))