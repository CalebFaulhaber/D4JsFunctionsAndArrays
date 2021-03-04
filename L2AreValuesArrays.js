const areValuesArrays = (arr) => {
    let answer = 'Yes'
    for (let val of arr) {
        if (!Array.isArray(val)) {
            answer = 'No';
        }
    }
    return `Are all the values within the array also arrays? ${answer}.`
}

console.log(areValuesArrays([['a'],[1],[1,2,3]]));



// Are Values Arrays?

// Write a function, `areValuesArrays`, that takes an array, `arr`. It returns `true` if all values in `arr` are of the `array` type otherwise it returns `false`.

// Example:
// areValuesArrays([[1], [2], [4, 5]]); // returns true
// areValuesArrays([1, [2], [6, 7, 8]]); // returns false
// areValuesArrays([[1], 2, [6, 7, 8]]); // returns false
// areValuesArrays(['true', 'false']); // returns false