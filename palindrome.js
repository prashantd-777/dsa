const input = 'testset';

function isPalindrome(input) {
    if(typeof input === 'string') return isStringPalindrome(input);
    if(input < 0) return false; // -ve number not a palindrome

    let n = input;
    let reverseNum = 0;
    while(n > 0) {
        const reminder = n %10;
        reverseNum = (10 * reverseNum) + reminder; // to reverse the number
        n = Math.floor(n/10); // Remove the digit after the point
    }

    console.log('reverseNum', reverseNum, input);
    return reverseNum === input;
}

function isStringPalindrome(input) {
    const inputArray = input.split('');
    let reverseString = '';
    for(let i = inputArray.length; i> 0; i--) {
        reverseString += inputArray[i -1];
    }

    return reverseString === input;
}



console.log('is Palindrome', isPalindrome(input));

