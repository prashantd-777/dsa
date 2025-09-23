// Calculate sum of all elements in an array
const inputArray = [5, 3, 2, 0, 1];

function sum(index) {
    if(index === 0) return inputArray[index];

    return inputArray[index] + sum(index -1);
}

console.log('sum is::', sum(inputArray.length -1))