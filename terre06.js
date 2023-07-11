
/** INVERSION */

let noargs = false;
let msgerr = "erreur.";
let chaine = "" ;

process.argv.forEach(function(val, index, array) { 
    
    if( array.length !== 3 ) {
        noargs = true;
    } else {
        
        if (index === 2) {

            for(let i=val.length-1; i>=0; i--) {
                chaine += val.charAt(i);
            }
        }
    }
}); 

if(!noargs) console.log(chaine)
else console.log(msgerr);