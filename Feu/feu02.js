
/** Trouver la forme */

const fs = require("fs");
const msgerr = "Introuvable.";
let noargs = false;
let result = "";
let found = [];
let shape = [];
let board = "";

// FUNCTIONS
const validateArgs = (args) => {
    return (args.length !== 2);
}

// Save position of shape points
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
        console.log("Shape -->", shape);
    });
    
    setTimeout(() => {}, 3000);
    foundShape(arg[0]);
}

// Display shape with dashes (-)
const displayShape = () => {

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

// Search shape on the board : OFF
const foundShape = (fichier) => {

    let iCol = 0;
    let iLine = 0;
    let currentShape = shape;

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        for(let i=0; i<data.length; i++) {

            if(data.charCodeAt(i) === shape[0][0]) {
                
                console.log("["+i+"]","--> Eureka!\n["+iCol+"]["+iLine+"]");

                // définir la forme courante & check otherz
                for(let j=0; j<shape.length; j++) {
                    currentShape[j][1] = shape[j][1]+iCol;
                    currentShape[j][2] = shape[j][2]+iLine;
                }
                console.log("Current Shape -->", currentShape);

                return;
            }
            iCol++;
            if(data.charCodeAt(i) === 10) {
                iLine++;
                iCol=0;
            }
        }
        // console.log(data);
    });
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);
noargs = validateArgs(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else {

    displayFile(arg[0]);
    saveShape(arg[1]);
    // foundShape(arg[0]);
}