
/** Chiffres ONLY */

let noargs = false;
let msgerr = "error."; let arg = '';
let current= ""; let result = '';

// FUNCTIONS
// ERRORS
// PARSING
if(process.argv.length !== 3) noargs = true;
else arg = process.argv.slice(2)[0];

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(arg >=0);
