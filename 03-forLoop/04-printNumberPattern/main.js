
let Buffet = ""
for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= i; j++) {
         Buffet = Buffet + j;
    }
    Buffet += '\n';
}
console.log(Buffet)


