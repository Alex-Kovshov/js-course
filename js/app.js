//alert(1);
//console.log(5);

"use strict";

//let number = 5;
//const leftBorderWidth = 1;

//number = 10;
//console.log(number);
                          //объект
/*const obj = {
    name:'Jone',
    age: 25,
    isMarried: false,*/

//};
//console.log(obj.age);
//console.log(obj['age']);
                      //массив это частный случай объектов
//let arr = ['plumb.png', 'orang.jpg', 6, {}, []];
//console.log(arr[1]);
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/*const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);*/

                      // Условия 
  /*  if (4 == 9) {
        console.log('ok!');
    } else {
        console.log('error!');
    }

    const num = 50;
    if (num < 49) {
        console.log('error');
    } else if (num > 100) {
        console.log('много');
    } else {
        console.log('ok!');
    }

    (num === 50) ? console.log('ok') : console.log('error');


    const num = 50;
// строгое сравнение switch
    
    switch (num) {
        case 49:
            console.log('не верно');
            break;
        
        case 100:
            console.log('не верно');
            break;

        case 50:
            console.log('верно');
            break;
        default:
            console.log('не в этот раз');
            break;
    }*/

                        //Циклы
   // let num = 50;
    
  //  while (num <= 55) {
  //      console.log(num);
  //      num++;
  //   }                    

  //  do {
  //     console.log(num);
  //      num++;
   // }

  //  while (num < 55);

   /* for (let i = 1; i < 8; i++) {
        console.log(num);
        num++;
    }

    for (let i = 1; i < 10; i++) {
        if (i === 6) {
            //break;
            continue;
        }
        console.log(i);
    } */

    /* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

/*const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);*/

    //  Практика функции и циклы

      /* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
}

while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);