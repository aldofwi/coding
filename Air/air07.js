
/** Insertion dans un tableau trié */

const msgerr = "error.";
let noargs = false;
let tableau = [];
let insert = -1;
let result = "";
let done = false;

// FUNCTIONS
validateArgs = (args) => { 
    if(args.length < 3) return true;

    for(let i=0; i<args.length-2; i++) {
        if(isNaN(args[i]) || +args[i+1] < +args[i]) return true;
    }
    insert = +args[args.length-1];
}

insertElement = (param, element) => {

    for(let i=0; i<param.length-1; i++) {
        if(element < +param[i] && !done) {
            tableau.push(element);
            done = true;
        }
        tableau.push(+param[i]);
    }
    return tableau;
}

displayTab = (tableau) => {

    for(let i=0; i<tableau.length; i++) {
        result += tableau[i] + " ";
    }
    console.log(result);
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayTab(insertElement(arg, insert));