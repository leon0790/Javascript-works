'use strict'

// console.log(document.head) // documentdagi head qismini har bir elentlarni chiqarib beradi
//
// console.log(document.body) //documentdagi body qismini har bir elentlarni chiqarib beradi
//
// console.log(document.body.childNodes) //documentdagi body qismini har bir elentlarni chiqarib beradi
//
// console.log(document.body.firstChild) //documentdagi body qismini birinchi elentini chiqarib beradi
//
// console.log(document.body.lastChild) //documentdagi body qismini oxirgi elentini chiqarib beradi


console.log(document.querySelector('#btn').parentNode)

console.log(document.querySelector('[data-current="b"]').previousSibling)

console.log(document.querySelector('[data-current="b"]').nextElementSibling)


// #text larni olib tashlash
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text'){
        continue
    }
    console.log(node)
}