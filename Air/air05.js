
/** Sur chacun d'entre eux */

const msgerr = "error.";
let noargs = false;
let operation = "";
let resultat = "";
let entierOp = "";

// FUNCTIONS
validateArgs = (args) => {
    if(args.length < 2) return true;

    for(let a=0; a<args.length; a++) {
        if(isNaN(+args[a])) return true;
    }
}

validateOp = (args) => {
    operation = args[args.length-1];
    if( (operation.length<2) || (operation[0] !== '+' && operation[0] !== '-') ) return true;
}

calulateRes = (args) => {

    let numbers = [];
    let result = [];
    
    for(let i=1; i<operation.length; i++) {
        entierOp += operation[i];
    }
    entierOp = +entierOp;

    for(let b=0; b<args.length-1; b++) {
        numbers.push(+args[b]);
    }

    for(let c=0; c<args.length-1; c++) {
        if(operation[0] === '-') result.push(numbers[c]-entierOp);
        else if(operation[0] === '+') result.push(numbers[c]+(+entierOp)); 
    }

    for(let d=0; d<args.length-1; d++) {
        resultat += result[d] + " ";
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