                                                                                                                                
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts =document.querySelectorAll('.heart');
const heart =document.querySelector('.box');
const wrapper =document.querySelector('.wrapper');

box.style.backgroundColor = 'green'
box.style.width = '500px'
box.style.cssText = 'background-color: blue; width: 500px ';


btns[1].style.borderRadius = '10%'

circles[0].style.backgroundColor = 'red';


hearts.forEach(  => {
    el.style.cssText = 'background-color: green';
});  

const div = document.createElement('div');

div.classList.add('black');

wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].after(div);
// hearts[0].before(div);

// circles[0].remove()

// hearts[0].replaceWith(circles[0])


 div.innerHTML = '<h1>HEy you</h1>';  //используем HTML        Для создания
// div.textContent = 'Hey' только текст             От пользователя. чтобы не сломал нам верстку

div.insertAdjacentHTML('afterend', '<h1>Hasdy you</h1>')


