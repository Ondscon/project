'use strict';



const personalMovieDB = {
     count: 0, //- сюда передается ответ на первый вопрос
     movies: {}, //в это свойство поместить пустой объект
     actors: {}, //тоже поместить пустой объект
     genres: [], //сюда поместить пустой массив
     privat: false, //- в это свойство поместить boolean(логическое) значение false
     start: function () {
          personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
          while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
               personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
          }
     },
     rememberMyFilms: function () {
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
     },
     writeYourGenres: function () {
          for (let i = 0; i < 3; i++) {
               const YourGenres = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
               if (YourGenres != null && YourGenres != '' && YourGenres.length <= 20) {
                    console.log('done');
                    personalMovieDB.genres[i] = YourGenres;
               
               } else {
                    console.log('Вы ввели не то');
                    i = i - 1; // Если пустая строка возврат еще раз
                    console.log('Вы ввели не то!');
               }
          }
          personalMovieDB.genres.forEach((item, i) => {
               console.log(`Любимый жанр №${i+1} - это ${item}`);
          });
     },

     detectPersonalLevel: function () {
          if (personalMovieDB.count < 10) {
               alert('Просмотрено мало фильмов');
          } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
               alert('Вы классный зритель');
          } else if (personalMovieDB.count >= 30) {
               alert('Вы киноман');
          }

     },


     showMyDB: function (hidden) {
          if (!hidden) {
               console.log(personalMovieDB);
          }
     },

     toggleVisibleMyDB: function () {
          if (personalMovieDB.privat) {
               personalMovieDB.privat = false;
          } else {
               personalMovieDB.privat = true;
          }
     }


};