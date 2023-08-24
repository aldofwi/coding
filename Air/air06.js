
/** Contrôle Pass Sanitaire */

const msgerr = "error.";
let noargs = false;
let myTable = [];

// FUNCTIONS
const validateArgs = (args) => { 
    if(args.length < 2) return true; 

    for(let i=0; i<args.length; i++) {
        if(!isNaN(args[i])) return true;
    }
}

const simplifyArray = (tableau, element) => {

    let found = false;
    let current = "";
    let word = "";
    let resultab = [];

    for(let i=0; i<tableau.length-1; i++) {
        word = "";
        current = tableau[i];        

        for(let j=0; j<current.length; j++) {

            if(current.length >= element.length 
            && (current.charAt(j) === element.charAt(0).toLowerCase() || current.charAt(j) === element.charAt(0).toUpperCase())
            && !found) {

                for(let k=0; k<element.length; k++) {
                    word += current.charAt(j+k);
                }

                if(word === element.toLowerCase() || word === element.toUpperCase()) found = true;
                else found = false;

            } else word = "";
        }
        if(!found) resultab.push(current);
        found = false;
    }

    return resultab;
}

const displayTab = (tab) => {

    let result = "";
    for(let i=0; i<tab.length; i++) {
        if(i === tab.length-1) result += tab[i];
        else result += tab[i] + ", ";
    }
    console.log(result);
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);
if(!noargs) myTable = simplifyArray(arg, arg[arg.length-1]);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayTab(myTable);