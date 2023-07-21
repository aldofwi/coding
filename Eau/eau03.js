
/** Fibonacci */

let noargs = false;
let msgerr = "-1";
let result = [];
let arg;

// FUNCTIONS
// ERRORS
// PARSING
arg = process.argv.slice(2);
if(process.argv.length === 3 && +arg >= 0) {

    result[0] = 0;
    result[1] = 1;

    for(let a=2; a<=arg; a++) {
        result[a] = result[a-1] + result[a-2];
    }
}
else noargs = true;
// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(result[arg]);