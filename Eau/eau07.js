
/** MAJUSCULE */

let noargs = false;
let msgerr = "error.";
let current= ""; let result = '';

// FUNCTIONS
upperFirstLetter = (param) => {
    for(let a=0; a<param.length; a++) {

        if(param.charCodeAt(a) >= 65 && param.charCodeAt(a) <= 122) {
            current += param[a];
        } else {
            current = current.charAt(0).toUpperCase() + current.slice(1);
            current += param[a];
            result += current;
            current = "";
        }
    }
}
// PARSING
if(process.argv.length !== 3) noargs = true;
let arg = process.argv.slice(2)[0];
// ERRORS
if( +arg >= 0) noargs = true;
else upperFirstLetter(arg);
// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(result);