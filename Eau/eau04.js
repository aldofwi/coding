
/** Prochain Premier */

let noargs = false;
let msgerr = "-1";
let result; let arg;

// FUNCTIONS
isPremier = (nombre) => {

    if(nombre === 2 || nombre === 3 || nombre === 5 || nombre === 7) return true;
    else if(nombre === 0 || nombre === 1 || nombre%2 === 0 || 
        nombre%3 === 0 || nombre%5 === 0 || nombre%7 === 0) {
        return false;
    } else 
    return true;
}

// ERRORS
// PARSING
arg = process.argv.slice(2);
if(process.argv.length === 3 && +arg >= 0) {

    result = +arg;
    if(!isPremier(result)) noargs = true;
    else {
        result++;
        while(!isPremier(result)) {
            result++;
        }
    }
}
else noargs = true;

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(result);