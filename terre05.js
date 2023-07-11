
let noargs = false;
let msgerr = "erreur.";
let arg1, arg2;

process.argv.forEach(function(val, index, array) { 
    
    if( array.length !== 4 ) {
        
        noargs = true;
    } else {

        if (index === 2) { arg1 = val; }
        if (index === 3) { arg2 = val; }
    }
});

if(!noargs && arg1 >= arg2 && arg2 !== '0') {
    let reste = arg1 % arg2;
    let total = (arg1-reste) / arg2;
    console.log("résultat : "+ total+"\nreste : "+ reste);
} else {
    console.log(msgerr);
}
