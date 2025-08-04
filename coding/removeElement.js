// Remove Element from the array and return the count of number of elements
const inputArray = [0,0,1,1,1,2,2,3,3,4,4,5];

function removeElementFromArray(arr, val) {
    let x = 0;
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] !== val) {
            arr[x] = arr[i];
            x = x +1;
        }
    }

    return x
}

console.log('output is::', removeElementFromArray(inputArray, 2));
