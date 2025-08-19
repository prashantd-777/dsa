// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 
let nums = [1,0,1,1,0,1, 1, 1, 1, 1, 1];

function calculateMaxOnes(arr) {
    let maxCount = 0;
    let currentCount = 0;
    for(let i = 0; i< arr.length; i++) {
        if(arr[i]) {
            currentCount++;
            // maxCount = Math.max(maxCount, currentCount); // Alternative solution
        } else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }
    return Math.max(maxCount, currentCount); // This needs to be recalculate, if max 1's are occured atlast
}

console.log('calculate max ones', calculateMaxOnes(nums));