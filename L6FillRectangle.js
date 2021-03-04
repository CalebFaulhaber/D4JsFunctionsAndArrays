const rectangles = (w, h, c) => {
    // creating an outer function called rectangles so
    // both function are called in one go.
    const fillRectangle = (w, h, c) => {
        let arr = [];
        for (let i = 1; i <= h; i++) {
            let innerArr = [];
            // innerArr will contain the result of the inner loop 
            for (let j = 1; j <= w; j++) {
                innerArr.push(c);
                // inner loop pushes "c" to the end of innerArr
                // once every loop.
            }
            arr.push(innerArr);
            // innerArr pushed to end of arr once every loop
        }
        return arr;
    };
    const rectangleToString = (a) => {
        console.log(fillRectangle(w,h,c));
        // exicuting fillRectangle function within rectangleToString
        // function to get value within this function scope.
        let arr = a; // reassigning to function scopped "arr".
        let str = '\n';
        for (let innerArr of arr) {
            let innerStr = '';
            // innerStr will get value of inner loop results.
            for (let char of innerArr) {
                innerStr += char;
                // adding each value of innerArr to innerStr.
            }
            str += `${innerStr}\n`;
            // adding innerStr to str once for every loop.
            // innerStr has all innerArr values in one string.
        }
        return str;
    }
    return rectangleToString(fillRectangle(w,h,c))
    // calling fillRectangle within rectanleToString so
    // output of fillRectangle can be used as argument
    // for rectangleToString.
}

console.log(rectangles(5, 3, "🔥"));



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