'use strict'

function sayHello() {
    console.log('Good morning')
}

sayHello()

function sayBy() {
    console.log('Goog by')
}

sayBy()

const arr = [1, 34, 14, , -56, 98],
    sorted = arr.sort(compareNum)

function compareNum(a, b) {
    return a - b
}

console.log(sorted)