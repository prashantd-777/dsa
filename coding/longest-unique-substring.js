
function lengthOfLongestSubstring(str) {
    let resultString = ""; max = 0
    for(let i = 0; i< str.length; i++) {
        let char = str.charAt(i);
        let pos = resultString.indexOf(char);
        if(pos !== -1) {
            resultString = resultString.substr(pos + 1);
        }
        resultString = resultString + char;
        max = Math.max(max, resultString.length);
    }
    
    return max;
    
    
}

console.log("Try programiz.pro", lengthOfLongestSubstring("geeksforgeeks"));