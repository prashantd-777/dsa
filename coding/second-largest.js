const inputArray = [4, 2, 10, 5, 45, 3];

function getSecondLargestElement(arr) {
    if(arr.length < 2) {
        return "Array length should greater than or equal to 2";
    }
    let largestElement = arr[0];
    let secondLargest = -Infinity;

    for(let i = 1; i< arr.length; i++) {
        if(arr[i] > largestElement) {
            secondLargest = largestElement;
            largestElement = arr[i]
        } else if(arr[i] > secondLargest && arr[i] < largestElement) {
            secondLargest = arr[i];
        }
    }

    return {largestElement, secondLargest};
}

console.log('output is::', getSecondLargestElement(inputArray))