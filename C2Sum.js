const sum = (arr) => {
    let value = 0;
    for (let num of arr) {
        if (!isNaN(num)) {
            value += num;
        }
    }  
    return value;
}

console.log(sum([1,2,3,4,'f']));