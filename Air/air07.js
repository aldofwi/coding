
/** Insertion dans un tableau trié */

const msgerr = "error.";
let noargs = false;
let insert = -1;

// FUNCTIONS
const validateArgs = (args) => { 
    if(args.length < 3) return true;

    for(let i=0; i<args.length-2; i++) {
        if(isNaN(args[i]) || +args[i+1] < +args[i]) return true;
    }
    insert = +args[args.length-1];
}

const insertElement = (param, element) => {

    let done = false;
    let tableau = [];
    for(let i=0; i<param.length-1; i++) {
        if(element < +param[i] && !done) {
            tableau.push(element);
            done = true;
        }
        tableau.push(+param[i]);
    }
    return tableau;
}

const displayTab = (tab) => {

    let result = "";
    for(let i=0; i<tab.length; i++) {
        result += tab[i] + " ";
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