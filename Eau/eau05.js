
/** String dans String */

let a=0;
let noargs = false;
let msgerr = "error.";
let current= ""; let params = [];

// FUNCTIONS
oneContainsTwo = (arg1, arg2) => {

    for(let b=0; b<arg2.length; b++) {       
        while(a<arg1.length) {
            if(arg2.charAt(b) === arg1.charAt(a)) {
                current += arg1.charAt(a); a++; break;
            } else {
                current = ""; a++;
            }
        }
    }
    if( current === arg2 ) return true;
    else return false;
}

// ERRORS
// PARSING
if(process.argv.length === 4) params = process.argv.slice(2);
else noargs = true;
// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(oneContainsTwo(params[0], params[1]) || oneContainsTwo(params[1], params[0]));
