
/** Le Roi des tris */

const msgerr = "error.";
let noargs = false;
let index = 0;
let tab = [];

// FUNCTIONS
validateArgs = (args) => { 
    if(args.length < 2) return true;
    
    for(let i=0; i<args.length; i++) {
        if(isNaN(args[i])) return true;
    }

    for(let k=0; k<args.length; k++) {
        tab.push(+args[k]);
    }
}

echanger = (tab, a, b) => {

    let temp = tab[a];
    tab[a] = tab[b];
    tab[b] = temp;
}

myQuickSort = (tableau, debut, fin) => {

    let gauche = debut;
    let droite = fin;
    const pivot = tableau[debut];
    // Pivot situé au début, plus safe qu'au milieu.

    if(gauche >= droite) return;

    while(1) {
        while(tableau[droite] > pivot) droite--;
        // Vérification des valeurs par rapport au pivot.
        while(tableau[gauche] < pivot) gauche++;
        // Vérification de la position des index.
        if(gauche < droite) echanger(tableau, gauche, droite);
        else break;
    }

    myQuickSort(tableau, debut, droite);
    myQuickSort(tableau, droite+1, fin); // out of bounds  

    return tableau;
}

displayTab = (tableau) => {

    let new_array = "";

    for(let i=0; i<tableau.length; i++) {
        new_array += tableau[i]+" " ;
    }

    return new_array;
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(displayTab(myQuickSort(tab, 0, tab.length-1)));