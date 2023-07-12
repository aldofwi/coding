
/** PUISSANCE */

let noargs = false;
let msgerr = "erreur.";
let arg1, arg2, result=1;

process.argv.forEach(function(val, index, array) { 
    
    if( array.length !== 4 ) noargs = true;
    else {

        if (index === 2) { arg1 = +val; }
        if (index === 3) { arg2 = +val; }
    }
});

if( !noargs && !isNaN(arg1) && arg2 >= 0 ) {

    if(arg2 !== 0) {
        result = arg1;

        for(let i=1; i<arg2; i++){

            result *= arg1;
        }
    }

    console.log(result);
} else {
    console.log(msgerr);
}
