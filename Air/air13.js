
/** META */

const {exec} = require("child_process");
const fs = require("fs");
const msgerr = "error.";
let noargs = false;

let current = process.argv.slice(1)[0];
let currentFile = current.slice(current.length-8, current.length);
let currentFolder = current.slice(0, current.length-8);
let currentCall = current.slice(current.length-12, current.length);

console.log("------------------------------");
console.log("currentCall :", currentCall);
console.log("currentFile :", currentFile);
console.log("currentFolder :", currentFolder);
console.log("------------------------------");

// FUNCTIONS
validateArgs = (args) => { return args.length !== 0; }

checkPresence = () => {

    let title = "air0";
    let title1 = title.slice(0, title.length-1);

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

    exec('npm --version', (error, stdout, stderr) => {
        console.log("------------------------------");
        console.log(`npm --version ${stdout.trim()}`);
        console.log("------------------------------");
    });

    launchScript();
    
}

launchScript = () => {
    
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

}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else checkPresence();