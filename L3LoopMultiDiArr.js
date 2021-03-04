const printMulti = (multiArr) => {
    let outputStr = '\n';
    for (let arr of multiArr) {
        for (let val of arr) {
            outputStr += `${val}\n`;
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