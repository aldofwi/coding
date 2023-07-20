
/** 24 to 12 */

let noargs = false;
let msgerr = "erreur.";
let time, hour, minute;

process.argv.forEach(function(val, index, array) { 
    if( array.length === 3 ){
        if (index === 2 ) { 
            time = val; 
            if( time[2] !== ':' || time.length !== 5 ) noargs = true;
        }
    } else {
        noargs = true;
    }
});
// 23:40 --> 11:40PM
hour = time[0]+time[1]; hour = +hour;
minute = time[3]+time[4]; minute = +minute;

if(minute<10) minute='0'+minute;

if( !noargs && hour>=0 && minute>=0 && hour<24 && minute<60 ) {

    if ( hour<12 ) {
        if( hour === 00 ){
            console.log('12'+':'+minute+"AM");
        } else {
            console.log(hour+':'+minute+"AM");
        }
    } 
    else if( hour === 12 ) {
        console.log(hour+':'+minute+"PM");
    } else {
        hour=hour-12;
        console.log(hour+':'+minute+"PM");
    }

} else {
    noargs = true;
}

if(noargs) console.log(msgerr);