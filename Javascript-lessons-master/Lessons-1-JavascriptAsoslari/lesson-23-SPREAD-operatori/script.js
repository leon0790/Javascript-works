'use strict'

// function logger(x, y, z, w, s) {
//     console.log(x + y + z + w + s)
// }
//
// logger(2, 5, 4, 8, 9)


//...SPREAD qiymatini beradi
const calc = [1, 2, 3, 4, 5]

function logger(x, y, z, w, s) {
    console.log(x + y + z + w + s)
}

logger(...calc)

// massivlar uchun ... SPREAD
const arr= [1,2,3]
const newArr = [...arr]
console.log(newArr)


// Objectlar uchun ...SPREAD
const obj1 = {
    x:10,
    y:20,
}

const obj2 = {...obj1}
console.log(obj2)