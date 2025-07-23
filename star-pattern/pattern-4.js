// Create a star pattern which having output below: 
//    *
//   **
//  ***
// ****

// i  star     empty space
// 0   1(i+1)  3(n - (i + 1))
// 1   2       2
// 2   3       1
// 3   4       0

const n = 4;

function createStarPattern(n) {
    for(let i = 0; i<n; i++) {
        let row = "";
        for(let j=0; j<n-(i+1); j++) { // first we need to cover spaces 
            row += '_ \t';
        }
        for(let k = 0; k < i+1; k++) { // then star pattern
            row += "* \t"
        }
        console.log(row + '\n');
    }
}

createStarPattern(n);