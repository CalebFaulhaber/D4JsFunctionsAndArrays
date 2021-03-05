const alphaRange = (start, end, num) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let charArr = [];
    let s;
    let e;
    let n = 1;
    if (end) {
        function findIndex (start,end) {
            s = alphabet.indexOf(start);
            e = alphabet.indexOf(end);
            return
        };
    } else return 'Need two or three arguments';
    findIndex(start,end);
    if (s > e) {
        alphabet = alphabet.reverse();
        findIndex(start,end);
    };
    if (num) {n = num};
    
    for (let i = s; i <= e; i += n) {
        charArr.push(alphabet[i]);                
    }    
    return charArr;
};

console.log(alphaRange('a', 'k', 3));


// [Challenge] Generate Alphabet Range

// Create a function, alphaRange, that takes two arguments: a start letter as a string and a end letter as a string. It should return an array beginning with the `start` letter, filled with all letters up to the end letter including end.

// Example:
// function alphaRange('a', 'f') // returns ['a', 'b', 'c', 'd', 'e', 'f']
// function alphaRange('d', 'h') // returns ['d', 'e', 'f', 'g', 'h']

// Stretch

// Support supplying arguments in the reverse direction.
// Example:
// function alphaRange('f', 'b') // returns ['f', 'e', 'd', 'c', 'b']

// Support an additional argument step as a number which determines how many letters are stepped at a time.
// Example:
// function alphaRange('a', 'k', 3) // returns ['a', 'd', 'g', 'j']
// function alphaRange('z', 't', 2) // returns ['z', 'x', 'v', 't']