const findDuplicates = (arr) => {
    let dup = [];
    for (let i = 0; i < arr.length - 1; i++) {
        // for loop is finnishing at second to last index 
        // because the last index has already been compared 
        // to all the other values.
        for (let j = i + 1; j < arr.length; j++) {
            // "j = i +1" so it's never checking past index's 
            // as those have already been compared. 
            if (arr[j] === arr[i] && !dup.includes(arr[i])) {
                dup.push(arr[i]);
                // Push arr[i] to "dup if the two values are 
                // the same and it hasn't been pushed yet.
                break
                // To save computing power inner loop breaks 
                // if a duplicate is found.
            };
        };
    };
    return dup;
};

console.log(findDuplicates(['Bob', 2, 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4]));


// Find Duplicate Values

// Write a function, findDuplicates, that takes an array of strings and/or integers, values. Return a new array containing all the values that are duplicated in the array.

// Example:
// findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9]) // returns [1, 9]
// findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4]) // returns ['Rob', 4]