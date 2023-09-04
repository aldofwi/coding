
/** Trouver la forme */

const fs = require("fs");
const msgerr = "Introuvable.";
let noargs = false;
let result = "";
let shape = [];

// FUNCTIONS
const validateArgs = (args) => {
    return (args.length !== 2);
}

const saveShape = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        let line = 0;
        let col = 0;
        for(let i=0; i<data.length; i++) {
            
            if(data.charCodeAt(i) !== 10 && data.charCodeAt(i) !== 32) {
                shape.push([data.charCodeAt(i), col, line]);
                col++;
            } else if(data.charCodeAt(i) === 10) {
                line++;
                col = 0;
            } else {
                col++;
            }
        }
        console.log(shape);
    });

}

// Define Spacing searched
const foundShape = () => {

}

const sendCoordonates = () => {

}

const displayFile = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        for(let i=0; i<data.length; i++) {
            console.log(i, " - ", data[i], " - charCode :",  data.charCodeAt(i));
        }
        console.log(data);
    });
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);
noargs = validateArgs(arg);

//console.log(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else {
    // displayFile(arg[0]);
    displayFile(arg[1]);
    saveShape(arg[1]);
}