
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

        let caracterz = [vide, obstacle, plein, '\n'];
        nbCar=0;    let j=0;    let k=0;

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
            if((tabLignes[m] % tabLignes[0]) !== 0) return false;
        }
        // Si nbLignes annoncé est faux
        if(j === 0 || j !== +nblignes) return false;

    return true;
}

// Write the biggest square.
const foundSquare = (fichier) => {

    let biggest = [];
    let square = 2;
    let myData = "";

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        if(!cardValidity(data)) {
            console.warn(msgerr);
            return;
        }
        nblignes = +nblignes;
        
        let iCol = 0;
        let iLine = 0;
        let nbSpace=0;
        let nbL = 0;
        let nbC = 0;

        console.log("-- foundSquare()");
        console.log("Nb Lignes = ", nblignes);
        console.log("Nb Caractères = ", nbCar);

        biggest = trySquare(data);

        console.log("biggest =", biggest);
        console.log("-----------------------");

        if(biggest[0]) {

            square  = biggest[1];
            iCol    = biggest[2];
            iLine   = biggest[3]; 

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
            console.log(myData);

        } else {
            console.log("Biggest Square noT possibLe at all !\n", data);
        }

    });
}

// Found the biggest square.
const trySquare = (plate) => {

    let obs = false;
    let bigger = [];    let iCol = 0;   let nbL = 0;
    let lineMax = [];   let iLine = 0;  let nbC = 0;
    let done = true;    let nbSpace=0;  let square = 0;
    
    // Boucle sur la taille de square
    for(let k=2; k<=nblignes; k++) {

        done = true;
        square = k;
        lineMax = [];
        nbSpace = 0;  

        // Boucles sur les colonnes & lignes
        for(let m=0; m<nblignes; m++) {
            for(let n=0; n<nbCar-1; n++) {

                iCol = n;   nbL = 0;
                iLine = m;  nbC = 0;

                // Parcourir TOUT le plateau.
                for(let i=start; i<plate.length; i++) {
                    // Si le nb de lignes ne dépassent pas le carré
                    if(nbL < square+iLine && iLine+square <= nblignes) {

                        if(plate.charAt(i) === '.' && !obs) {
                            
                            if(nbC >= iCol && nbL >= iLine) {
                                nbSpace++;
                                lineMax[nbL] = nbSpace;
                            }
                            nbC++;
                        } else if(plate.charCodeAt(i) === 10) {

                            if(nbL >= iLine) {
                                if(lineMax[nbL] >= square) {
                                    done = true;
                                } else {
                                    done = false;
                                    break;
                                }
                            }
                            nbC=0;
                            nbL++;
                            obs = false;
                            nbSpace=0;
                            lineMax[nbL]=nbSpace;
                        } else if(plate.charAt(i) === 'x' && nbC >= iCol && nbL >= iLine) {
                            if(lineMax[nbL] >= square) {
                                nbC=0;
                                nbSpace=0;
                                done = true;
                                obs = true;
                            } else {
                                done = false;
                                break;
                            }
                        } else {
                            nbC++;
                        }
                    } else break; // watch OUT!
                }

                if(lineMax.length === 0) done = false;

                if(done) {
                    bigger[0] = true;
                    bigger[1] = square;
                    bigger[2] = iCol;
                    bigger[3] = iLine;
                    break;
                } 

            }
            if(done) break;
        }

    }
    return bigger;
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);

// RESULT
// DISPLAY
if(validateArgs(arg)) console.warn(msgerr);
else foundSquare(arg[0]);