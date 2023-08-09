
/** META */

const {exec} = require("child_process");
const fs = require("fs");
const msgerr = "error.";
const extension = ".js";
let noargs = false;
let myParamsEntry = [
    ["Bonjour les gars"],
    ['"Bonjour les gars"', '"les"'],
    // [`"Bonjour les gars"`, `"les"`],
    // [`"`+`Bonjour les gars`+`"`, `"`+`les`+`"`],
    [`"`+"Everybody"+`"`, `"`+"wants"+`"`, `"`+"a"+`"`, `"`+"headline"+`"`, `"`+" "+`"`],
    [`"`+"1 2 3 4 5 4 3 2 1"+`"`],
    ["Hiii Guyyyz,     wwwwhats uuup ??"],
    ["10 11 12 20 -5"],
    ["Michel", "Albert", "Thérèse", "Benoît", "t"],
    ["10 20 30 40 50 60 70 90 35"],
    ["10 20 30 fusion 15 25 35"],
    ["Michel", "Albert", "Thérèse", "Benoît"],
    ["a.txt"],
    ["A 5"],
    ["9 5 8 7 3 1 4 2"],
];

let myParamsSorty = [
    ["Bonjour\nles\ngars\n"],
    ["Bonjour \ngars\n"],
    ["Everybody wants a headline \n"],
    ["5\n"],
    ["Hi Guyz, whats up ?\n"],

];

let current = process.argv.slice(1)[0];

console.log("------------------------------");
console.log("|           \x1b[31mMETA\x1b[0m             |");
console.log("------------------------------");

// FUNCTIONS
validateArgs = (args) => { return args.length !== 0; }

checkPresence = () => {

    let title = "air0";
    let title1 = title.slice(0, title.length-1);
    let currentFolder = current.slice(0, current.length-8);

    for(let i=0; i<13; i++) {

        if(i<10) {
            fs.open(currentFolder+title+i+".js", 'r', (err, data) => {
                if(err) console.warn("File "+title+i+".js missing !");
                else console.log(title+i+".js exists.");
            });
        } else {
            fs.open(currentFolder+title1+i+".js", 'r', (err, data) => {
                if(err) console.error("File "+title1+i+".js missing !");
                else console.log(title1+i+".js exists.");
            });
        }
    }

}

displayVersion = () => {

    exec('npm --version', (error, stdout, stderr) => {
        //console.log("------------------------------");
        console.log(`npm --version \x1b[93m${stdout.trim()} \x1b[0m`);
        console.log("------------------------------");
    });
}

launchScripts = () => {

    let indice = "0";
    let currentCall = current.slice(current.length-12, current.length);
    let body = currentCall.slice(0, currentCall.length-5)+"01"+extension;
    let liveParam = "";

    for(let i=1; i<2; i++) {

        if(i > 9) indice = "";
        body = currentCall.slice(0, currentCall.length-5)+indice+i+extension;

        for(let j=0; j<myParamsEntry[i].length; j++) {
            // liveParam += `"`+myParamsEntry[i][j]+`"`;
            liveParam += myParamsEntry[i][j];

            if(j !== myParamsEntry[i].length-1) liveParam += " ";
        }
        
        console.log("TAILLE :", myParamsEntry[i].length);
        console.log("ENTRY :\n", liveParam);
        console.log("SORTY :\n", myParamsSorty[i][0]);

        // exec(`node "${body}" "Bonjour les gars" "les"`, (error, stdout, stderr) => {
        exec(`node "${body}" "${liveParam}"`, (error, stdout, stderr) => {
            console.log("------------------------------");
            console.log(`Result ${body} : STDOUT\n${stdout}`);
            console.log("------------------------------");
            
            // for(let i=0; i<stdout.length; i++) { console.log(i+" "+stdout[i]); }
            if(stdout === myParamsSorty[i][0]) console.log("--> \x1b[92mSUCCESS\x1b[0m <--");
            else console.log("--> \x1b[31mFAILURE\x1b[0m <--");
            
            console.log(`Error Split : ${stderr.trim()}`);

            if(error) {
                console.log(`Error Split : ${stderr.trim()}`);
                console.log("\n------------------------------");
            }
        });
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
    launchScripts();
    displayVersion();
}


/*

let currentFile = current.slice(current.length-8, current.length);

console.log("------------------------------");
console.log("\x1b[31m currentCall : \x1b[0m", currentCall);
console.log("currentFile :", currentFile);
console.log("currentFolder :", currentFolder);
console.log("------------------------------");

exec('echo "They gave ME the KEY to the SKY." | cat > a.txt', (error, stdout, stderr) => {
    console.log("------------------------------");
    console.log(`${stdout.trim()}`);
    console.log("------------------------------");
});

exec('node Air/air10.js a.txt', (error, stdout, stderr) => {
    console.log("------------------------------");
    console.log(`FILE : ${stdout.trim()}`);
    console.log("------------------------------");
});

// Old launch script

    let extension = ".js";
    let body = currentCall.slice(0, currentCall.length-5)+"01"+extension;
    let param = "Bonjour les gars ";
    let param1 = "les";

    exec(`node "${body}" "${param}" "${param1}"`, (error, stdout, stderr) => {
        console.log("\n------------------------------");
        console.log(`Result PG :\n${stdout}`);
        console.log("\n------------------------------");
        console.log(`Error Split : ${stderr.trim()}`);
        console.log("\n------------------------------");
    });

*/