'use strict'

// function first(){
//    // code
//     setTimeout(() => {
//    console.log(1);
//     }, 1000);
// }
//
// function second(){
//     // code
//     console.log(2);
// }
// first();
// second();

function first(callback){
   // code
    setTimeout(() => {
   console.log(1);
   callback();
    }, 3000);
}

function second(){
    // code
    console.log(2);
}
first(second);



function edu(subject, callback){
    console.log(`I wanna teach ${subject}`);
    callback();
}
// first
edu("JavaScript1", function (){
    console.log("That's great1");
})

//second
function done(){
    console.log("That's great2");
}
edu("JavaScript2", done);



