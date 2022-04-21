//export const length = (str) => str.length;
//export const toUpperCase = (str) => str.toUpperCase();

// Считаешь количество заглавых букв
const bigLettersCount = (text) => {
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i].toUpperCase() === text[i] && text[i] != ' ') {
    count = count + 1;
  }
}
return count;
};
console.log(bigLettersCount('AooooA   BB n'));

