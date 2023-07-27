
/** Afficher une pyramide */

const msgerr = "error.";
let noargs = false;
let result = "";
let nbLignes = 0;
let nbElement = 0;

// FUNCTIONS
validateArgs = (args) => {
    return (args.length !== 2 || isNaN(args[1]));
}

displayPyramide = (element, number) => {
    nbLignes = number;
    nbElement++; // nb éléments sur la 1ère ligne

    for(let i=0; i<nbLignes; i++) {
        number--; // nombre d'espaces préfixés
        for(let j=number; j>0; j--) {
            result += " ";
        }
        for(let k=0; k<nbElement; k++) {
            result += element;
        }
        nbElement += 2;
        console.log(result);
        result="";
    }
}
// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayPyramide(arg[0], arg[1]);