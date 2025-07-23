// Create a star pattern which having output below: 
// *
// **
// ***
// ****

const n = 5;

function createStarPattern(n) {
    for(let i = 0; i< n; i++) {
        let row = "";
        for(let j = 0; j<=i; j++) {
            row += "*\t";
        }
        console.log(row + '\n');
    }
}

createStarPattern(n);

// Create a star pattern which having output below: 
// 1
// 10
// 101
// 1010
// 10101
// 101010

// Flow
// i  star
// 0   1 (j<=i)
// 1   2
// 2   3
// 3   4
// 4   5
// 5   6

function createBinaryStarPattern(n) {
    // let toggle = 1; // if you want continuos pattern like 10101010 horizontally then add toggle here else below
    for(let i = 0; i< n; i++) {
        let row = "";
        // for(let j = 0; j<=i; j++) {
        //     row +=  (j % 2 == 0 ? 1 : 0) + "\t";
        // }

        let toggle = 1; // on every new row if you want 1 then addit here if don't want to initialise, them put it outside of the both the for loops
        for(let j=0; j<= i; j++) {
            row += toggle + "\t";
            toggle = toggle == 1 ? 0 : 1;
        }
        console.log(row + '\n');
    }
}

createBinaryStarPattern(n)
