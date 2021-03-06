const closestNeighbors = (n, a, b, c) => {
    let closestNumArr = [];
    let counter;
    let err = 'All 4 arguements must be numbers.';
    if (n === null || a === null || b === null || c ===null) {
        return err;
        // catching if null is one of the arguments.
    } else if (isNaN(n+a+b+c)) {
        return err;
        // catching if one of the arguments is not a number.
    };
    if (a >= b && a >= c) {
        counter = a;
    } else if (b >= c && b >= a) {
        counter = b;
    } else {counter = c};
    // for loop should go in incraments of the larget of 3
    // numbers to cut down on number of loops.
    for (i = n; i >= 0; i -= counter) {
        if (i % a === 0 && i % b === 0 && i % c === 0) {
            closestNumArr.push(i);
            break            
            // loop stops if index is less than zero however
            // it should keep going to catch negative numbers.
            // I haven't done this because I'm not confident
            // if will risk an infinit loop.
        }
    }
    for (i = n; i <= n *2; i += counter) {
        if (i % a === 0 && i % b === 0 && i % c === 0) {
            closestNumArr.push(i);
            break
            // loop stops at index (n*2), this is an arbitrary
            // number. It should keep going until there's a
            // match, however I'm not confident if it will 
            // cause an infinit loop or not.
        }
    }
    return closestNumArr;
};

console.log(closestNeighbors(20, 2, 3, 4))


// Closest Neighbor

// Write a function, closestNeighbors, that takes an integer, n, and three other integers, a, b and c. Find the greatest integer smaller than n that is divisible by a, b and c and find the smallest integer greater than n that is also divisible by a, b, and c then return both results in an array.

// Example:
// closestNeighbors(20, 2, 3, 4) // [12, 24]
// closestNeighbors(100, 3, 4, 5) // [60, 120]
// closestNeighbors(3000, 7, 13, 31) // returns [2821, 5642]