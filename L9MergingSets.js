const mergeSet = (arr1, arr2) => {
    let zipArr = [];
    for (let num of arr1) {
        if (!zipArr.includes(num) && !isNaN(num) && num !== null) {
            zipArr.push(num);
            // If zipArr does not contain num, num is a number
            // and num doesn't equal null then it will push
            // num to zipArr.
        }
    }
    for (let num of arr2) {
        if (!zipArr.includes(num) && !isNaN(num) && num !== null) {
            zipArr.push(num);
            // Same as lines 3-10 but for arr2.
        }
    }
    return zipArr;
};

console.log(mergeSet([1,2,3], [3,4,5]));


// Merging Sets

// Write a function, mergeSet, that merges two arrays and removes all duplicate elements.

// Example:
// let array1 = [1, 2, 3];
// let array2 = [3, 4, 5];
// console.log(mergeSet(array1, array2));
// // [1, 2, 3, 4, 5]