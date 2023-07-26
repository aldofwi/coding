
/** Un seul à la fois */

const msgerr = "error.";
let noargs = false;
let result = "";
let current = '';

// FUNCTIONS
checkArgs = (args) => { return args.length !== 1; }

simplifyChain = (param) => {
    
    result += param[0];
    console.log(param);

    for(let a=1; a<param.length; a++) {

        if(param[a] !== param[a-1]) result += param[a];
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