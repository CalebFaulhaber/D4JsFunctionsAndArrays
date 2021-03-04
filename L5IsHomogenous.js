const isHomogenous = (arr) => {
    let output = 'true';
    // this stays being true unless something doesn't match.
    for (let value of arr) {
        let type; 
        // this can't be assigned a value yet as typeof()
        // shows arrays as 'object', due to this there is
        // and if statment needed after assigning 'type'.
        if (Array.isArray(value)) {
            type = 'array';
            // checking if "value" is an array, if so "type"
            // will be assigned value of 'array', if not
            // "type" will be assigned value of 'typeof(value)'.
        } else {type = typeof(value)};
        if (Array.isArray(arr[0]) && type !== 'array') {
            return 'false';
            // checks if arr[0] is an array but "type" isn't.
        } else if (Array.isArray(arr[0]) && type === 'array') {
            // then do nothing, this way line 21
            // "else if" won't kick in.
        } else if (typeof(arr[0]) !== type) {
            return 'false';
        }
    }
    return output;
}

console.log(isHomogenous([[4], [4, {hello: 'hello'}]]))

// Is Homogenous?

// Write a function, isHomogenous, that takes an array and returns true only if all its values are of the same type (e.g. all the values are strings or all the values are numbers, etc).

// Example:

// isHomogenous([1, 2, 3]) // true
// isHomogenous(['a', 'b', 'c']) // true
// isHomogenous([[2], 'Xavier']) // false
// isHomogenous([[2], {colour: 'blue'}]) // false
// isHomogenous([1, '2', 3]) // false