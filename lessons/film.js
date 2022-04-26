'use strict';
let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
          numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
}
start();

const personalMovieDB = {
     count: numberOfFilms, //- сюда передается ответ на первый вопрос
     movies: {}, //в это свойство поместить пустой объект
     actors: {}, //тоже поместить пустой объект
     genres: [], //сюда поместить пустой массив
     privat: false //- в это свойство поместить boolean(логическое) значение false
};



function rememberMyFilms() {
     for (let i = 0; i < 2; i++) {
          const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
          const gradeOfFilm = +prompt('Какая оценка фильма', '');

          if (lastFilm != null && gradeOfFilm != null && lastFilm != '' && lastFilm.length <= 50 && gradeOfFilm != ' ') {
               console.log('done');

               personalMovieDB.movies[lastFilm] = gradeOfFilm;
          } else {
               i = i - 1; // Если пустая строка возврат еще раз
               console.log('error');
          }
     }
}
rememberMyFilms();

function writeYourGenres() {
     for (let i = 0; i < 3; i++) {
          const YourGenres = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
          if (YourGenres != null && YourGenres != '' && YourGenres.length <= 20) {
               console.log('done');

               personalMovieDB.genres[i] = YourGenres;
          } else {
               i = i - 1; // Если пустая строка возврат еще раз
               console.log('error');
          }
     }
}
writeYourGenres();

function detectPersonalLevel() {
     if (personalMovieDB.count < 10) {
          alert('Просмотрено мало фильмов');
     } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
          alert('Вы классный зритель');
     } else if (personalMovieDB.count >= 30) {
          alert('Вы киноман');
     }

}
detectPersonalLevel();

function showMyDB(hidden) {
if (!hidden) {
     console.log(personalMovieDB);
}
}
showMyDB(personalMovieDB.privat);