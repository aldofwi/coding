
/** Majuscules 1/2 */

let noargs = false;
let msgerr = "error.";
let current= ""; let result = '';

// FUNCTIONS
upperHalfLetters = (param) => {

    let a=0; let maj=false;
    while(a<param.length) {

        if(param.charCodeAt(a) >= 65 && param.charCodeAt(a) <= 122) {
            if(maj === false) {
                current += param[a].toUpperCase();
                maj = true;
            } else {
                current += param[a];
                maj = false;
            }
            result += current;
            current = "";
            a++;
        }
        else {
            current += param[a];
            result += current;
            current = "";
            a++;
        }
    }
    console.log(result);
}
// ERRORS
// PARSING
let arg = process.argv.slice(2)[0];
if(process.argv.length !== 3 || +arg>=0) noargs = true;
// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else upperHalfLetters(arg.toLowerCase());

/** TITLE */
// FUNCTIONS
// ERRORS
// PARSING
// RESULT
// DISPLAY
