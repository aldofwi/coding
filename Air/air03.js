
/** Chercher l'intrus */

const msgerr = "error.";
let noargs = false;
let occurence = 0;
let result = ""; 

// FUNCTIONS
checkArgs = (args) => { return args.length < 1; }

findNoPair = (param) => {

    let tableau = param;
    for(let a=0; a<param.length; a++) {
        occurence = 0;
        for(let z=0; z<param.length; z++) {
            if(tableau[z] === param[a]) occurence++;
        }
        if(occurence<2) return param[a];
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