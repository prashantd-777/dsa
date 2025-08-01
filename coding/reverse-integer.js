const input = -1234;


function getReverseInteger(num) {
    let n = Math.abs(num);
    let reverse = 0;
    while(n > 0) {
        const reminder = n%10;
        reverse = (reverse * 10) + reminder;
        n = Math.floor(n/10);
    }
    return num < 0 ? -reverse : reverse;
}

console.log('output is::', getReverseInteger(input));