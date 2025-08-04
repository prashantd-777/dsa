// reverse a string without creating a new variable. It should update existing array with new value
const inputStringArray = ["P", "R", "A", "S", "K", "H", "A", "N", "T"];

function reverseString(arr) {
    for(let i = 0; i<arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp
    }

    return arr;
}

console.log("output is::", reverseString(inputStringArray))