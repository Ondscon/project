// из заданого текста выбирает ЗАданную букву и выводит все что без нее.
const foundNumbers = (n1 , found) => {
	let resoult = '';
	let i = 0;
	while (i < n1.length) {
		const currentChar = n1[i];
		if (currentChar !== found) {    // сменить !== на === выведет только эт буквыы остальное уберет
			resoult = `${resoult}${currentChar}`;
		}		
		i = i + 1 ;
	}
	return resoult;
}
console.log(foundNumbers('514785' , '5'));