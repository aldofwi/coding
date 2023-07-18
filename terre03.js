
/** ALPHABET INDEX */

let result = "";

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
let id = 0;
let noargs = false;
let msgerr = "erreur.";

process.argv.forEach(function(val, index, array) { 

if( array.length !== 3 ) {
    noargs = true;
} else {

    let character = process.argv.slice(2)[0];

    if(index === 2) {
        console.log(character);

        while(id <= alphabet.length) {
            if(val !== alphabet[id]) noargs = true
            else {
                noargs = false; break
            }
            id++;
        }

        console.log(noargs);

        if(!noargs) {
            for(let i=alphabet.indexOf(character); i<alphabet.length; i++){
                result += alphabet[i];
            }
        }
    }
}
});

if(noargs) console.warn(msgerr)
else console.log(result+"\n");


// console.log(character);
// console.log(alphabet.indexOf(character));