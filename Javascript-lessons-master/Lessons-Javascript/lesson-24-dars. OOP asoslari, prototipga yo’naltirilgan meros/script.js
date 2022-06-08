'use strict'

// // PROTOTYPE
// const car = {
//     motor: 'X',
//     color: 'red',
//     airBag: true,
// }
//
// const gm = {
//     airBag: false,
// }
//
// gm.__proto__ = car
// console.log(gm)


// PROTOTYPE ga ekvivalent

const car = {
    motor: 'X',
    color: 'red',
    airBag: true,
}

const gm = {
    airBag: false,
}
Object.setPrototypeOf(gm, car)
console.log(gm)

const bmw = Object.create(car)
console.log(bmw)