const inputNums = [0,1,1,2,2,2,3,4,4,5];

console.log('solution 1',[...new Set(inputNums)]);

// Solution 2
function removeDuplicates2(nums) {
    const output = [];
    for(let i = 0; i< nums.length; i++) {
        if(!output.includes(nums[i])) {
            output.push(nums[i]);
        }
    }
    return output;
}

console.log('solution 2', removeDuplicates2(inputNums));


// Solution 3
function removeDuplicates3(nums) {
    const output = [];
    const passObj = {};
    for(let i = 0; i< nums.length; i++) {
        if(!passObj[nums[i]]) {
            passObj[nums[i]] = true;
            output.push(nums[i]);
        }
    }
    return output;
}

console.log('solution 3', removeDuplicates3(inputNums));



// Solution 4 ==> using two pointers problem and dealing with numbers only with better time/space complexity
function removeDuplicates4(nums) {
    let x = 0; // Gives unique array index and used for shifting the elements

    for(let i= 0; i< nums.length; i++) {
        if(nums[i] > nums[x]) {
            x = x +1; // if nums[i] > nums[x] then move this ith element to the next of x i.e, a[x+1];
            nums[x] = nums[i];
        }
    }

    return nums.slice(0, x + 1);
}

console.log('solution 4', removeDuplicates4(inputNums));