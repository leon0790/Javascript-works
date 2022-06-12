'use strict'

const btn = document.querySelector('#btn')
const btns = document.querySelectorAll('button')
const link = document.querySelector('a')

// 1-yo'li kam ishlatiladi
// btn.onclick = function (){
//     alert('cLICK')
// }
// // kamchiligi // tepadegimas pasdegi function ishlaydi
// btn.onclick = function (){
//     alert('cLICK from js')
// }


// // 2-yo'li addEventListener kop ishlatiladi
// btn.addEventListener('click', () => {
//     alert('addEventListener1')
// })
// btn.addEventListener('click', () => {
//     alert('addEventListener2')
// })
//
// // addEventListener hover bolganda
// btn.addEventListener('mouseenter', () => {
//     alert('hover11')
// })


//A knopkasi bosilgan xolat
// let i = 0;
// const addElement = (event) => {
//     i++
//     if (i === 3) btn.removeEventListener('click', addElement)
//     console.log(i)
// }
//
// btn.addEventListener('click', addElement)


// silka ni ochirib o'zimizga to'g'irlanb qo'yish

link.addEventListener('click', (event) => {
    event.preventDefault()
    alert('new')
})

// 3 ta btn ni ishlatish
btns.forEach((item) => {

    // console.log(item.textContent)

    if (item.textContent === 'A'){
    item.addEventListener('click', () => {
        console.log('Aa')
    })
    }
    else if (item.textContent === 'B'){
        item.addEventListener('click', () => {
            console.log('Bb')
        })
    }
    else if (item.textContent === 'C'){
        item.addEventListener('click', () => {
            console.log('Cc')
        })
    }
})