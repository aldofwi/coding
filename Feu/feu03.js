
/** Sudoku */

const fs = require("fs");
const msgerr = "error.";
let checkPoints = [];

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

// Display grid as Sudoku Grid layer.
const displaySudoku = (grid) => {

    console.log("!Sudoku Grid!\n");

    if(grid.length<=0) console.log("[empty]\n");
    else {
        let sudoGrid = "";
        let lines=0;
        let i=0;
        while(grid.charCodeAt(i) !== 10) {
            sudoGrid += "-";
            i++;
        }
        sudoGrid += "----\n";

        let j=0;
        for(let i=0; i<grid.length; i++) {

            if(grid.charCodeAt(i) === 10) {
                lines++;
                sudoGrid += "|\n";
                j=0;
                if(lines%3 === 0) {
                    let k=0;
                    while(grid.charCodeAt(k) !== 10) {
                        sudoGrid += "-";
                        k++;
                    }
                    sudoGrid += "----\n";
                }
            } else {
                if(j === 0 || j === 3 || j === 6) sudoGrid += "|";
                else if(j === 9)  sudoGrid += "\n";
                
                if(checkPoints.includes(i)) {
                    sudoGrid += "\x1b[31m"+grid[i]+"\x1b[0m";
                } else {
                    sudoGrid += grid[i];
                }
                j++;
            }

        }
        console.log(sudoGrid);
    }
    
}

// Check how much element missing on square. [0..8]
const checkSquare = (index) => {

    console.log("checkSquare()");
}

// Returns new grid switching columns into lines.
const columnToLine = (gridParam) => {

    let i=0;
    let k=0;
    let piece = "";
    let newGrid = "";
    // Switcher les 9 colonnes from [0..8].
    while(gridParam.charCodeAt(k) !== 10) {
        i=k;
        piece="";
        // Stockage de bonnes lignes.
        while(i < gridParam.length) {
            piece += gridParam.charAt(i);
            i+=10;
        }
        k++;
        newGrid += piece+'\n';
    }
    return newGrid;
}

// Returns new line with missing element. [0..8]
const checkLine = (line) => {

        let newLine = "";
        let missing=0;

        for(let i=0; i<line.length; i++) {
            if(line.charAt(i) === '.') missing++;
        }
        if(missing > 1) return line+'\n';

        for(let j=0; j<line.length; j++) {
            if(line.charAt(j) === '.') { 
                newLine += whosMissing(line);
            } else {
                newLine += line.charAt(j); 
            }
        }
        newLine += '\n';
        return newLine;
}

// Saves all points missing in the grid.
const saveMissingPlaces = (gridInit) => {

    for(let i=0; i<gridInit.length; i++) {
        if(gridInit.charAt(i) === '.') checkPoints.push(i);
    }
}

// Count number of dots still existing
const dotCounting = (gridCurrent) => {

    let count=0;
    for(let i=0; i<gridCurrent.length; i++) {
        if(gridCurrent.charAt(i) === '.') count++;
    }
    return count;
}

// Resole each line first, each column after.
const resolveSudoku = (fichier) => {

    fs.readFile(fichier, 'utf8', (err, data) => {
        if(err) console.warn(msgerr);

        let gridLine = "";
        let gridCol = "";
        let grid = "";
        let part = "";
        let i=0;
        // Garder les positions manquantes.
        saveMissingPlaces(data);
        displaySudoku(data);

        // Résoudre les 9 premières lignes.
        for(let j=0; j<data.length; j=j+10) {
            i=j;
            part="";
            // Stockage de lignes.
            while(data.charCodeAt(i) !== 10) {
                part += data.charAt(i);
                i++;
            }
            gridLine += checkLine(part);
        }

        i=0;
        let k=0;
        // Résoudre les 9 premières colonnes.
        while(gridLine.charCodeAt(k) !== 10) {
            i=k;
            part="";
            // Stockage de colonnes.
            while(i < gridLine.length) {
                part += gridLine.charAt(i);
                i+=10;
            }
            k++;
            gridCol += checkLine(part);
        }
        // Remettre les colonnes en ligne.
        grid = columnToLine(gridCol);

        displaySudoku(grid);
    });

}

// Returns the missing element among 9 caracterz.
const whosMissing = (line) => {

    let chiffres = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(let i=0; i<line.length; i++) {   
        if(!line.includes(chiffres[i])) return chiffres[i];
    }
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);

// RESULT
// DISPLAY
if(validateArgs(arg)) console.warn(msgerr);
else resolveSudoku(arg[0]);