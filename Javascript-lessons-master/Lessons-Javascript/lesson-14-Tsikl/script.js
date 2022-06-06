'use strict'

let number = 1;

// FIRST
// while (number <= 100) {
//     console.log(number);
//     number ++;
// }

//SECOND
// do {
//     console.log(number);
//     number ++;
// }
// while (number <= 10);

for (let i = 1; i <= 5; i ++){
    if (i == 4){
        // break;
        continue;
    }
    console.log(i);
}