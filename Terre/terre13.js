
/** Sorted or Not */

let temp;
let noargs = false;
let msgerr = "erreur.";

let sorted = false;
let arg = []; 

process.argv.forEach(function(val, index, array) { 
    if( array.length > 3 ){
        if(index>1) {
            arg[index-2] = +val;
            if(isNaN(arg[index-2])) noargs = true;
        }   
    } else { noargs = true; }
});

for(let i=1; i<arg.length; i++) {

    if(arg[i-1] < arg[i]) {
        sorted = true;
    } else {
        sorted = false;
        break;
    }
}

if( !sorted ) {

    for(let k=1; k<arg.length; k++) {

        if(arg[k-1] > arg[k]) {
            sorted = true;
        } else {
            sorted = false;
            break;
        }
    }
}

if (noargs) console.log(msgerr)
else {
    if (sorted) console.log("\n Triée !");
    else console.log("\n Pas triée !");
}
