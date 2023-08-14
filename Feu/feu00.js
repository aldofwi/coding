
/** Echauffement */

const msgerr = "error.";
let noargs = false;
let result = "";
const edge = "o";
const dash = "-";
const side = "|";

// FUNCTIONS
validateArgs = (args) => { 
    return (args.length !== 2 || isNaN(arg[0]) || isNaN(arg[1])); 
}

displayRectangle = (elements, lines) => {

    for(let i=0; i<lines; i++) {
        // Si première ou dernière ligne, on met les bords.
        if(i === 0 || i === lines-1) {
            result += edge;
            for(let j=0; j<elements-2; j++) {
                result += dash;           
            }
            if(elements > 1) result += edge;
        // Sinon, on remplit le corps.
        } else {
            result += side;
            for(let j=0; j<elements-2; j++) {
                result += " ";           
            }
            if(elements > 1) result += side;
        }
        console.log(result);
        result = "";
    }
}

// ERRORS
// PARSING
let arg = process.argv.slice(2); 
noargs = validateArgs(arg);

// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else displayRectangle(arg[0], arg[1]);