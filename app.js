//Задача1
var a = +prompt('Введите свой возраст');

if(a <= 18 && a > 0) {
    alert('Вы еще молоды, Вам нужно учиться');
}else if(a > 18 && a <= 50) {
    alert('Вам нужно работать');
}else if(a > 50 && a <= 59) {
    alert('Вам скоро на пенсию');
}else if(a > 59 && a <= 100) {
    alert('Вы пенсионер');
}else {
    alert('Что-то пошло не так');
}

//Задача2

var a = +prompt('Введите время')
switch(a) {
    case 0: 
        alert('12 часов ночи')
    break;
    case 1: 
        alert('час ночи')
    break;
    case 2: 
        alert('2 часа ночи')
    break;
    case 3: 
        alert('3 часа ночи')
    break;
    case 4: 
        alert('4 часа ночи')
    break;
    case 5: 
        alert('5 часов ночи')
    break;
    case 6: 
        alert('6 часов ночи')
    break;
    case 7: 
        alert('7 часов утра')
    break;
    case 8: 
        alert('8 часов утра')
    break;
    case 9: 
        alert('9 часов утра')
    break;
    case 10: 
        alert('10 часов утра')
    break;
    case 11: 
        alert('11 часов дня')
    break;
    case 12: 
        alert('12 часов дня')
    break;
    case 13: 
        alert('час дня')
    break;
    case 14: 
        alert('2 часа дня')
    break;
    case 15: 
        alert('3 часа дня')
    break;
    case 16: 
        alert('4 часа дня')
    break;
    case 17: 
        alert('5 часов дня')
    break;
    case 18: 
        alert('6 часов вечера')
    break;
    case 19: 
        alert('7 часов вечера')
    break;
    case 20: 
        alert('8 часов вечера')
    break;
    case 21: 
        alert('9 часов вечера')
    break;
    case 22: 
        alert('10 часов вечера')
    break;
    case 23: 
        alert('11 часов вечера')
    break;
    case 24: 
        alert('12 часов ночи')
    break;
    default: 
        alert('Что-то пошло не так')
    break;
}

//Задача3

var a = +prompt('Введите первое число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье число')

if(a < b && a > c || a > b && a < c) {
    alert('Среднее число ' + a)
}else if(b < a && b > c || b > a && b < c) {
    alert('Среднее число ' + b)
}else if(c < a && c > b || c > a && c < b) {
    alert('Среднее число ' + c)
}