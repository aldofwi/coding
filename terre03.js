
let result = "";

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

let character = process.argv.slice(2);

for(let i=alphabet.indexOf(character); i<alphabet.length; i++){

    result += alphabet[i];

}

console.log(result);

console.log("\n");