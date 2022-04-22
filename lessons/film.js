'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
     count: numberOfFilms,    //- сюда передается ответ на первый вопрос
     movies: {},   //в это свойство поместить пустой объект
     actors: {},   //тоже поместить пустой объект
     genres:  [],    //сюда поместить пустой массив
     privat:  false  //- в это свойство поместить boolean(логическое) значение false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const gradeOfFilm = +prompt('Какая оценка фильма', '');
const lastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
const gradeOfFilm2 = +prompt('Какая оценка фильма', '');

personalMovieDB.movies[lastFilm] = gradeOfFilm;
personalMovieDB.movies[lastFilm2] = gradeOfFilm2;

console.log(personalMovieDB);


d