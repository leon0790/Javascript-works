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


        // // objectlarni copy qilish
        // function nusxaObj(obj){
        //     let objNusxa = {}
        //
        //     for (let value in obj){
        //         objNusxa[value] = obj[value]
        //     }
        //     return objNusxa
        // }
        //
        //
        // const numbers = {
        //     x: 10,
        //     y: 5,
        //     z: {
        //         a: 1,
        //         b: 2,
        //     },
        // }
        //
        // const newNumbers = nusxaObj(numbers)
        //
        // console.log(numbers)
        // console.log(newNumbers)
        //
        // newNumbers.x = 20
        // newNumbers.z.a = 22
        // console.log(numbers)
        // console.log(newNumbers)


const numbers = {
    x: 10,
    y: 5,
}

const addNumbers = {
    z: 15
}

const newNumbers = Object.assign({}, numbers) // Object.assign clone qilib beradi
newNumbers.x = 25
console.log(numbers)
console.log(newNumbers)

const allNumbers = Object.assign(numbers, addNumbers)// 2 ta obj ni 1 taga qoyib beradi
console.log(allNumbers)

// slice arraylarni nusxalaydi
const arr = [1,2,3,4,5,6,7,8,9]
const newArr = arr.slice()
console.log(arr)
console.log(newArr)

const newArray = arr.slice(2,4)
console.log(arr)
console.log(newArray)

//... spread 2 ta massivni bitta massivga nusxalaydi
const liverpool = ['Salah', 'Mane']
const manCity = ['Mahrez']

const mixPlayer = [...liverpool, ...manCity]
console.log(mixPlayer)




