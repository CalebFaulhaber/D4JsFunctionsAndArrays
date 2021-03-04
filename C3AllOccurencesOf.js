const allOccurencesOf = (char, arr) => {
    let occurences = [];
    for (let str of arr) {
        count = 0;
        for (let c of str) {
            if (c === char) {
                count++;
            }
        }
        occurences.push(count);
        count = 0;
    }
    return occurences;
}

console.log(allOccurencesOf('l', ['hello', 'world']))