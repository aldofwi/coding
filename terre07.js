
/** TAILLE */

let noargs = false;
let msgerr = "erreur.";
let taille ;

process.argv.forEach(function(val, index, array) { 
    
    if( array.length !== 3 ) {
        noargs = true;
    }  else {
        
        if (index === 2) {

            // console.log(val / val);

            if(val / val === 1) {
                noargs = true;
            }
        }
            // console.log(typeof val)
            taille = val.length;
    }
});

if(!noargs) console.log(taille)
else console.log(msgerr);