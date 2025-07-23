// Create a star pattern which having output below: 
// ****
// ****
// ****
// ****

const n = 4;

function createStarPattern(n) {
    for(let i= 0; i<n; i++) {
        let row = "";
        for(let j = 0; j<n; j++) {
            row += "* \t";
        }
        console.log(row + '\n');
    }

}

createStarPattern(n)

