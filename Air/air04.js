
/** Un seul à la fois */

const msgerr = "error.";
let noargs = false;
let result = "";

// FUNCTIONS
const checkArgs = (args) => { return args.length !== 1; }

const simplifyChain = (param) => {
    
    result += param[0];
    for(let i=1; i<param.length; i++) {
        if(param[i] !== param[i-1]) result += param[i];
    }
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = checkArgs(arg);
simplifyChain(arg[0]);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(result);