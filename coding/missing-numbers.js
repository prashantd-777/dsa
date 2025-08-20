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


// Solution 2
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