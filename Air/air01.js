
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

    for(let i=0; i<param.length; i++) {
        for(let j=0; j<separator.length; j++) {
            if( (param.charAt(i+j) === separator.charAt(j) && current !== "") ) {
                sep += param.charAt(i+j);
            }
        }

        if(sep !== separator) current += param.charAt(i);
        else {
            tableau.push(current); 
            i += separator.length;
            current = ""; 
        }
        sep = "";
        if( i === param.length-1 ) tableau.push(current);
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