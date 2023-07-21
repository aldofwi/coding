
/** Trouver la Suisse */

let temp;
let noargs = false;
let msgerr = "erreur.";
let arg = []; let result = [];

process.argv.forEach(function(val, index, array) { 
    if( array.length === 5 ){
        if(index>1) {
            arg[index-2] = +val;
            if(isNaN(arg[index-2])) noargs = true;
        }
    } else noargs = true;
});

if( arg[0] === arg[1] || arg[1] === arg[2] || arg[0] === arg[2] ) {
    noargs = true;
}

if ( !noargs ) {
    result = arg;

    for(let j=0; j<arg.length; j++) {
        for(let i=0; i<arg.length; i++) {

            if( arg[i] > result[j] ) {
                temp = arg[i];
                arg[i] = result[j];
                result[j] = temp;
            } 
        }
    }
    console.log(result[1]);
}

if(noargs) console.log(msgerr);