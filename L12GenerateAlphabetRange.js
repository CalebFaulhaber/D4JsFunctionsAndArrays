const alphaRange = (start, end, num) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let charArr = [];
    let s;
    let e;
    let n = 1;
    // n is how many index's the loop goes up by, it will
    // change if there is a third argument in alphaRange().
    if (end) {
        function findIndex (start,end) {
            s = alphabet.indexOf(start);
            e = alphabet.indexOf(end);
            // giving a value to s and e of their index
            // when findIndex is called. if s is further
            // along in the alphabet than e then s and e
            // will have to be assigned new index as the
            // alphabet string will be reversing. rather
            // than write it twice I have created this 
            // findIndex function.
            return
        };
    } else return 'Need two or three arguments';
    findIndex(start,end);
    if (s > e) {
        alphabet = alphabet.reverse();
        findIndex(start,end);
        // re-assigning s and e if s is further in alphabet
        // than e as the alphabet string will be reversed,
        // so their index will change.
    };
    if (num) {n = num};
    
    for (let i = s; i <= e; i += n) {
        charArr.push(alphabet[i]);    
        // starting loop at character index s and ending at
        // index  e then pushing the value to charArr. This 
        // will happen to every n'th index.            
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