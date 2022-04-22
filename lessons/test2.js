// const lines = 5;
// let result = '';
// let a = ' ';
// for (let i = 1; i <= lines; i++) { //строки
//     result = '!' + result;
//     for (let j = 0; j < i; j++) { // колчество звезд в строке
//         result = '*' + result;
//         // console.log(result);
//         for (let k = 5; k >= 0; k--) { // отступы  
//             result +=' !';
//             //console.log(result);

//         }
//     }

//     result += '\n';
// }

// console.log(result);

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
        //console.log(result);
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)