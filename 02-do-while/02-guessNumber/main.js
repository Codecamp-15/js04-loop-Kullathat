// let ansNumber = prompt('Enter your magic number'); // สามารถ return เป็น null ,String : '' "" ,'qwerty'

// let isNull = ansNumber == null 
// let isEmpty = ansNumber.trim() === '' 
// let isNan = isNaN(ansNumber)
// let isValid = ansNumber == null || ansNumber.trim() === '' || isNan(ansNumber)
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

// if(isValid) {
//     alert('Invalid Input');
// } else if (outOfRange) {
//     alert('Invalid Range');
// } else if {
//     alert ('try to guess Number');
// }

// let ansNumber = '';
// let isEmpty;
// let isNan;

// do {
//     ansNumber = prompt('Enter your magic number') || ''; 
//     isEmpty = ansNumber.trim() === '';
//     isNan = isNaN(ansNumber);
//     outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
//     if(isEmpty || isNan) {
//         alert('Invalid Input')
//     }
// } while (isEmpty || isNaN);

// Program 2 : Guess
// Hint to High
// Hint OutofRange
// Hint Invalid Range
// Alert Correct

let guessNumber;

do {
    guessNumber = prompt('Enter your magic number') || ''; 
    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(guessNumber);
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    if(isEmpty || isNan) {
        alert('Invalid Input , Try 1-99');
    } else if (outOfRange) {
        alert('Invalid Range, Try 1-99');
    } else if (guessNumber <= 99) {
        alert('too High');
    } else if (guessNumber > 1) {
        alert('too Low');
    } else if (guessNumber) {
        alert('Correct');
    }
} while (+guessNumber != +ansNumber);

