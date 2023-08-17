
/** Evaluer une expression */

const msgerr = "error.";
let noargs = false;
let result = 0;
let nbOp = 0;

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

defineOp = (formule) => {
    // console.log(formule.charAt(2));
    for(let i=0; i<formule.length; i++) {

        if( formule.charAt(i) === "+" ||
            formule.charAt(i) === "-" || 
            formule.charAt(i) === "*" || 
            formule.charAt(i) === "/" || 
            formule.charAt(i) === "%" ) nbOp++;
    }

    console.log("nombre d'Op =", nbOp);
    console.log( calculate2Nb(3, '%', 2) );
}

searchParenthesis = (formule) => {

    let indexIn = 0;
    let indexOut = 0;
    let new_parenthesis = 0;

    for(let i=0; i<formule.length; i++) {
        if( formule.charAt(i) === "(" ) indexIn = i;
        else if ( formule.charAt(i) === ")" ) indexOut = i;
    }

    

    return new_parenthesis;
}


// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);
if(!noargs) defineOp(arg[0]);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(result);