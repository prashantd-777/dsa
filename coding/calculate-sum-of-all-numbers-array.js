// Calculate sum of all elements in an array
const inputArray = [5, 3, 2, 0, 1];

function sum(index) {
    if(index === 0) return inputArray[index];

    return inputArray[index] + sum(index -1);
}

console.log('sum is::', sum(inputArray.length -1));


// calculate sum of all odd elements in an array
function sumOfOddNumbers(index) {
    let isOdd = ((inputArray[index] % 2) === 1);
    if(index === 0) {
        return isOdd ? inputArray[index] : 0;
    }

    return ((isOdd ? inputArray[index] : 0) + sumOfOddNumbers(index -1));
}

console.log('sum of odd numbers', sumOfOddNumbers(inputArray.length - 1));