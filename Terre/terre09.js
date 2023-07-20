
/** RACINE CARRE */

let noargs = false;
let msgerr = "erreur.";
let arg, result=0;

process.argv.forEach(function(val, index, array) { 
    if( array.length === 3 ){
        if (index === 2 ) { 
            arg = +val; 
            if( arg < 0 ) noargs = true;
        }
    } else {
        noargs = true;
    }
});

if (!noargs && !isNaN(arg)) {

    if(arg !== 0) {
        
        result = arg;

        while( result > (result+arg/result)/2 ) {
            result = (result+arg/result)/2 ;
        }

    }
    console.log(result);

} else {
    console.log(msgerr);
}

/*
let noargs = false;
let msgerr = "erreur.";
let arg, result=0;

process.argv.forEach(function(val, index, array) { 
    if( array.length === 3 ){
        if (index === 2 ) { 
            arg = +val; 
            if( arg < 0 ) noargs = true;
        }
    } else {
        noargs = true;
    }
});

if (!noargs && !isNaN(arg)) {

    if(arg !== 0) {
        result = arg ** 0.5;
    }
    console.log(result);

} else {
    console.log(msgerr);
}
*/

