
/** Mélanger 2 tableaux triés */

const msgerr = "error.";
let noargs = false;
let index = 0;
let tab1 = [];
let tab2 = [];

// FUNCTIONS
validateArgs = (args) => { 
    
    let fusion = false;
    if(args.length < 3) return true;
    
    for(let i=0; i<args.length; i++) {
        if(isNaN(args[i])) {
            if(args[i] === 'fusion') {
                fusion = true;
                index = i;
            } else return true;
        }
    }
    if(!fusion) return true;
}

createTable = (args) => {

    for(let i=0; i<args.length; i++) {
        if(i < index) tab1.push(+args[i]);
        else if(i > index) tab2.push(+args[i]);
    }

    for(let j=1; j<tab1.length-1; j++) {
        if(tab1[j] < tab1[j-1]) noargs = true;
    }

    for(let k=1; k<tab2.length-1; k++) {
        if(tab2[k] < tab2[k-1]) noargs = true;
    }

}

sorted_fusion = (tableau1, tableau2) => {

    let current = 0;
    let new_array = "";
    let tableau = tableau1;

    for(let k=0; k<tableau2.length; k++) {
        tableau.push(tableau2[k]);
    }

    for(let i=tableau.length; i>1; i--) {
        for(let j=0; j<i; j++) {
            // Si le courant est plus grand que le suivant
            // de la liste, on les échange, etc.
            if(tableau[j] > tableau[j+1]) {
                current = tableau[j];
                tableau[j] = tableau[j+1];
                tableau[j+1] = current;
            }
        }
    }

    for(let m=0; m<tableau.length; m++) {
        new_array += tableau[m]+" " ;
    }

    return new_array;
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);
if(!noargs) createTable(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(sorted_fusion(tab1, tab2));