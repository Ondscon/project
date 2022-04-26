function alphabetPosition(text) {
  let a = text.split('').map((lowWord) => lowWord.toLowerCase()).join(' ').replace(/[^a-z]/g, '').split('');   // любой не буквенный
  

  let alphavit = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < text.length; i++) {

    for (let j = 0; j < alphavit.length; j++) {
      if (a[i] == alphavit[j]) {
        a[i] = alphavit.indexOf(a[i]) + 1;
      } else {
        continue;
      }
    }


  }
 
  

  
  return a.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));