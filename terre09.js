
/** RACINE CARRE */

let noargs = false;
let msgerr = "erreur.";
let arg, result=0;

process.argv.forEach(function(val, index, array) { 
    if( array.length === 3 ){
        if (index === 2 ) { 
            arg = +val; 
            if( arg < 0) noargs = true;
        }
    } else {
        noargs = true;
    }
});

if (!noargs) {

    if(arg === 0) console.log(result);
    else {
        result = arg ** 0.5;
    }

    console.log(result);
} else {
    console.log(msgerr);
}


