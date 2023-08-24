
/** Rotation vers la gauche */

const msgerr = "error.";
let noargs = false;
let result = "";

// FUNCTIONS
const validateArgs = (args) => {
    return args.length < 2;
}

const my_rotation = (args) => {

    let new_array = [];
    for(let i=1; i<args.length; i++) {
        new_array.push(args[i]);
    }

    new_array.push(args[0]);
    return new_array;
}

const displayTab = (tableau) => {

    for(let i=0; i<tableau.length; i++) {
        result += tableau[i];
        if(i !== tableau.length-1) {
            result += ", ";
        }
    }
    console.log(result);
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayTab(my_rotation(arg));