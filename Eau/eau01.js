
/** COMBINAISONS 2 Nombres */

let chiffres = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let nombres = []; let result = [];
let index1 = 0; let index2 = 0;

// FUNCTIONS
function isTheSame(nombre1, nombre2) {
    return nombre1 === nombre2;
}

function increasing(nombre1, nombre2) {
    return +nombre1 < +nombre2;
}

// ERRORS
// PARSING
for(let i=0; i<chiffres.length; i++) {
    for(let j=0; j<chiffres.length; j++) {

        nombres[index1] = chiffres[i]+chiffres[j];
        index1++;
    }
}

// RESULT
for(let i=0; i<nombres.length; i++) {
    for(let j=0; j<nombres.length; j++) {

        if( !isTheSame(nombres[i], nombres[j]) && increasing(nombres[i], nombres[j])) {

            result[index2] = nombres[i]+' '+nombres[j];
            index2++;
        }
    }
}

// DISPLAY
for(let m=0; m<result.length; m++) {
    console.log(result[m]);
}