const zip = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return undefined;
        // Making sure they are both arrays.
    } else if (arr1.length !== arr2.length) {
        return undefined;
        // Making sure they are both the same length.
    } else {
        let arr = [];
        for (let i in arr1) {
            arr.push([arr1[i], arr2[i]]);
            // index is the same for both arrays since they are
            // the same length. Pushing them to the end of arr.
        }   
        return arr;
    };
};

console.log(zip(['x', 'y', 'z'], 
                [5, 6, 10]));

// Zip

// Write a function, zip, that takes two arrays of the same length, arrA & arrB. If arrA and arrB are not the same length, the function should return undefined. Otherwise, it should combine both arrays together in a two-dimensional array:

// Example:

// zip([1, 2, 3], [4, 5, 6]) // [[1, 4], [2, 5], [3, 6]]
// zip(['firstName', 'lastName'], ['Jon', 'Snow']) // [['firstName', 'Jon'], ['lastName', 'Snow']]
// zip([0, 0, 0], []) // undefined
// zip(['x', 'y', 'z'], [5, 6, 10]) // [['x', 5], ['y', 6], ['z', 10]]