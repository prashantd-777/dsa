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

console.log('output is::', moveZeros([...nums]));


// Approach 2 => In 1st loop shift only nums to left and in another loop, makes remaining elements are zeros;
function moveZeros2(nums) {
    let x = 0;
    for(let i = 0 ;i< nums.length; i++) {
        if(nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    for(let i = x; i< nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

console.log('output 2 is::', moveZeros2([0, 0, 0, 0, 5, 0, 0]));