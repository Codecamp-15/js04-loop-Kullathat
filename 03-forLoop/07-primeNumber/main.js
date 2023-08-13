// เขียนจำนวนเฉพาะ
// จำนวนที่กำหนดให้เป็นจำนวนเฉพาะรึเปล่า



for (let n = 2; n <= 100; n++) { 
    let isPrime = true; //flag
    for (let divider = 2; divider < n; divider++){
        // n 2,3,4,..... n-1
        if (n % divider  == 0 ) {
            isPrime = false;
            break;
        }
        // n=2 5/2 = 2.5 => isPrime = true
        // n=2 5/3 = 1.6 => isPrime = true
    }

    if (isPrime) console.log(n);
}

