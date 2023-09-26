
/** Trouver le plus grand carré */

const fs = require("fs");
const msgerr = "error.";

let nbCar;
let nblignes;
const start=5;

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
const cardValidity = (dataz) => {

    let vide;
    let obstacle;
    let plein;
    let tabLignes = [];

        nblignes = dataz.charAt(0);
        vide = dataz.charAt(1);
        obstacle = dataz.charAt(2);
        plein = dataz.charAt(3);

        /*
        console.log("\nNb Lignes = ", nblignes,
                    "\nCaractère vide = ", vide,
                    "\nCaractère obstacle = ", obstacle,
                    "\nCaractère plein = ", plein); */

        let caracterz = [vide, obstacle, plein, '\n'];
        // console.log(caracterz);
        nbCar=0;
        let j=0;
        let k=0;

        for(let i=5; i<dataz.length; i++) {
            k++;
            // Si la liste contient un car différent de ceux annoncés
            if(!caracterz.includes(dataz.charAt(i))) return false;
            if(dataz.charCodeAt(i) === 10) {
                tabLignes.push(k);
                nbCar = tabLignes[0];
                j++;
                // Si le nb de car par lignes est différent
            }
            
        }

        for(let m=0; m<tabLignes.length; m++) {
            //console.log(tabLignes[m], " % ", tabLignes[0], "tabLignes[m] % tabLignes[0] ", tabLignes[m] % tabLignes[0]) ; 
            if((tabLignes[m] % tabLignes[0]) !== 0) return false;
        }

        
        // Si nbLignes annoncé est faux
        if(j !== +nblignes) return false;

    return true;
}

// Search the bigger square.
const foundSquare = (fichier) => {

    let lineMax = [];
    let biggest = [];
    let square = 2;
    let done = true;
    let myData = "";

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        if(!cardValidity(data)) {
            console.warn(msgerr);
            return;
        }
        nblignes = +nblignes;
        
        let iCol = 5;
        let iLine = 6;
        let nbSpace=0;
        let nbL = 0;
        let nbC = 0;

        console.log("-- foundSquare()");
        console.log("Nb Lignes = ", nblignes);
        console.log("Nb Caractères = ", nbCar);
        console.log("iCol = ", iCol);
        console.log("iLine = ", iLine);
        console.log("-----------------------");
        // data.slice(5, data.length);

        // Parcourir TOUT le plateau.
        for(let i=start; i<data.length; i++) {
            // Si le nb de lignes ne dépassent pas le carré
            if(nbL < square+iLine) {

                if(data.charAt(i) === '.') {

                    if(nbC >= iCol && nbL >= iLine) {
                        lineMax[nbL] = nbSpace++;
                    }
                    nbC++;
                } else if(data.charCodeAt(i) === 10) {

                    if(nbL >= iLine) {
                        if(lineMax[nbL] >= square) done = true;
                        else {
                            console.log("lineMax[",nbL,"] < square", lineMax[nbL], " --> BREAK;");
                            done = false;
                            break;
                        }
                    }
                    nbC=0;
                    nbL++;
                    nbSpace=0;
                } else if(data.charAt(i) === 'x' && nbC >= iCol && nbL >= iLine) {
                    if(lineMax[nbL] >= square) done = true;
                    else {
                        console.log("x at", i, " --> BREAK;");
                        done = false;
                        break;
                    }
                } else {
                    nbC++;
                }
            }
        }

        console.log("\nColonnes | Lignes\nnbC =", nbC, "| nbL =", nbL)
        console.log(lineMax);
        console.log(done);

        if(done) {
            let nbL=0;
            let nbC=0;
            
            let newLine = "";

            for(let i=start; i<data.length; i++) {

                if(data.charAt(i) === '.') {
                    
                    if(nbC>=iCol && nbC<square+iCol && nbL>=iLine && nbL<square+iLine) {
                        newLine += 'o';
                    } else {
                        newLine += data.charAt(i);
                    }
                    nbC++;
                } else {
                    if(data.charCodeAt(i) === 10) {
                        nbC=0;
                        nbL++;
                    } else nbC++;
                    newLine += data.charAt(i);
                }
                    
            }
            myData += newLine;
            newLine = "";
        } else {
            console.log("Square", square, "noT possibLe at iCol", iCol, " / iline", iLine, "!");
        }
        console.log(myData);

    });
}

const trySquare = (plate) => {



}

// ERRORS
// PARSING
let arg = process.argv.slice(2);

// RESULT
// DISPLAY

if(validateArgs(arg)) console.warn(msgerr);
else foundSquare(arg[0]);