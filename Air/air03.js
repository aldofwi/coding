
/** Chercher l'intrus */

const msgerr = "error.";
let noargs = false;
let occurence = 0;
let result = ""; 

// FUNCTIONS
checkArgs = (args) => { return args.length < 1; }

findNoPair = (param) => {

    let tableau = param;
    for(let i=0; i<param.length; i++) {
        occurence = 0;
        for(let j=0; j<param.length; j++) {
            if(tableau[j] === param[i]) occurence++;
        }
        if(occurence<2) return param[i];
    }
    if(result === "") noargs = true;
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);
noargs = checkArgs(arg);
result = findNoPair(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(result);