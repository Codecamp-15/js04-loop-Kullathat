
let sum = 0;
let average;
let isNan ;
let count = 0;
let isEmpty = ''
do {
    let number = +prompt('get number1');
    isNan = isNaN(number);
        if(number <= isNan || isEmpty || 0 ) {
            break;
        }   
        else {
            sum = number + sum ; 
            count++;
            average = sum / count;
            }
}   while (true);
console.log(`average =${average}`);
console.log(`sum =${sum}`)
alert(`sum =${sum}`);
alert(`average =${average}`);
