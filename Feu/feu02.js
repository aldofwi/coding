
/** Trouver la forme */

const fs = require("fs");
const msgerr = "error.";
let noargs = false;
let result = "";

// FUNCTIONS
validateArgs = (args) => {
    return (args.length !== 2); 
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

console.log(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayFile(arg[1]);