// function fifthTask() {

//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     let j = 0;
//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers[j] = i;
//         j++;
//     }

//     // Не трогаем
//     return arrayOfNumbers;
// }
// console.log(fifthTask());

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     let j = 0;
//     for (let i = 0; i < arr.length ; i++) {
//         result[j] = arr[i];
//         j++;
//     }

//     // Не трогаем
//     return result;
// }
// console.log(firstTask());


// Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         } else {

//             data[i] = data[i] * 2;
//         }
//     }

//     // Не трогаем
//     return data;
// }
// console.log(secondTask());

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут

//     for (let i = 0; i < data.length; i++) {

//         if (typeof (data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//             result[(data.length-i - 1)] = data[i];
//         } else {
//             data[i] = data[i] * 2;
//             result[(data.length-i - 1)] = data[i];
//         }
//     }


//     console.log(result);
//     // Не трогаем
//     //return result;
// }
// console.log(thirdTask());