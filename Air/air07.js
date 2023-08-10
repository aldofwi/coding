
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

    for(let z=0; z<args.length-2; z++) {
        if(isNaN(args[z]) || +args[z+1] < +args[z]) return true;
    }
    insert = +args[args.length-1];
}

insertElement = (param, element) => {

    for(let d=0; d<param.length-1; d++) {
        if(element < +param[d] && !done) {
            tableau.push(element);
            done = true;
        }
        tableau.push(+param[d]);
    }
    return tableau;
}

displayTab = (tableau) => {

    for(let d=0; d<tableau.length; d++) {
        result += tableau[d] + " ";
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