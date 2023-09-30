
/** Labyrinthe */

const fs = require("fs");
const msgerr = "error.";

let nbLines;    let full;       let entry;
let nbCol;      let empty;      let exit;
let nbCar;      let road;       let exitPoint;

let wayz = [];          let eureka = false;
let goodPaths = [];     let blocked = false;

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

    let caracterz = [full, empty, entry, exit, '\n'];

    nbCar = nbCol+1;
    let j=0;
    let k=0;
    let tabLignes = [];

    for(let i=11; i<dataz.length; i++) {
        // Si la liste contient un car différent de ceux annoncés
        if(!caracterz.includes(dataz.charAt(i))) return false;
        if(dataz.charCodeAt(i) === 10) {
            tabLignes.push(k);
            j++;
            // Si le nb de caractères par lignes est différent
            if(k%nbCol !== 0) return false;
            k=0;
        } else k++;
    }
    // Si le nb de lignes est différent que celui annoncé
    if(tabLignes.length !== nbLines) return false;

    for(let m=0; m<tabLignes.length; m++) {
        if((tabLignes[m] % tabLignes[0]) !== 0) return false;
    }
    // Si nbLignes annoncé est faux
    if(j === 0 || j !== nbLines) return false;

    return true;
}

// Trouver le plus court parmi les bons chemins.
const foundShortWay = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);
        if(!mapValidity(data)) {
            console.warn(msgerr);
            return;
        }
                        let position = [];
        let iCol = 0;   let entryPos = [];
        let iLine = 0;  let exitPos  = [];

        console.log('\n'+data);
        // Repérer les positions entrée & sortie.
        for(let i=nbCar; i<data.length; i++) {
            position = [iCol, iLine, i];
            if(data.charAt(i) === entry)        entryPos.push(position);
            else if(data.charAt(i) === exit)    exitPos.push(position);
            
            if(data.charCodeAt(i) === 10) {
                iCol = 0; iLine++;
            } else iCol++;
        }
        // Pour chaque entrée, esayer de trouver chaque sortie
        for(let j=0; j<entryPos.length; j++) {
            for(let k=0; k<exitPos.length; k++) {
                exitPoint = foundExitPoint(exitPos[k], data);
                wayz = [];
                tryToFindOut(entryPos[j], data);
            }
        }
        // Trier pour trouver le plus court des bons chemins
        let shortest = 0;
        for(let i=0; i<goodPaths.length-1; i++) {
            if(goodPaths[i].length < goodPaths[i+1].length) shortest = i;
            else shortest = i+1;
        }
        // Afficher le plus court chemin
        drawThatWay(goodPaths[shortest], data);
        console.log("--> Sortie atteinte en", goodPaths[shortest].length, "coups !\n");
    });
}

// Trouver tous les chemins pour atteindre la sortie.
const tryToFindOut = (comeIn, map) => {

    let lastPos = [];
    let currentPos = [];
    let currentWay = [];
    let currentDir = whereCanIgo(comeIn, currentPos, currentWay, map);

    while(currentDir.length > 0) {

        currentPos = comeIn;
        while(!blocked) {

            if(currentDir.length > 0) {
                lastPos = currentPos;
                // currentDir possède plusieurs voies, ATTENTION.
                currentPos = goThere(currentDir[0], lastPos);
                currentWay.push(currentPos[2]);
                if(eureka) break;
            } else break;
            currentDir = whereCanIgo(currentPos, lastPos, currentWay, map);
        }
        // On stocke tous les chemins
        wayz.push(currentWay);
        // On stocke aussi tous les BONS chemins
        if(eureka) goodPaths.push(currentWay);

        blocked = false;
        eureka = false;
        lastPos = [];
        currentPos = [];
        currentWay = [];
        currentDir = whereCanIgo(comeIn, currentPos, currentWay, map);
    }
}

// Passer d'une position à une autre
const goThere = (direction, lastPosition) => {

    let curr = [];
    switch(direction) {
        case 'left' : curr = [lastPosition[0]-1, lastPosition[1], lastPosition[2]-1]; break;
        case 'right': curr = [lastPosition[0]+1, lastPosition[1], lastPosition[2]+1]; break;
        case 'up'   : curr = [lastPosition[0], lastPosition[1]-1, lastPosition[2]-nbCar]; break;
        case 'down' : curr = [lastPosition[0]-1, lastPosition[1]+1, lastPosition[2]+nbCar]; break;
            default : break;
    }
    return curr;
}

// Tester la possibilité de déplacement
const whereCanIgo = (position, lastPos, currWay, map) => {

    let current = currWay;
    let directions = [];

    if(position[0] !== 0 && map.charAt(position[2]-1) === ' ' && lastPos[2] !== position[2]-1) {
        
        if(!current.includes(position[2]-1)) { 
            current.push(position[2]-1);
            if(!didIgo(current)) {
                directions.push('left');
                if(position[2]-1 === exitPoint[2]) eureka = true;
            }
            current.pop();
            if(eureka) {
                directions = [];
                directions.push('left');
                return directions;
            }
        }
    }

    if(position[0] !== nbCol-1 && map.charAt(position[2]+1) === ' ' && lastPos[2] !== position[2]+1) {
        
        if(!current.includes(position[2]+1)) {
            current.push(position[2]+1);
            if(!didIgo(current)) { 
                directions.push('right');
                if(position[2]+1 === exitPoint[2]) eureka = true;
            }
            current.pop();
            if(eureka) {
                directions = [];
                directions.push('right');
                return directions;
            }
        }
    }

    if(position[1] !== 0 && map.charAt(position[2]-nbCar) === ' ' && lastPos[2] !== position[2]-nbCar) {
        
        if(!current.includes(position[2]-nbCar)) {
            current.push(position[2]-nbCar);
            if(!didIgo(current)) { 
                directions.push('up');
                if(position[2]-nbCar === exitPoint[2]) eureka = true;
            }
            current.pop();
            if(eureka) {
                directions = [];
                directions.push('up');
                return directions;
            }
        }
    }

    if(position[1] !== nbLines-1 && map.charAt(position[2]+nbCar) === ' ' && lastPos[2] !== position[2]+nbCar) {
        
        if(!current.includes(position[2]+nbCar)) {
            current.push(position[2]+nbCar);
            if(!didIgo(current)) { 
                directions.push('down');
                if(position[2]+nbCar === exitPoint[2]) eureka = true;
            }
            current.pop();
            if(eureka) {
                directions = [];
                directions.push('down');
                return directions;
            }
        }
    }

    if(directions.length === 0 && !eureka) blocked = true;

    return directions;
}

// Vérifier si on est déja passé par là
const didIgo = (thatWay) => {

    let done = false;
    for(let j=0; j<wayz.length; j++) {
        // On compare la taille du chemin avant le contenu
        if(wayz[j].length === thatWay.length) {
            
            for(let k=0; k<thatWay.length; k++) {
                if(wayz[j][k] === thatWay[k]) {
                    done = true;
                    if(k === thatWay.length-1) break;
                } else done = false;
            }
        } else done = false;
        if(done) break;
    }
    return done;
}

// Trouver le point libre vers la sortie
const foundExitPoint = (exitPosition, map) => {
    // On part du principe qu'il n'y a qu'un point d'accès à la sortie
    let res ;
    if(     exitPosition[0] !== 0           && map.charAt(exitPosition[2]-1) === ' ') res = 'left';
    else if(exitPosition[0] !== nbCol-1     && map.charAt(exitPosition[2]+1) === ' ') res = 'right';
    else if(exitPosition[1] !== 0           && map.charAt(exitPosition[2]-nbCar) === ' ') res = 'up';
    else if(exitPosition[1] !== nbLines-1   && map.charAt(exitPosition[2]+nbCar) === ' ') res = 'down';

    switch(res) {

        case 'left' : return [exitPosition[0]-1, exitPosition[1], exitPosition[2]-1];
        case 'right': return [exitPosition[0]+1, exitPosition[1], exitPosition[2]+1];
        case 'up'   : return [exitPosition[0], exitPosition[1]-1, exitPosition[2]-nbCar];
        case 'down' : return [exitPosition[0], exitPosition[1]+1, exitPosition[2]+nbCar];
    }
}

// Afficher le chemin passé en paramètre
const drawThatWay = (thatWay, map) => {

    let theMap = map;
    for(let i=0; i<thatWay.length; i++) {
        theMap = theMap.substring(0, thatWay[i]) + road + theMap.substring(thatWay[i]+1);
    }
    console.log('\n'+theMap);
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);

// RESULT
// DISPLAY
if(validateArgs(arg)) console.warn(msgerr);
else foundShortWay(arg[0]);