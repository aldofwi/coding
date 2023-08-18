
/** Evaluer une expression */

const msgerr = "error.";
let noargs = false;
let result = "";
let nbOp = 0;
let listOp = [];

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

// 4 + 21 * (1 - 2 / 2) + 38
// Recherche de Parenthèses
searchPriority = (formule) => {

    let indexOpen = 0;
    let indexClosed = 0;
    let parenthesis = false;
    let new_formula = "";

    for(let i=0; i<formule.length; i++) {
        if( formule.charAt(i) === "(" ) indexOpen = i;
        else if ( formule.charAt(i) === ")" ) {
            indexClosed = i;
            parenthesis = true;
        }
    }
    
    console.log("indexOpen =", indexOpen);
    console.log("indexClosed =", indexClosed);
    console.log("searchPriority (formule) -->", formule);
    new_formula = formule.slice(indexOpen+1, indexClosed);
    console.log("searchPriority (new_formula) -->", new_formula);

    if(parenthesis) {
        calculatePriority(new_formula);
    }

}

calculatePriority = (formule) => {

    let num1 = " ";
    let num2 = " ";
    let operation = "";
    let mark = 0;
    let indexIn = 0;
    let indexOut = 0;
    
    for(let i=0; i<formule.length; i++) {

        if( formule.charAt(i) === "*" || formule.charAt(i) === "/") {
            console.log("searchPriority (startIf) -->", formule);

            mark = i-2;
            operation = formule.charAt(i);
            while(  formule.charAt(mark) !== " " && mark >= 0 ) {
                mark--;
            }
            indexIn = mark+1;

            for(let j=mark+1; j<i-1; j++) {
                num1 += formule.charAt(j);
            }
            console.log("indexIn =", indexIn);
            
            if( formule.charAt(i+1) === " " ) mark = i+2;
            
            while(formule.charAt(mark) !== " " && mark < formule.length) {
                num2 += formule.charAt(mark);
                mark++;
                indexOut = mark;
            }
            console.log("indexOut =", indexOut);

            console.log("num1 =", +num1);
            console.log("num2 =", +num2);
            console.log("Slice =", formule.slice(indexIn, indexOut));
            console.log("Formule =", formule.replace(formule.slice(indexIn, indexOut), calculate2Nb(+num1, operation, +num2)));
        }
    }
}


// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);
if(!noargs) searchPriority(arg[0]);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else console.log(result);