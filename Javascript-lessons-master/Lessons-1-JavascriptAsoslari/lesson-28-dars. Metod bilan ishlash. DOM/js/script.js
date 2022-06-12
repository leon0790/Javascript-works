'use strict'

const box = document.querySelector("#box")
box.style.background = 'red'
const buttonClass = document.querySelector('.buttons')
const buttons = document.querySelectorAll("button")
// console.dir(buttons)
const circle = document.querySelector('.circle')
const circles = document.querySelectorAll('.circle')
const circleWrapper = document.querySelector('.circle__wrapper')


// massiv shaklida berib chiqish
// buttons[0].style.width = '200px'

// xammasiga berish
// for (let i = 0; i < buttons.length; i ++){
//     buttons[i].style.width = '200px'

// buttons.forEach((item) =>{
//     item.style.width = '150px'
// })



// circle qoshish
const myCircle = document.createElement('div')
myCircle.classList.add('circle')

// circleWrapper.append(myCircle) // oxiriga qoshadi
// circles[0].before(myCircle) // 0-elementning boshiga qoshadi
// circles[0].after(myCircle) // 0-elementning keyingisiga qoshadi
// circleWrapper.before(myCircle) //bir pogona tepaga qoshadi
// circleWrapper.after(myCircle)//bir pogona pastga qoshadi

// circles[1].remove()// 1 - elementni ochirish
// circles[1].replaceWith(myCircle) // yangi yaratilgan circle ni 1-elementning orniga qoyish

// myCircle.innerHTML = 'E' // circle ichiga harf qoshish
// myCircle.innerHTML = '<pre>E</pre>' // innetHTML ichiga tag yozsa ham boladi
myCircle.textContent = 'EE'// faqat text qaytaradi
circleWrapper.append(myCircle) // oxiriga qoshadi

circleWrapper.insertAdjacentHTML('afterend', '<pre>EEE</pre>')






