
/** Trouver la forme */

const fs = require("fs");
const msgerr = "Introuvable.";
let noargs = false;
let frame = [];
let shape = [];
let finalShape = [];

// FUNCTIONS
const validateArgs = (args) => {

    if(args.length !== 2) return true;
    else {
        let errfile1 = tryFile(arg[0]);
        let errfile2 = tryFile(arg[1]);

        return errfile1 || errfile2;
    }
}

// Save perimeter of the board
const saveFrame = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        frame = [];
        let line = 0;
        let col = 0;
        // Stocker les coordonnées du périmètre du board.
        for(let i=0; i<data.length; i++) {
            // Si le caractère n'est ni vide, ni retour chariot, on incrémente.
            if(data.charCodeAt(i) !== 10 && data.charCodeAt(i) !== 32) {
                col++;
            } else if(data.charCodeAt(i) === 10) {
                frame.push([line, col]);
                line++;
                col = 0;
            } else {
                col++;
            }
        }
        if(frame.length !== 0) displayShape(finalShape);
    });
}

// Save position of shape points
const saveShape = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        let line = 0;
        let col = 0;
        // Stocker les éléments à trouver & leur position.
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
    });
}

// Display shape with dashes (-)
const displayShape = (final) => {

    let i=0;
    let display = "";

    while(i<final.length) { // 0 1 2 (éléments à placer)

        for(let j=0; j<frame.length; j++) { // 0 1 2 (nb de lignes)

            for(let k=0; k<frame[j][1] ; k++) { // 0 1 2 3 (nb colonnes)

                if(i<final.length && final[i][2] === j && final[i][1] === k) {

                    display += String.fromCharCode(final[i][0]);
                    i++;
                    
                } else display += "-";
            }
            display += "\n";
        }
    }
    console.log("Coordonnées : "+finalShape[0][1]+","+finalShape[0][2]);
    console.log(display);
}

// Verify existence of a file.
const tryFile = (fichier) => {

    let fileExists = fs.existsSync(fichier);
    // console.log(fichier," exists:", fileExists);
    return !fileExists;
}

// Search shape on the board.
const foundShape = (fichier) => {

    let iCol = 0;
    let iLine = 0;
    let found = 0;
    let currentShape = shape;

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        for(let i=0; i<data.length; i++) {
            found = 0;
            if(found < shape.length && data.charCodeAt(i) === shape[found][0]) {

                finalShape.push([data.charCodeAt(i), iCol, iLine]);
                found++;
                // définir la forme courante & check otherz
                for(let j=0; j<shape.length; j++) {
                    currentShape[j][1] = shape[j][1]+iCol;
                    currentShape[j][2] = shape[j][2]+iLine;
                }

                let iCol2=iCol;
                let iLine2=iLine;
                let ecartCol;
                let ecartLine;

                for(let k=i+1; k<data.length; k++) {
                    // Comparaison avec 1er élément trouvé ! Fixé.
                    ecartCol = shape[found][1]-shape[0][1];
                    ecartLine = shape[found][2]-shape[0][2];

                    // Si le prochain est Retour Chariot ou pas
                    if(data.charCodeAt(k) === 10) {
                        iCol2=-1;
                        iLine2++;
                    } else iCol2++;
                    
                    if(ecartLine === 0 || iLine2-iLine === ecartLine) {
                        if(iCol2-iCol === ecartCol) {
                            if(data.charCodeAt(k) === currentShape[found][0]) {
                                
                                finalShape.push([data.charCodeAt(k), iCol2, iLine2]);
                                found++;
                                if(found === shape.length) break;
                            } else {
                                finalShape = [];
                                found=0;
                                break;
                            }
                        }
                    }
                }
                if(found === shape.length) break;
            }
            iCol++;
            if(data.charCodeAt(i) === 10) {
                iLine++;
                iCol=0;
            }
        }

        if(found < currentShape.length) {
            console.log("Introuvable");
        } else if(found > 0 && found === currentShape.length) {
            console.log("Trouvé !");
            saveFrame(arg[0]);
        }
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
    saveShape(arg[1]);
    foundShape(arg[0]);
}