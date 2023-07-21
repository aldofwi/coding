
/** Index Wanted */

let noargs = false;
let msgerr = "error.";
let current= ""; let result = -1;

// FUNCTIONS
checkArgs = (args) => {
    if(args.length < 2) noargs = true;
    else {
        return args[args.length-1];
    }
}

foundElements = () => {

    let index;
    for(let a=0; a<myArgs.length-1; a++) {
        if(myArgs[a] === lastArg) return a;
        else index = -1;
    }
    if(index === -1) return index;
}

// ERRORS
// PARSING
let myArgs = process.argv.slice(2);
let lastArg = checkArgs(myArgs);
result = foundElements(lastArg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(result);
