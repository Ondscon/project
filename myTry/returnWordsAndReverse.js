function returnWords(string) {
     let a = [];
     a = string.split(' ');
     let result = '';
     // console.log(string.split(' '));
     //  console.log(a);
     for (let i = 0; i < a.length; i++) {
          if (a[i].length < 5) {
               result += `${a[i]} `;
               // console.log(result);
          } else {
               // console.log(a[1][2]);
               let b = '';
               for (let j = a[i].length - 1; j >= 0; j--) {
                    b += a[i][j];

               }
               result += `${b} `;
          }
     }
     let v = [];
     let y = [];
     v = result.split(' ');
     for (let k = 0; k < v.length; k++) {
          if (v[k] === '') {
               continue;
          } else {
               y[k] = v[k];
          }
     }
let str = y.join(' ');

     return str;
}

console.log(returnWords('Welcome to my home Hylllo dd'));


// function returnWords(string) {
//      let a = [];
//      let v = [];
//      a = string.split(' ');
//      //let result = '';
//      // console.log(string.split(' '));
//      //  console.log(a);
//      for (let i = 0; i < a.length; i++) {
//           if (a[i].length < 5) {
//                v[i] += a[i];
//                // console.log(result);
//           } else {
//                // console.log(a[1][2]);
//                let b = '';
//                for (let j = a[i].length - 1 ; j >=0; j--) {
//                     b += a[i][j];

//                }
//                v[i] += b;
//           }
//      }

//      return a;
// }

// console.log(returnWords('Welcome to my home Hylllo dd'));