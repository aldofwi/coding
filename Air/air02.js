
/** Concat */

const msgerr = "error.";
let noargs = false;
let result = ""; 

// FUNCTIONS
checkArgs = (args) => { return args.length < 2; }

cuttingParam = (param, separator) => {

    for(let a=0; a<param.length-1; a++) {  
        result += param[a];
        if(a !== param.length-2) result += separator;
    }
    return result;
}

displayTab = (res) => {
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