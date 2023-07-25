
/** Split */

let noargs = false;
let split = false;
let msgerr = "error.";
let sep = [9, 13, 32];
let tableau = []; 
let current = "";

// FUNCTIONS
checkArgs = (args) => { return args.length !== 1; }

cuttingParam = (param, separator) => {

    for(let a=0; a<param.length; a++) {
        for(let b=0; b<sep.length; b++) {
            if( (param.charAt(a).charCodeAt(0) === separator[b] && current !== "") ) {
                tableau.push(current);
                split = true;
                current = "";
            } else split = false;
        }
        if(!split) current += param.charAt(a);
        if( a === param.length-1 ) tableau.push(current);
    }
}

displayTab = (tableau) => {

    if(tableau.length > 0) {
        for(let c=0; c<tableau.length; c++) {
            console.log(tableau[c]);
        }
    } else noargs = true;
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);
noargs = checkArgs(arg);
cuttingParam(arg[0], sep);
// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayTab(tableau);