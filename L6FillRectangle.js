const fillRectangle = (w, h, c) => {
    
}


// Fill Rectangle

// Write a function, fillRectangle, that takes 3 arguments: a number representing a width, another number representing a height and a single character string as chr. It must return a 2 dimensional array (i.e. an array containing array values of the same length.) of length width whose inner arrays are length height where the values of the inner arrays are filled with chr.

// Example:
// fillRectangle(2, 2, "*")
// // [
// //   ['*', '*'],
// //   ['*', '*'],
// // ]

// fillRectangle(5, 3, "🔥")
// // [
// //   ['🔥', '🔥', '🔥', '🔥', '🔥'],
// //   ['🔥', '🔥', '🔥', '🔥', '🔥'],
// //   ['🔥', '🔥', '🔥', '🔥', '🔥'],
// // ]

// Write another function, rectangleToString, that takes a 2 dimensional array created by the function above and converts it to a string as follows where the content of the inner arrays is joined by new line characters \n:

// const str = rectangleToString(fillRectangle(5, 3, "🔥"))
// // '🔥🔥🔥🔥🔥\n🔥🔥🔥🔥🔥\n🔥🔥🔥🔥🔥'

// // If it were logged, it would look like this:
// console.log(str)
// // 🔥🔥🔥🔥🔥
// // 🔥🔥🔥🔥🔥
// // 🔥🔥🔥🔥🔥