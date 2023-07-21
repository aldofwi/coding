
/** Différence Minimum Absolue */

let noargs = false;
let msgerr = "error.";
let result = -1;
let current = [];
let nbs = [];

// FUNCTIONS
checkArgs = (args) => {

    if(args.length < 2) noargs = true;
    else {
        for(let k=0; k<args.length; k++) {
            if(!isNaN(+args[k])) {
                nbs[k] = +args[k];
                
            } else {
                noargs = true;
                return;
            }
        }
        // console.log(nbs);
    }
}

foundDifference = (tableau) => {

    let index=0;
    let nombre; 
    if(tableau.length > 0) {
        for(let a=0; a<tableau.length; a++) {

            nombre = tableau[a];
            for(let b=0; b<tableau.length; b++) {

                if(a !== b && nombre >= tableau[b]) {
                    current[index] = nombre - tableau[b];
                    index++;
                }
            }
        }
        // console.log(current);
    }
}

foundMinimum = () => {

    if(current.length > 0) {

        if(current.length === 0) result = current[0];
        else {
            result = current[0];
            for(let i=1; i<current.length; i++) {
                if(current[i] <= result) result = current[i];
            }
        }
    }
}

// ERRORS
// PARSING
let myArgs = process.argv.slice(2);
checkArgs(myArgs);
foundDifference(nbs);
foundMinimum(current);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(result);