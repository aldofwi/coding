
/** Split */

const msgerr = "error.";
let noargs = false;
let split = false;
let sep = [9, 13, 32];
let tableau = []; 

// FUNCTIONS
const checkArgs = (args) => { return args.length !== 1; }

const cuttingParam = (param, separator) => {

    let current = "";

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

const displayTab = (tab) => {

    if(tab.length > 0) {
        for(let i=0; i<tab.length; i++) {
            console.log(tab[i]);
        }
    } else noargs = true;
}
// ERRORS
// PARSING
let arg = process.argv.slice(2);
noargs = checkArgs(arg);
if(!noargs) cuttingParam(arg[0], sep);
// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayTab(tableau);