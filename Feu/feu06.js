
/** Feu : OK */

let adj = ["intense", "addictif", "intéressant", "perturbant", "jouissif"];
let min = 0;
let max = adj.length-1;

// FUNCTIONS
// ERRORS
// PARSING
// RESULT
let index = Math.floor(Math.random() * (max - min +1 ) + min);

// DISPLAY
console.log("J'ai terminé l'épreuve du Feu et c'était "+ adj[index] +"!");

