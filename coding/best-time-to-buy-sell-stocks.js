const inputArray = [7, 1, 5, 3, 6, 4];

// Bruteforce solution which having time complexity as O(n2)
function getMaxProfit(arr) {
    let max = 0
    for(let i = 0; i< arr.length; i++) {
        for(let j = i+1; j<arr.length; j++) {
            if(arr[j] > arr[i])  {
                max = Math.max(arr[j] - arr[i], max) ;
            }
        }
    }
    
    return max;
}
// console.log("Output is::", getMaxProfit(inputArray));


function getMaxProfit2(arr) {
    let min = arr[0];
    let max = 0;
    for(let i = 1; i<arr.length; i++) {
        console.log(min, max);
        max = Math.max(arr[i] - min, max);
        min = Math.min(arr[i], min);
    }
    return max;
}


console.log('The output is::', getMaxProfit2(inputArray))
