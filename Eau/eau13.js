
/** Tri par Sélection */

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

my_select_sort = (tableau) => {

    let current = 0; // let min;
    for(let a=0; a<tableau.length-1; a++) {
        for(let b=a+1; b<tableau.length; b++) {
            // Si suivant est plus petit que le premier
            // de la liste, On les échange, etc.
            if(tableau[b] < tableau[a]) {
                current = tableau[b];
                tableau[b] = tableau[a];
                tableau[a] = current;
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
else console.log(my_select_sort(nbs));