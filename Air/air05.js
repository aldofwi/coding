
/** Sur chacun d'entre eux */

const msgerr = "error.";
let noargs = false;
let operation = "";
let resultat = "";

// FUNCTIONS
const validateArgs = (args) => {
    if(args.length < 2) return true;

    for(let i=0; i<args.length; i++) {
        if(isNaN(+args[i])) return true;
    }
}

const validateOp = (args) => {
    operation = args[args.length-1];
    if((operation.length<2) || (operation[0] !== '+' && operation[0] !== '-')) return true;
}

const calulateRes = (args) => {

    let entierOp = "";
    let numbers = [];
    let result = [];

    for(let i=1; i<operation.length; i++) {
        entierOp += operation[i];
    }
    entierOp = +entierOp;

    for(let j=0; j<args.length-1; j++) {
        numbers.push(+args[j]);
    }

    for(let k=0; k<args.length-1; k++) {
        if(operation[0] === '-') result.push(numbers[k]-entierOp);
        else if(operation[0] === '+') result.push(numbers[k]+(+entierOp)); 
    }

    for(let l=0; l<args.length-1; l++) {
        resultat += result[l] + " ";
    }
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);
if(!noargs) noargs = validateOp(arg);
calulateRes(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(resultat);