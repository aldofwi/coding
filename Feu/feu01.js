
/** Evaluer une expression */

const operations = ["*", "/", "%", "+", "-"];
const msgerr = "error.";
let noargs = false;
let result = "";

// FUNCTIONS
validateArgs = (args) => {
    return (args.length < 1); 
}

calculate2Nb = (nb1, operation, nb2) => {

    switch(operation) {
        case "+" : return nb1 + nb2;
        case "-" : return nb1 - nb2;
        case "*" : return nb1 * nb2;
        case "/" : return nb1 / nb2;
        case "%" : return nb1 % nb2;
        default : break;
    }
}

getNbOp = (formule) => {

    let nb = 0;
    if(!noargs) {

        for(let i=0; i<formule.length; i++) {

            if( formule.charAt(i) === "*" ||
                formule.charAt(i) === "/" ||
                formule.charAt(i) === "+" ||
                formule.charAt(i) === "-" ||
                formule.charAt(i) === "%" ) nb++;
        }
        return nb;
    }   
}

calculatePriority = (formule) => {

    let num1 = "";
    let num2 = "";
    let nbOp = 0;
    let mark = 0;
    let res = 0;
    let indexIn = 0;
    let indexOut = 0;
    let indexOpen = 0;
    let indexClosed = 0;

    nbOp = getNbOp(formule);

    while(nbOp > 0) {
        // Tant qu'il y a des op à calculer.
        for(let i=0; i<formule.length; i++) {

            if( formule.charAt(i) === "(" ) indexOpen = i;
            else if ( formule.charAt(i) === ")" ) {
                indexClosed = i;
                // Si présence de (), On calcule la formule entre parenthèses.
                res = calculatePriority(formule.slice(indexOpen+1, indexClosed));
                // On remplace la parenthèse par le résultat obtenu & on continue.
                formule = formule.replace(formule.slice(indexOpen, indexClosed+1), res);
            }
        }
        // On parcourt la formule jusqu'à l'op prioritaire.
        for(let k=0; k<operations.length; k++) {
            for(let i=0; i<formule.length; i++) {
                
                if( formule.charAt(i) === operations[k]) {
                    mark = i-2;
                    while( formule.charAt(mark) !== " " && mark >= 0 ) {
                        mark--;
                    }
                    indexIn = mark+1;
        
                    for(let j=indexIn; j<i-1; j++) {
                        num1 += formule.charAt(j);
                    }
                    
                    if( formule.charAt(i+1) === " " ) mark = i+2;
                    while( formule.charAt(mark) !== " " && mark < formule.length ) {
                        num2 += formule.charAt(mark);
                        mark++;
                        indexOut = mark;
                    }
                    // Quand on trouve l'Op prioritaire, on remplace la formule avec le résultat.
                    formule = formule.replace(formule.slice(indexIn, indexOut), calculate2Nb(+num1, operations[k], +num2));
                    num1 = "";
                    num2 = "";
                }
            }
        }
        nbOp--;
    }
    return formule;
}

// ERRORS
// PARSING
let arg = process.argv.slice(2);
if(!noargs) result = calculatePriority(arg[0]);
// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(result);