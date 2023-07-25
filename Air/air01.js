
/** Split en fonction */

const msgerr = "error.";
let noargs = false;
let split = false;
let tableau = []; 
let current = "";
let sep = "";

// FUNCTIONS
checkArgs = (args) => { return args.length !== 2; }

cuttingParam = (param, separator) => {

    for(let a=0; a<param.length; a++) {
        for(let b=0; b<separator.length; b++) {
            if( (param.charAt(a+b) === separator.charAt(b) && current !== "") ) {
                sep += param.charAt(a+b);
            }
        }

        if(sep !== separator) current += param.charAt(a);
        else {
            tableau.push(current); 
            a += separator.length;
            current = ""; 
        }
        sep = "";
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
if(!noargs) cuttingParam(arg[0], arg[1]);
// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayTab(tableau);