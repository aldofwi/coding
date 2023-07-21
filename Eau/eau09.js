
/** MIN & MAX */

let noargs = false;
const msgerr = "error.";
let num1=0, num2=0;
let result = "";

// FUNCTIONS
checkArgs = () => {
    if(process.argv.length !== 4) noargs = true;
    else {
        let args = process.argv.slice(2);
        num1 = args[0]; num2 = args[1];
        if(!controlParams(num1) || !controlParams(num2) || +args[0] >= +args[1]) noargs = true;
    }
}

controlParams = (param) => {

    let value = false;
    for(let a=0; a<param.length; a++) {
        if(param[a].charCodeAt(0) >= 65 && param[a].charCodeAt(0) <= 122) {
            value = false;
        } else value = true;
    }
    return value;
}

displayInterval = (nb1, nb2) => {
    let current = nb1++;
    while(current < nb2) {
        result += current+" ";
        current++;
    }
}
// ERRORS
// PARSING
checkArgs();
// RESULT
// DISPLAY
if(noargs) console.warn(msgerr);
else {
    displayInterval(num1, num2);
    console.log(result);
}