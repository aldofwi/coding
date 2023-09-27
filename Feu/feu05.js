
/** Labyrinthe */

const fs = require("fs");
const msgerr = "error.";

let nbLines;
let nbCol;
let full;
let empty;
let road;
let entry;
let exit;

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

// Check validity of the map.
const mapValidity = (dataz) => {

    if(dataz.charAt(2) !== 'x') return false;
    if(dataz.charCodeAt(10) !== 10) return false;

    nbLines = +(dataz.charAt(0)+dataz.charAt(1));
    nbCol   = +(dataz.charAt(3)+dataz.charAt(4));
    full    = dataz.charAt(5);
    empty   = dataz.charAt(6);
    road    = dataz.charAt(7);
    entry   = dataz.charAt(8);
    exit    = dataz.charAt(9);

    // console.log("\nNb Lignes =", nbLines, "\nNb Colonnes =", nbCol, "\nCaractère plein =", full, "\nCaractère vide =", empty, "\nCaractère chemin =", road, "\nCaractère entrée =", entry, "\nCaractère sortie =", exit, '\n');
    let caracterz = [full, empty, entry, exit, '\n'];
    // console.log(caracterz);

    let j=0;
    let k=0;
    let tabLignes = [];

    for(let i=11; i<dataz.length; i++) {
        // Si la liste contient un car différent de ceux annoncés
        if(!caracterz.includes(dataz.charAt(i))) return false;
        if(dataz.charCodeAt(i) === 10) {
            tabLignes.push(k);
            // console.log(tabLignes);
            j++;
            // Si le nb de car par lignes est différent
            if(k%nbCol !== 0) return false;
            k=0;
        } else k++;
    }

    if(tabLignes.length !== nbLines) return false;

    for(let m=0; m<tabLignes.length; m++) {
        // console.log(tabLignes[m], " % ", tabLignes[0], "tabLignes[m] % tabLignes[0] ", tabLignes[m] % tabLignes[0]) ; 
        if((tabLignes[m] % tabLignes[0]) !== 0) return false;
    }

    // Si nbLignes annoncé est faux
    if(j === 0 || j !== nbLines) return false;

    return true;
}

// Search the shortest way out.
const foundShortWay = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);
        if(!mapValidity(data)) {
            console.warn(msgerr);
            return;
        }
        console.log("\nNb Lignes =", nbLines, "\nNb Colonnes =", nbCol, "\nCaractère plein =", full, "\nCaractère vide =", empty, "\nCaractère chemin =", road, "\nCaractère entrée =", entry, "\nCaractère sortie =", exit);
        console.log('\n'+data.slice(11));
        
        let iCol = 0;   let entryPos = [];
        let iLine = 0;  let exitPos  = [];

        // Repérer les positions entrée & sortie.
        for(let i=nbCol+1; i<data.length; i++) {

            if(data.charAt(i) === entry) console.log("entry position =", i);
            else if(data.charAt(i) === exit) console.log("exit position =", i);
        }


    });
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);

// RESULT
// DISPLAY
if(validateArgs(arg)) console.warn(msgerr);
else foundShortWay(arg[0]);