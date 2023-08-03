
/** META */

const fs = require("fs");
const msgerr = "error.";
let noargs = false;

let current = process.argv.slice(1)[0];
let currentFile = current.slice(current.length-8, current.length);
let currentFolder = current.slice(0, current.length-8);

console.log("------------------------------");
console.log("currentFile :", currentFile);
console.log("currentFolder :", currentFolder);
console.log("------------------------------");

// FUNCTIONS
validateArgs = (args) => {
    return args.length !== 0 ;
}

checkPresence = () => {

    let title = "air0";
    let title1 = title.slice(0, title.length-1);

    for(let i=0; i<13; i++) {

        if(i<10) {
            fs.open(currentFolder+title+i+".js", 'r', (err, data) => {
                if(err) console.warn("File "+title+i+".js missing !");
                else console.log(title+i+".js exists.");
            });

            fs.

        } else {
            fs.open(currentFolder+title1+i+".js", 'r', (err, data) => {
                if(err) console.error("File "+title1+i+".js missing !");
                else console.log(title1+i+".js exists.");
            });
        }
    }
    console.log("------------------------------");

    
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else checkPresence();