
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
    
    for(let z=0; z<args.length; z++) {
        if(isNaN(args[z])) {
            if(args[z] === 'fusion') {
                fusion = true;
                index = z;
            } else return true;
        }
    }
    if(!fusion) return true;
}

createTable = (args) => {

    for(let a=0; a<args.length; a++) {
        if(a < index) tab1.push(+args[a]);
        else if(a > index) tab2.push(+args[a]);
    }

    for(let x=1; x<tab1.length-1; x++) {
        if(tab1[x] < tab1[x-1]) noargs = true;
    }

    for(let y=1; y<tab2.length-1; y++) {
        if(tab2[y] < tab2[y-1]) noargs = true;
    }

}

sorted_fusion = (tableau1, tableau2) => {

    let current = 0;
    let new_array = "";
    let tableau = tableau1;

    for(let c=0; c<tableau2.length; c++) {
        tableau.push(tableau2[c]);
    }

    for(let a=tableau.length; a>1; a--) {
        for(let b=0; b<a; b++) {
            // Si le courant est plus grand que le suivant
            // de la liste, on les échange, etc.
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
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);
if(!noargs) createTable(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(sorted_fusion(tab1, tab2));