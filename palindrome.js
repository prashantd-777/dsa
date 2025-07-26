const num = 12343212;

function isPalindrome(num) {

    if(num < 0) return false; // -ve number not a palindrome

    let n = num;
    let reverseNum = 0;

    while(n > 0) {
        const reminder = n %10;
        reverseNum = (10 * reverseNum) + reminder; // to reverse the number
        n = Math.floor(n/10); // Remove the digit after the point
    }

    console.log('reverseNum', reverseNum, num);
    return reverseNum === num;
}

console.log('is Palindrome', isPalindrome(num));

