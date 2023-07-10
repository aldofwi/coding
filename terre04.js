
let msgerr = "Tu ne me la mettras pas à l'envers.";

process.argv.forEach(function(val, index, array) { 
    
    if (index > 1) {

        val >= 0 && val%2 !== NaN ? isEven(val) : console.log(msgerr);
    }
});

function isEven(num) {

    num % 2 === 0 ? console.log("pair") : console.log("impair");

}   