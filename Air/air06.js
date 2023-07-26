
/** Contrôle Pass Sanitaire */

const msgerr = "error.";
let noargs = false;
let result = "";
let tableau = [];

// FUNCTIONS
validateArgs = (args) => { 
    if(args.length < 2) return true; 

    for(let z=0; z<args.length; z++) {
        if(!isNaN(args[z])) return true;
    }
}

simplifyArray = (tableau, element) => {

    let found = false;
    let current = "";
    let word = "";
    let resultab = [];

    for(let a=0; a<tableau.length-1; a++) {
        word = "";
        current = tableau[a];        

        for(let b=0; b<current.length; b++) {

            if(current.length >= element.length 
            && (current.charAt(b) === element.charAt(0).toLowerCase() || current.charAt(b) === element.charAt(0).toUpperCase())
            && !found) {

                for(let c=0; c<element.length; c++) {
                    word += current.charAt(b+c);
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

displayTab = (tab) => {

    for(let d=0; d<tab.length; d++) {
        if(d === tab.length-1) result += tab[d];
        else result += tab[d] + ", ";
    }

    console.log(result);
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);
if(!noargs) tableau = simplifyArray(arg, arg[arg.length-1]);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayTab(tableau);