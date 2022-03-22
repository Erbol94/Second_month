// let age = 19;
// let adult = true;
// if (age >= 18) {
//     adult = true;
// } else {
//     adult = false;
// }
// console.log(adult);

// let age = prompt('in');
// let adult;
// if (age >= 18){
//     adult = true
// }else {
//     adult = false
// }
// console.log(adult)

// let age = prompt('in');
// let result;
//
// if (age >= 18) {
//     if (age <= 23) {
//         result = 'от 18 до 23';
//     } else {
//         result = 'больше 23';
//     }
// } else {
//      result = 'меньше 18';
// }
//
// console.log(result);

// let min = prompt('in');
// if (min >= 0 && min <= 14){
//     console.log('1 четверть')
// }
// if (min >= 15 && min <= 29) {
//     console.log('2 четверть')
// }
// if (min >= 30 && min <= 44) {
//     console.log('3 четверть')
// }
// if (min >= 45 && min <= 59) {
//     console.log('4 четверть')
// }

// let arr = '123456';
// if (arr.length >= 3) {
//     console.log('!')
// }

// let num = 123456;
// let last = String(num)[0];
// if (last == 0){
//     console.log('True')
// }else {
//     console.log('false')
// }

// let num = prompt('in');
// if (num == 0 || num == 2 || num == 4 || num == 6 || num == 8){
//     console.log('true')
// }
// if (num == 1 || num == 3 || num == 5 || num == 7 || num == 9){
//     console.log('false')
// }

// let a = prompt('in');
// let b = a % 3;
// if ( b == 0) {
//     console.log('Четное')
// }else {
//     console.log('Не четное')
// }

// let month = prompt('in');
// if (month >= 0 && month <= 3){
//     console.log('Winter')
// }
// if (month >= 4 && month <= 7) {
//     console.log('Summer')
// }
// if (month >= 8 && month <= 11){
//     console.log('Autumn')
// }else {
//     console.log('Uncorrect')
// }

// let str = 'abcde';
// if (str[0] = 'a'){
//     console.log('yes')
// }else {
//     console.log('no')
// }

// let num = +prompt('in');
// switch (num) {
//     case 1:
//         alert('Зима');
//         break;
//     case 2:
//         alert('Весна');
//         break;
//     case 3:
//         alert('Лето');
//         break;
//     case 4:
//         alert('Осень');
//         break;
//     default:
//         alert('Ошибка');
//         break
// }
//
// let num = 1;
// let result = num <= 0 ? true: false;
// console.log(result);

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// let result = a == b;
// console.log(result);

// let a = 5 * (7-4);
// let b = 1+2+7;
// let result = a > b;
// console.log(result);

// let a = 2 ** 4;
// let b = 4 ** 2;
// let result = a != b;
// console.log(result);

// let age = confirm('Yes or no');
// if (age){
//     alert('Yes')
// }else {
//     alert('no')
// }

// let num1 = 1;
// let num2 = 2;
//
// if (num1 + num2 === 3) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

let num1 = '1';
let num2 = '2';

if (Number(num1 + num2 ) === 3) {
    console.log('+++');
} else {
    console.log('---');
}
