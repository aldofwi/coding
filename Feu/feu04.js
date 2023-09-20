
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

    let vide;
    let obstacle;
    let plein;
    let nblignes;
    let nbCar;
    let tabLignes = [];

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        nblignes = data.charAt(0);
        vide = data.charAt(1);
        obstacle = data.charAt(2);
        plein = data.charAt(3);

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

        for(let i=5; i<data.length; i++) {
            k++;
            // Si la liste contient un car différent de ceux annoncés
            if(!caracterz.includes(data.charAt(i))) return false;
            if(data.charCodeAt(i) === 10) {
                tabLignes.push(k);
                j++;
                // Si le nb de car par lignes est différent
                if(tabLignes[j]%tabLignes[0] !== 0) return false;
            }
            
        }
        // Si nbLignes annoncé est faux
        if(j !== nblignes) return false;
        
    });
    return true;
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);

// RESULT
// DISPLAY

if(validateArgs(arg) || !cardValidity(arg[0])) console.warn(msgerr);
else console.log("True");