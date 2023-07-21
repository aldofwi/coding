
/** Tri à Bulles */

let noargs = false;
let msgerr = "error.";
let new_array = "";
let nbs = [];

// FUNCTIONS
checkArgs = (args) => {

    if(args.length < 1) noargs = true;
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

my_bubble_sort = (tableau) => {

    let current = 0;
    for(let a=tableau.length; a>1; a--) {
        for(let b=0; b<a; b++) {

            if(tableau[b] > tableau[b+1]) {
                current = tableau[b];
                tableau[b] = tableau[b+1];
                tableau[b+1] = current;
            }
        }
    }

    for(let i=0; i<tableau.length; i++) {
        new_array += tableau[i]+" " ;
    }

    return new_array;
}

// ERRORS
// PARSING
let myArgs = process.argv.slice(2);
checkArgs(myArgs);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(my_bubble_sort(nbs));