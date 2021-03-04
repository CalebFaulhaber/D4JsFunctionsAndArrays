const largestNumber = (arr) => {
    let largestNum = arr[0];
    // largestNum will be the current largest number after each
    // loop. It starts by being assigned the value of index 0.
    for (let num of arr) {
        // this loop is ES6, it finds the value of each
        // index not the index number
        if (num > largestNum) {
            largestNum = num;
            // if index value is larger than largestNum then
            // largestNum will be reassigned value of num 
        }
    }
    return `The largest number in the array is \"${largestNum}\".`;
}

console.log(largestNumber([99, 77, 55, 33, 22, 11]));

// Largest Number in an Array

// Write a function called `largestNumber` that returns the largest number from an array of numbers.

// Example:
// largestNumber([40, 2, 13, 34, 42]) // returns 42
// largestNumber([1, 2, 3, 4, 5, 6]) // returns 6
// largestNumber([99, 77, 55, 33, 22, 11]) // returns 99