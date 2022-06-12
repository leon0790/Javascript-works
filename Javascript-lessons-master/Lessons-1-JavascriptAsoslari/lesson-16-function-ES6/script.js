'use strict'

// FUNCTION DECLARATION -> funksiyalar chaqirishdan kn yaratilgan bo'lsa ham ishlaydi
const sumOfAandB = calc(10, 5);
console.log(sumOfAandB);

function calc(a, b) {
    return a + b;
}

// FUNCTION EXPRESSION -> qachonki kodimiz ushbu funk.ga yetib kelganda yaratiladi, faqat funk.dan kn chaqiriladi
const logger = function () {
    console.log("Hello world");
}

logger();

// ARROW EXPRESSION -> O'zining shaxsiy context this mavjud emas
const calcSum = (a, b) => a + b; // const calcSum = (a, b) =>  ( bu yerda return avtomatik paydo boladi) a + b;
const calcSum2 = (a, b) => { c = a + b; return c};
console.log(calcSum(10, 9));
console.log(calcSum2(10, 91));


