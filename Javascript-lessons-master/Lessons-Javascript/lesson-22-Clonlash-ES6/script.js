'use strict'

// const number = {
//     x: 10,
//     y: 5
// }
//
// const newNumber = number
// newNumber.x = 10
//
// console.log(number)
// console.log(newNumber)


// objectlarni copy qilish
function nusxaObj(obj){
    let objNusxa = {}

    for (let value in obj){
        objNusxa[value] = obj[value]
    }
    return objNusxa
}


const numbers = {
    x: 10,
    y: 5,
    z: {
        a: 1,
        b: 2,
    },
}

const newNumbers = nusxaObj(numbers)

console.log(numbers)
console.log(newNumbers)

newNumbers.x = 20
console.log(numbers)
console.log(newNumbers)



