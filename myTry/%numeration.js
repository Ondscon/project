const char = (i) => {
    if (17 % i === 0) {          // проверка перебором на деление циифры
      return i;
    } else {
      return char(i + 1);
    }
  }
  console.log(char(3))


// наимеьшее чсло которое делетится ВВЕДЕНОЕ
  const smallestDivisor = (num) =>{
    if (num === 0) {
     return 0;
        } if (num === 1) {
            return 1;
        }
            const root = (del, num) => {
                if (num % del === 0) {
               return del;
            } 
            return root(del+1, num);
        }  
        return root(2,num);
    
    };
    
    console.log(smallestDivisor(3))


    // тоже самое с WHILE
    const char = (num) => {
      let i = 2;
      if (num > 1) {
          while (i <= num) {        
                  if (num % i === 0) {
                      return i;
                  } 
                  i++;
              }               
        return i;
       } else if (num === 1) {
          return 1;
       }
       return NaN;
  }
      console.log(char(121))