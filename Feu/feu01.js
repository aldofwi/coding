
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

// 4 + 21 * (1 - 2 / 2) + 38

searchPriority = (formule) => {

    let num1 = " ";
    let num2 = " ";
    let mark = 0;
    let indexIn = 0;
    let indexOut = 0;
    let new_parenthesis = "";

    for(let i=0; i<formule.length; i++) {
        if( formule.charAt(i) === "(" ) indexIn = i;
        else if ( formule.charAt(i) === ")" ) indexOut = i;
    }

    // Si on ne trouve pas de parenthèses
    if(indexIn === 0 || indexOut === 0) {
        for(let i=0; i<formule.length; i++) {

            if(formule.charAt(i) === "*" && formule.charAt(i-1) === " ") {
                mark = i-2;
                while(formule.charAt(mark) !== " ") {
                    mark--;
                }
                console.log("mark =", mark);
                console.log("indexIn =", indexIn);
                console.log("chiffre =", formule.charAt(mark+1));

                for(let j=mark+1; j<i-1; j++) {
                    num1 += formule.charAt(j);
                }
                
                if(formule.charAt(i+1) === " ") mark = i+2;
                
                while(formule.charAt(mark) !== " ") {
                    num2 += formule.charAt(mark);
                    mark++;
                }

                console.log("num1 =", +num1);
                console.log("num2 =", +num2);
                console.log("Result = ", +num1 * +num2);

            }
        }
    }
    
    return new_parenthesis;
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