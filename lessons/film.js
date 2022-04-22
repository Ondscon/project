'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
     count: numberOfFilms, //- сюда передается ответ на первый вопрос
     movies: {}, //в это свойство поместить пустой объект
     actors: {}, //тоже поместить пустой объект
     genres: [], //сюда поместить пустой массив
     privat: false //- в это свойство поместить boolean(логическое) значение false
};


qwestion1:
     for (let i = 1; i <= numberOfFilms; i++) {
          let lastFilm = '';
          let gradeOfFilm = 0;
          lastFilm += prompt('Один из последних просмотренных фильмов?', '');
          if (lastFilm.length === 0 || lastFilm === ' ' || lastFilm.length >= 50) {
               i = i - 1; // Есл пустая строка возврат еще раз
               continue qwestion1;
          }
          gradeOfFilm += +prompt('Какая оценка фильма', '');
          personalMovieDB.movies[lastFilm] = gradeOfFilm;
     };

if(personalMovieDB.count < 10) {
     alert('Просмотрено мало фильмов');
} else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
     alert('Вы классный зртель');
          } else if(personalMovieDB.count >= 30) {
                alert('Вы киноман');
}

console.log(personalMovieDB);