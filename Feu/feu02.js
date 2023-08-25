
/** Trouver la forme */

const fs = require("fs");
const msgerr = "Introuvable.";
let noargs = false;
let result = "";

// FUNCTIONS
validateArgs = (args) => {
    return (args.length !== 2); 
}

displayFile = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        for(let i=0; i<data.length; i++) {
            console.log(i, " - ", data[i], " - charCode : ",  data.charCodeAt(i));
        }
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
else displayFile(arg[0]);