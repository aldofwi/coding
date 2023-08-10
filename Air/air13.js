
/** META */

const {exec} = require("child_process");
const fs = require("fs");
const msgerr = "error.";
const extension = ".js";
let absence = false;
let noargs = false;
let nbSuccess = 0;
let current = process.argv.slice(1)[0];

let myParams3DEntry = [
    [
        [`"`+"Bonjour les gars"+`"`],
        [`"`+"Hello my people"+`"`],
        [`"`+"Comment tu vas"+`"`],
    ],
    [
        [`"`+"Bonjour les gars"+`"`,`"`+"les"+`"`],
        [`"`+"Hello my people"+`"`,`"`+"my"+`"`],
        [`"`+"Comment tu vas"+`"`,`"`+"tu"+`"`],
    ],
    [
        [`"`+"Everybody"+`"`, `"`+"wants"+`"`, `"`+"a"+`"`, `"`+"headline"+`"`, `"`+" "+`"`],
        [`"`+"They"+`"`, `"`+"gave"+`"`, `"`+"me"+`"`, `"`+"everything"+`"`, `"`+" "+`"`],
        [`"`+"How"+`"`, `"`+"is"+`"`, `"`+"it"+`"`, `"`+"working"+`"`, `"`+" "+`"`],
    ],
    [
        ["1 2 3 4 5 4 3 2 1"],
        ["10 20 30 40 50 40 30 20 10"],
        [`"`+"bonjour"+`"`, `"`+"monsieur"+`"`, `"`+"bonjour"+`"`],    
    ],
    [
        [`"`+"Hiii Guyyyz,     wwwwhats uuup ??"+`"`],
        [`"`+"Hola milady,     bien ou quoi ??"+`"`],
        [`"`+"Heeee poooto,     tuuu deeesceeends ??"+`"`],
    ],
    [
        ["10 11 12 20 -5"],
        ["1 2 3 4 +2"],
        ["6 8 12 24 +10"],
    ],
    [
        [`"`+"Michel"+`"`, `"`+"Albert"+`"`, `"`+"Thérèse"+`"`, `"`+"Benoît"+`"`, `"`+"t"+`"`],
        [`"`+"Michel"+`"`, `"`+"Albert"+`"`, `"`+"Thérèse"+`"`, `"`+"Benoît"+`"`, `"`+"a"+`"`],
        [`"`+"Michel"+`"`, `"`+"Albert"+`"`, `"`+"Thérèse"+`"`, `"`+"Benoît"+`"`, `"`+"r"+`"`],
    ],
    [
        ["10 20 30 40 50 60 70 90 35"],
        ["1 2 3 5 6 7 9 4"],
        ["23 56 78 99 100 85"],
    ],
    [
        ["10 20 30 fusion 15 25 35"],
        ["11 22 33 fusion 12 23 34"],
        ["1 5 7 fusion 3 6 9"],
    ],
    [
        [`"`+"Michel"+`"`, `"`+"Albert"+`"`, `"`+"Thérèse"+`"`, `"`+"Benoît"+`"`],
        [`"`+"Riri"+`"`, `"`+"Fifi"+`"`, `"`+"Loulou"+`"`, `"`+"Picsou"+`"`],
        [`"`+"Atos"+`"`, `"`+"Portos"+`"`, `"`+"Aramis"+`"`, `"`+"Dartagnan"+`"`],
    ],
    [
        ["a.txt"],
        ["b.txt"],
        ["c.txt"],
    ],
    [
        ["A 5"],
        ["O 3"],
        ["Y 4"],
    ],
    [
        ["9 5 8 7 3 1 4 2"],
        ["19 5 28 7 13 41 4 22"],
        ["60 55 20 90 85 70 15"],
    ],

];

let myParams3DSorty = [
    [
        ["Bonjour\nles\ngars\n"],
        ["Hello\nmy\npeople\n"],
        ["Comment\ntu\nvas\n"],
    ],
    [
        ["Bonjour \ngars\n"],
        ["Hello \npeople\n"],
        ["Comment \nvas\n"],
    ],
    [
        ["Everybody wants a headline\n"],
        ["They gave me everything\n"],
        ["How is it working\n"],
    ],
    [
        ["5\n"],
        ["50\n"],
        ["monsieur\n"],
    ],
    [
        ["Hi Guyz, whats up ?\n"],
        ["Hola milady, bien ou quoi ?\n"],
        ["He poto, tu descends ?\n"],
    ],
    [
        ["5 6 7 15 \n"],
        ["3 4 5 6 \n"],
        ["16 18 22 34 \n"],
    ],
    [
        ["Michel\n"],
        ["Michel, Thérèse, Benoît\n"],
        ["Michel, Benoît\n"],
    ],
    [
        ["10 20 30 35 40 50 60 70 90 \n"],
        ["1 2 3 4 5 6 7 9 \n"],
        ["23 56 78 85 99 100 \n"],
    ],
    [
        ["10 15 20 25 30 35 \n"],
        ["11 12 22 23 33 34 \n"],
        ["1 3 5 6 7 9 \n"],
    ],
    [
        ["Albert, Thérèse, Benoît, Michel\n"],
        ["Fifi, Loulou, Picsou, Riri\n"],
        ["Portos, Aramis, Dartagnan, Atos\n"],    
    ],
    [
        ["They gave ME the KEY to the SKY.\n"],
        ["They gave ME the KEY to the SKY.\n"],
        ["They gave ME the KEY to the SKY.\n"],
    ],
    [
        ["    A\n   AAA\n  AAAAA\n AAAAAAA\nAAAAAAAAA\n"],
        ["  O\n OOO\nOOOOO\n"],
        ["   Y\n  YYY\n YYYYY\nYYYYYYY\n"],
    ],
    [
        ["1 2 3 4 5 7 8 9 \n"],
        ["4 5 7 13 19 22 28 41 \n"],
        ["15 20 55 60 70 85 90 \n"],
    ],
];

console.log("------------------------------");
console.log("|           \x1b[31mMETA\x1b[0m             |");
console.log("------------------------------");

// FUNCTIONS
validateArgs = (args) => { return args.length !== 0; }

/** Contrôler la présence des programmes */
checkPresence = () => {

    let title = "air0";
    let title1 = title.slice(0, title.length-1);
    let currentFolder = current.slice(0, current.length-8);

    for(let i=0; i<13; i++) {

        if(i<10) {
            fs.open(currentFolder+title+i+".js", 'r', (err, data) => {
                if(err) {
                    console.warn("File "+title+i+".js missing !"); absence = true;
                } // else console.log(title+i+".js exists.");
            });
        } else {
            fs.open(currentFolder+title1+i+".js", 'r', (err, data) => {
                if(err) {
                    console.error("File "+title1+i+".js missing !"); absence = true;
                } // else console.log(title1+i+".js exists.");
            });
        }
    }

}

/** Afficher le taux de réussite */
displayVersion = () => {

    let nbTests = 0;
    for(let i=0; i<myParams3DEntry.length; i++) {
        for(let j=0; j<myParams3DEntry[i].length; j++) {
            nbTests++; 
        }
    }

    exec('npm --version', (error, stdout, stderr) => {
        console.log("------------------------------");
        console.log(`Total Success : \x1b[37m(${nbSuccess}/${nbTests}) \x1b[0m`);
        console.log("------------------------------");
        console.log(`npm --version \x1b[93m${stdout.trim()} \x1b[0m`);
        console.log("------------------------------");
    });
}

/** Construire les paramètres à exécuter */
buildParams = (number, value) => {

    let param = "";
    for(let k=0; k<myParams3DEntry[number][value].length; k++) {
        param += myParams3DEntry[number][value][k];
        if(k !== myParams3DEntry[number][value].length-1) param += " ";
    }

    return param;
}

/** Lancer les scripts à la chaîne */
launchScripts = () => {

    let indice = "0";
    let currentCall = current.slice(current.length-12, current.length);
    let body = currentCall.slice(0, currentCall.length-5)+"01"+extension;

    // for(let i=12; i<13; i++) {
    for(let i=0; i<myParams3DEntry.length; i++) {
        for(let j=0; j<myParams3DEntry[i].length; j++) {

            if(i > 9) indice = "";
            else indice = "0";
            body = currentCall.slice(0, currentCall.length-5)+indice+i+extension;
            titre = currentCall.slice(4, currentCall.length-5)+indice+i+extension;
            /*
            console.log("TAILLE :", myParamsEntry[i].length);
            console.log("ENTRY :\n", buildParams(i));
            console.log("SORTY :\n", myParamsSorty[i][0]);
            */

            exec(`node "${body}" ${buildParams(i,j)}`, (error, stdout, stderr) => {
                // console.log("------------------------------");
                // console.log(`Result ${body} : STDOUT\n${stdout}`);
                // console.log("------------------------------");
                //for(let i=0; i<stdout.length; i++) { console.log(i+" "+stdout[i]); }
                if(i > 9) indice = "";
                else indice = "0";
                if(stdout === myParams3DSorty[i][j][0]) {
                    nbSuccess++;
                    console.log(currentCall.slice(4, currentCall.length-5)+indice+i+extension,
                    "("+(j+1)+"/"+myParams3DSorty[i].length+")", ": \x1b[92mSuccess\x1b[0m");
                } else {
                    console.log(currentCall.slice(4, currentCall.length-5)+indice+i+extension,
                    "("+(j+1)+"/"+myParams3DSorty[i].length+")", ": \x1b[31mFailure\x1b[0m");
                }
                /*
                if(stderr) {
                    console.log(`Error Split : ${stderr.trim()}`);
                    console.log("\n------------------------------");
                }
                */
            });
        }
    }
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else {
    checkPresence();
    if(!absence) {
        launchScripts();
        displayVersion();
    } 
}