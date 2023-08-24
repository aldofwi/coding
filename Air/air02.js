
/** Concat */

const msgerr = "error.";
let noargs = false;
let result = ""; 

// FUNCTIONS
const checkArgs = (args) => { return args.length < 2; }

const cuttingParam = (param, separator) => {

    for(let i=0; i<param.length-1; i++) {  
        result += param[i];
        if(i !== param.length-2) result += separator;
    }
    return result;
}

const displayTab = (res) => {
    if(res !== "") console.log(res);
    else noargs = true;
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);
noargs = checkArgs(arg);
if(!noargs) result = cuttingParam(arg, arg[arg.length-1]);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayTab(result);