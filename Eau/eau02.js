
/** À l'envers */

let noargs = false;
let msgerr = "error.";
let result = [];

// PARSING
process.argv.forEach(function(val, index, array) { 
    
    if( array.length < 3 ) {
        noargs = true;
    } else {
        if (index >= 2) { 
            result[index-2] = val;
         }
    }
});

// FUNCTIONS
// ERRORS
// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else {
    for(let a=result.length-1; a>=0; a--) console.log(result[a]);
}

/** TITLE */
// FUNCTIONS
// ERRORS
// PARSING
// RESULT
// DISPLAY
