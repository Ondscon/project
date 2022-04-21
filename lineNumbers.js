const lineNumbers = (n1 , n2) => {
	let counter = '';
	let i = n1;
	while (i <= n2) {
		counter = `${counter}${i}`
		i = i + 1 ;
	}
	return counter;
}
console.log(lineNumbers(1 , 5));

/* Выводит справа на лево
const lineNumbers = (n1 , n2) => {
	let counter = '';
	let i = n2;
	while (i >= n1) {
		counter = `${counter}${i}`;
		i = i - 1 ;
	}
	return counter;
}
console.log(lineNumbers(1 , 5));
*/ 

