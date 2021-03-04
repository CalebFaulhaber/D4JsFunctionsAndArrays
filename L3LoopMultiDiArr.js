const printMulti = (multiArr) => {
    let outputStr = '\n';
    // This will be the final output all in one string.
    // \n is not needed however makes it easier for me
    // to see output.
    for (let arr of multiArr) {
        // arr is the inner array of multiArr
        for (let val of arr) {
            outputStr += `${val}\n`;
            // taking each value of arr as val and adding them
            // as a string to outputStr.
        }
    }
    return outputStr;
};

console.log(printMulti([[2,3,4], ["Hello CodeCore", 1, true]]));

// Loop through a Multi-Dimensional Array

// Write a function called `printMulti` that takes an array of arrays, such as:
// const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];
// and logs every element to the console as follows:

// > printMulti(myArray)
// 2
// 3
// 4
// Hello CodeCore
// 1
// true