
/** COMBINAISONS 3 Chiffres */

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let current = []; let result = []; let index = 0;

// FUNCTIONS
function isTheSame(trio) {
    if(trio[0] === trio[1] || trio[1] === trio[2] || trio[0] === trio[2]) return true
    else return false;
}

function increasing(trio) {
    return (trio[0] < trio[1] && trio[1] < trio[2]);
}
// ERRORS
// PARSING
// RESULT
for(let i=0; i<numbers.length-2; i++) {
    for(let j=0; j<numbers.length; j++) {
        for(let k=0; k<numbers.length; k++) {

            current = [ numbers[i], numbers[j], numbers[k] ];

            if( !isTheSame(current) && increasing(current) ) {
                result[index] = current[0]+""+current[1]+""+current[2];
                index++;
            }
        }
    }    
}
// DISPLAY
for(let o=0; o<result.length; o++) {
    console.log(result[o]);
}

/** TITLE */
// FUNCTIONS
// ERRORS
// PARSING
// RESULT
// DISPLAY