
/** Trouver le plus grand carré */

const fs = require("fs");
const msgerr = "error.";

let nbCar;
let nblignes;

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
    let colMax = [];
    let square = 4;
    let done = false;
    let myData = "";
    let index = 4;

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        if(!cardValidity(data)) {
            console.warn(msgerr);
            return;
        }
        nblignes = +nblignes;
        
        console.log("-- foundSquare()");
        console.log("Index = ", index);
        console.log("Nb Lignes = ", nblignes);
        console.log("Nb Caractères = ", nbCar);
        console.log("-----------------------");

        let nb=1;
        let startCol=5;
        let startLine=0;

        for(let j=startLine; j<square; j++) {
            for(let i=startCol; i<startCol+nbCar; i++) {
                //console.log(i, " - ", data.charAt(i), " - ", data.charCodeAt(i));
                if(data.charAt(i) === '.') {
                    if(i>startCol+index) {
                        lineMax[j] = nb++;
                    }
                } else if(i>startCol+index) break;
            }

            if(lineMax[j] >= square) done = true;
            else {
                done = false;
                break;
            }

            nb=1;
            startCol+=28;
        }
        console.log(lineMax);
        console.log(done);

        if(done) {
            let nbL=0;
            let nbC=0;
            startCol=5;
            startLine=0;
            let newLine = "";

            for(let i=startCol; i<data.length; i++) {

                if(data.charAt(i) === '.') {
                    
                    if(nbC>=5 && nbC<square+5 && nbL<square) {
                        newLine += 'o';
                    } else {
                        //console.log(nbC, " Otherz : ", data.charAt(i));
                        newLine += data.charAt(i);
                    }
                    nbC++;
                } else {
                    if(data.charCodeAt(i) === 10) {
                        nbC=0;
                        nbL++;
                    } else nbC++;
                    //console.log(nbL, " Otherz else : ", data.charAt(i));
                    newLine += data.charAt(i);
                }
                    
            }
            myData += newLine;
            newLine = "";
        } else {
            console.log("Square", square, "noT possibLe at index", index, "!");
        }
        console.log(myData);

    });
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);

// RESULT
// DISPLAY

if(validateArgs(arg)) console.warn(msgerr);
else foundSquare(arg[0]);