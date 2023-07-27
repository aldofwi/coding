
/** Rotation vers la gauche */

const msgerr = "error.";
let noargs = false;
let result = "";

// FUNCTIONS
validateArgs = (args) => {
    return args.length < 2;
}

my_rotation = (args) => {

    let new_array = [];

    for(let a=1; a<args.length; a++) {
        new_array.push(args[a]);
    }

    new_array.push(args[0]);

    return new_array;
}

displayTab = (tableau) => {

    for(let d=0; d<tableau.length; d++) {
        result += tableau[d];
        if(d !== tableau.length-1) {
            result += ", ";
        }
    }
    console.log(result);
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);
console.log(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayTab(my_rotation(arg));