
/** Trouver la forme */

const fs = require("fs");
const msgerr = "Introuvable.";
let noargs = false;
let result = "";
let frame = [];
let shape = [];
let finalShape = [];
let board = "";

// FUNCTIONS
const validateArgs = (args) => {
    return (args.length !== 2);
}

// Save perimeter of the board
const saveFrame = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        frame = [];
        let line = 0;
        let col = 0;
        for(let i=0; i<data.length; i++) {
            
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
        console.log("saveFrame -->", frame);
        console.log("frame.length -->", frame.length);
        console.log("shape -->", finalShape);
        console.log("final.length -->", finalShape.length);
        console.log("Coordonnées : "+finalShape[0][1]+","+finalShape[0][2]);

        if(frame.length !== 0) displayShape(finalShape);
    });
    
}

// Save position of shape points
const saveShape = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        let line = 0;
        let col = 0;
        console.log("DATA -->");
        console.log(data);
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
    
    // setTimeout(() => {}, 3000);
    
}

// Display shape with dashes (-)
const displayShape = (final) => {

    let i=0;
    let display = "";
    // console.log("frame[0][1] -->", frame[0][1]);

    while(i<final.length) { // 0 1 2 (éléments à placer)

        for(let j=0; j<frame.length; j++) { // 0 1 2 (nb de lignes)

            for(let k=0; k<frame[j][1] ; k++) { // 0 1 2 3 (nb colonnes)

                if(final[i][2] === j && final[i][1] === k) {

                    display += String.fromCharCode(final[i][0]);
                    i++;
                } else display += "-";
            }
            display += "\n";
        }
    }
    // console.log("final displayShape -->", final);
    // console.log("Display :");
    console.log(display);
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
    let found = 0;
    let currentShape = shape;

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        console.log(" Shape -->", shape);

        for(let i=0; i<data.length; i++) {
            console.log("i =", i," // found =", found);
            if(found < shape.length && data.charCodeAt(i) === shape[found][0]) {

                console.log("["+i+"]","--> First Eureka!\n["+iCol+"]["+iLine+"]");
                finalShape.push([data.charCodeAt(i), iCol, iLine]);
                found++;
                // définir la forme courante & check otherz
                for(let j=0; j<shape.length; j++) {
                    currentShape[j][1] = shape[j][1]+iCol;
                    currentShape[j][2] = shape[j][2]+iLine;
                }
                console.log("Current Shape -->", currentShape);
                
                let iCol2=iCol;
                let iLine2=iLine;
                let ecartCol;
                let ecartLine;

                for(let k=i+1; k<data.length; k++) {
                    // Comparaison avec 1er élément trouvé !
                    ecartCol = shape[found][1]-shape[0][1];
                    ecartLine = shape[found][2]-shape[0][2];

                    console.log("k = "+k+" // found =", found);
                    console.log("ecartCol =", ecartCol, " // ecartLine =", ecartLine);
                    
                    // Si le prochain est Retour Chariot ou pas
                    if(data.charCodeAt(k) === 10) {
                        iCol2=-1;  // 0
                        iLine2++; // 2
                    } else iCol2++;

                    console.log("iCol2 =", iCol2, " // iLine2 =", iLine2);
                    console.log("iCol =", iCol, " // iLine =", iLine);
                    //                      2      0
                    if(ecartLine === 0 || iLine2-iLine === ecartLine) {
                        if(iCol2-iCol === ecartCol) {
                            if(data.charCodeAt(k) === currentShape[found][0]) {
                                
                                finalShape.push([data.charCodeAt(k), iCol2, iLine2]);
                                found++;
                                console.log("["+k+"]","--> Eureka "+found+" !\n["+iCol2+"]["+iLine2+"]");
                                if(found === shape.length) break;
                            } else {
                                finalShape = [];
                                found=0;
                                break;
                            }
                        }
                    }
                }
            }
            iCol++;
            if(data.charCodeAt(i) === 10) {
                iLine++;
                iCol=0;
                console.log("... Saut de Ligne ...");
            }
        }

        if(found < currentShape.length) {
            console.log("Introuvable");
        } else if(found === currentShape.length) {
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
    displayFile(arg[0]);
    // saveFrame(arg[0]);
    // setTimeout(() => {}, 3000);
    saveShape(arg[1]);
    // setTimeout(() => {}, 3000);
    foundShape(arg[0]);
}
/*
                let iCol2=iCol+1;
                let iLine2=iLine;
                for(let k=i+1; k<data.length; k++) {
                    // Parcourir la fin du fichier (1st is OK)
                    console.log("Boucle FOR // k =", k);
                    //      1   <   3
                    if(found < currentShape.length) {
                        // Si la ligne du suivant est pareil que précédent
                        if( iLine2 === currentShape[found][2] &&
                            iCol2 === currentShape[found][1] &&
                            data.charCodeAt(k) === currentShape[found][0]) {
                                console.log("k = "+k+" // Element = ", data.charCodeAt(k));
                                // Si écart entre les colonnes est le même
                                finalShape.push([data.charCodeAt(k), iCol2, iLine2]);
                                found++;
                                // console.log("["+k+"]","--> Eureka"+found+"!\n["+iCol2+"]["+iLine2+"]");
                        } else if(  iLine2 === currentShape[found][2] &&
                                    iCol2 === currentShape[found][1] &&
                                    data.charCodeAt(k) !== currentShape[found][0]) {
                            // console.log("--> Break !");
                            found=0;
                            finalShape = [];
                            break;
                        }

                        // console.log("iCol2 =", iCol2);
                        // console.log("iLine2 =", iLine2);
                        iCol2++;

                        if(data.charCodeAt(k) === 10) {
                            iLine2++;
                            iCol2=0;
                            // console.log("! Saut de Ligne !");
                        }
                    } else if(found === currentShape.length) {
                        // displayShape(finalShape);
                        // console.log("final foundShape -->", finalShape);
                        console.log("Trouvé !");
                        saveFrame(arg[0]);
                        break;
                    }
                }
*/