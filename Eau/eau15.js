
/** Eau : OK */

let adj = ["instructif", "pas mal", "utile", "très logique", "inspirant"];
// FUNCTIONS
// ERRORS
// PARSING
// RESULT
// DISPLAY
let min = 0;
let max = adj.length-1;
// let min = Math.ceil(0);
//let max = Math.floor(adj.length);
let index = Math.floor(Math.random() * (max - min +1 ) + min);
console.log(index);

console.log("J'ai terminé l'épreuve de l'Eau et c'était "+ adj[index] +".");
