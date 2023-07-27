
/** Afficher le contenu */

const fs = require("fs");
const msgerr = "error.";
let noargs = false;

// FUNCTIONS
validateArgs = (args) => {
    return args.length !== 1 ;
}

displayFile = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);
        console.log(data);
    });
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayFile(arg[0]);