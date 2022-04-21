
const makeItFunny = (str , nSim) => {
	let i = 0;
	let result = '';
	while ( (i + 1) < str.length) {
		const upper = str[i];
		if ( i % nSim === 0) {
			result = `${result}${upper.toUpperCase()}`;
			} else { 
			result = `${result}${upper}`; 
		}
		i = i + 1;
	}
	return result;
}
console.log(makeItFunny('я люблю всю свою семью', 3));

/*
const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const current = str[i];
    if ((i + 1) % n === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
      result = `${result}${current}`;
    }
    i++;
  }

  return result;
}; 
console.log(makeItFunny('я люблю всю свою семью', 3));
*/