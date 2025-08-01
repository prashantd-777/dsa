// Write a program which can calculate a number of digit from a number. For e.g: 1234 => 4

const inputNum = 4532;

function calculateDigits(num) {
    if(num ==0) {
        return 1;
    }
    // Convert -ve number into +ve integers
    num = Math.abs(num);
    let count = 0;
    while(num > 0) {
        num = Math.floor(num/10);
        count++;
    }

    return count;
}


console.log('calculted digit count is:', calculateDigits(inputNum));