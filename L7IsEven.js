// // function #1
const isEven = (num) => {
    if (isNaN(num) || num === null) {
        return `Not a number`
    } else if (num & 1 === 1) {
        return `Odd`
    } else {return 'Even'}
};

// function #2
// const isEven = (num) => {
//     if (typeof(num) === 'number') {
//         let lastNum = num.toString();
//         lastNum = parseInt(lastNum.slice(-1));
//         answer = 'Odd'
//         for (let i = 1; i <= 5; i++) {
//             console.log(lastNum)
//             if (lastNum === 0) {
//                 return 'Even';
//             } else {lastNum -= 2};
//         }    
//     } else {return 'Not a Number'}
//     return answer;
// }

console.log(isEven(55));




// isEven

// Write a function, isEven, that takes a number as argument. It returns true if the number is even otherwise it returns false. You are not allowed to use the modulus operator (%) nor the division operator (/).