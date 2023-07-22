
/** Terre : OK */

let adj = ["cool", "sympa", "super", "bien", "intéressant"];

let min = 0;
let max = adj.length-1;
let index = Math.floor(Math.random() * (max - min +1 ) + min);

console.log("J'ai terminé l'épreuve de la Terre et c'était "+ adj[index] +".");