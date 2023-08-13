// let sum = 0
// for (i = 1; i <= 100; i++) 
//     sum = i + sum;
//     console.log(sum)

// let sum1 = 0
// let sum2 = 0
// for (i = 1; i <= 100; i++)  
//     if(i % 2 === 0){
//         sum1 += i
//     }
//     else {
//          sum2 += i
//     }
    
// console.log(sum1,sum2);

let sumEvenSqaure = 0
let sumThiredSqaure = 0
for (i = 1; i <= 100; i++){  
    if(i % 2 === 0) {
    sumEvenSqaure = sumEvenSqaure + i ** 2;
}
    if(i % 3 ===0) {
    sumThiredSqaure = sumThiredSqaure + i**2;
    }
}

console.log(`${sumEvenSqaure - sumThiredSqaure}`)