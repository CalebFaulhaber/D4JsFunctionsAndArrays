const matchingSet = (arr1,arr2) => {
    let matching = [];
    let long;
    let short;
    if (arr1.length > arr2.length) {
        long = arr1;
        short = arr2;
    } else {
        long = arr2; 
        short = arr1;
    };
    // lines 3-11 are for finding shortest array. This makes
    // it so only one loop needs to be done, also the shortest
    // array will be looped through. If cleaner second array
    // can be looped through also instead of lines 3-11.
    
    for (let val of short) {
        if (long.includes(val) && !matching.includes(val)) {
            matching.push(val);
            // Value will be pushed to "matching" as long as 
            // longer array contains value of shorter
            // array and it hasn't been pushed yet.
        }
    }
    return matching;    
};

console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7]));


// Matching Sub-Set

// Create a function, matchingSet, that takes two arrays as arguments. It should return an array of all the elements that are shared between the two arrays (without duplicates). Effectively, it should return the intersection of both arrays.

// Example:
// matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7]) // [3, 4]
// matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y']) // ['j', 'n']