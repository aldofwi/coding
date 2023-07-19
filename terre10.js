
/** NOMBRE PREMIER */

let noargs = false;
let msgerr = "erreur.";
let nombre;

process.argv.forEach(function(val, index, array) { 
    if( array.length === 3 ){
        if (index === 2 ) { 
            nombre = +val; 
            if( nombre < 0 ) noargs = true;
        }
    } else {
        noargs = true;
    }
});

if (!noargs && !isNaN(nombre)) {

    if(nombre === 2 || nombre === 3) {
        console.log("Oui, "+ nombre+" est un nombre premier.");
    } else if(  nombre === 0 || nombre === 1 || nombre%2 === 0 || 
                nombre%3 === 0 || nombre%5 === 0 || nombre%7 === 0) {
        console.log("Non, "+ nombre+" n'est pas un nombre premier.");
    } else {
        console.log("Oui, "+ nombre+" est un nombre premier.");
    }

} else {
    console.log(msgerr);
}