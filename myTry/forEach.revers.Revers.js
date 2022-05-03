const someString = 'This is some strange string';

function reverse(str) {
     if (typeof(str) != "string") {
          return 'Ошибка!'
     }
   let   k = str.split(' ').reverse();
     console.log(k);
     let l=[];
     k.forEach(function (el,i) {
          // console.log(el.split('').reverse().join(''))
          l.push(el.split('').reverse().join(''));
     });
      return l.join(' ');
}

console.log(reverse(someString))