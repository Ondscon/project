let i = 0;
let b = 0;
let result;
while (i < 3) { // выводит 0, затем 1, затем 2
    b = b + i;
    result = `${b+1}`
    i++;
}
console.log(result);