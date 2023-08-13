console.log();
// () = parenthesis
// {} = bracket 
// {} = square bracket 

// for (let i = 0; i < 3; i++ ) {
//     console.log(' >> Hello')
// }

// console.log('end...')
// for (let i = 0; i < 20; i++ ) {
//     if(i%3 == 0 && i % 5 == 0) console.log('FizzBuzz');
//     else if (i % 5 == 0 ) console.log('Buzzz')
//     else if (i % 3 == 0 ) console.log('Fizz')
//     else console.log(i);
// }
// console.log('End....')


// ex3
// for (let i = 1; i < 20; i++ ) {
//     if (i % 2 == 0) console.log(i);
//     else continue; // update ค่า เเละเริ้ม run loop รอบถัดไป
//     console.log('even');
// }

// console.log('end...')

//ex4
// let str = ''
// for(let i = 1 ; i <=10; i++) {
//     if (i % 3 == 0) continue;
//     str +- i; // '' + 1 => '1'
//     // '1' + 2  => '12'
// }

// console.log(str); // '1245678910'
// console.log('end....');

//ex 5 remove vowel
// let src = 'codecamp'
// let res = ''
// //src.length ==> 8
// //src[0] ==> c
// for(let i = 0; src.length; i++) {
//     //console.log(i,src[i]);
//     let c = src[i];
//     let isVowe = c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ;
//     if (isVowel) continue;
//     res = res + src[i]
// }
// console.log(res);

// console.log('end');

//Advance : nested Loop;

for (let i = 2; i <= 12; i++) {
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    // console.log(`${i} * 1 = ${i * 1}`)
    console.log(`เริ่มท่องเเม่สูตรคูณเเม่ ${i}`)
    for(let j = 1; <= 12 ; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
    console.log('\n');
}
console.log ('end.....');