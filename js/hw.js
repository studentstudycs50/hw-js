'use strict';

const sum = function (number_1, number_2) {
    console.log(number_1 + number_2);
}
// sum(9, 17)

const div = function (number_1, number_2) {
    console.log(number_1 / number_2);
}
// div(25, 5)

const mult = function (a, b) {
    console.log(a * b);
}
// mult(90, 10)

const sub = function (num1, num2) {
    console.log(num1 - num2);
}
// sub(100, 50)

// +, *, -, /

 const calc = function (number_1, number_2, operator) {

    if (operator === '+') {
         sum(number_1, number_2);
     } else if (operator === '*') {
         mult(number_1, number_2);
     } else if (operator === '-') {
         sub(number_1, number_2);
     } else if (operator === '/' && number_2 !== 0) {
         div(number_1, number_2);
     } else { console.log('Division by zero') }
}

calc(50, 100, '+')
calc(30, 2, '*')
calc(100, 25, '-')
calc(30, 0, '/')