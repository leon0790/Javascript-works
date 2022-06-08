'use strict'

const arr = [1, 2, 1, 4, 5, 6]



arr.forEach(function (item, index, arr) {
    console.log(`${item}: ${index}: ${arr}`)
})

const movies = prompt("What is your favorite movies", "")
const userMoviesArr = movies.split(", ")
console.log(userMoviesArr.join("- "))

arr.sort((a, b) => (a -b))
console.log(arr)