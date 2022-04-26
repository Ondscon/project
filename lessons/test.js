function findMultiples(integer, limit) {
     let    result = [];
     let integer2 = [];   
for (let j = integer, k=0 ; j <= limit; j++) {
    integer2[k] = j;
    k++;
    }
     
    for (let i = 0, g=0; i < limit; i++) {
        if (Number.isInteger(integer2[i] / integer)) {
            result[i] = integer2[i];        
         } 
         
    }
     
     return a = result.filter(result => result != NaN);
   
}
console.log(findMultiples(5, 27));