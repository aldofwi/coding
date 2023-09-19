
/** Trouver le plus grand carré */

const fs = require("fs");
const msgerr = "error.";

// FUNCTIONS
const validateArgs = (args) => {

    if(args.length !== 1) return true;
    else return tryFile(arg[0]);
}

// Verify existence of a file.
const tryFile = (fichier) => {

    let fileExists = fs.existsSync(fichier);
    return !fileExists;
}

// Check validity of the card.
const cardValidity = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        


    });
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);

// RESULT
// DISPLAY
if(validateArgs(arg) || !cardValidity(arg[0])) console.warn(msgerr);