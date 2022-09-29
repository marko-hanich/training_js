//!МОДАЛЬНОЕ ОКНО С ВВОДОМ ЧИСЕЛ

// let base = prompt('Give me your number');
// base = Number();
// console.log(base);

// let power = prompt('Give me STEPENb');
// power = Number();
// console.log(power);

// const result = base ** power;
// console.log(result);

//!НАЙТИ СЛУЧАЙНОЕ ЧИСЛО
// const max = 100;
// const min = 0;

// const result = Math.round(Math.random() * (max - min) + min )

// console.log(result);

//!СШИВАНИЕ СЛОВ\ЦИФР
// const firstName = 'Marko';
// const lastName = 'Hanich';

// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

//? SECOND VARIENT

// console.log(`My name is ${firstName}, my surname is ${lastName}`);

//!ПРИВЕДЕНИЕ К ВЕРХНЕМУ/НИЖНЕМУ РЕГИСТРУ
// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// //? С ПОМОЩЬЮ КВАДРАТНЫХ СКОБОК ВЫБИРАЕМ БУКВЫ (ПЕРВАЯ БУКВА = 0 И ТД.)
// console.log(brand[0]);

// //?А ПОМОЩЬЮ SLICE УДАЛЯЕМ ПЕРВЫЕ ДВЕ БУКВЫ
// console.log(brand.slice(2));

//!ФИЛЬТРОВАНИЕ (ВЫЯВЛЕНИЕ)
// const blackListWord1 = 'спам';
// const blackListWord2 = "распродажа";

// const string1 = 'Привет, я принц Абдул, это не спам, заработай миллион!';
// const string2 = 'На нашем сайте РАСПРОДАЖА только сегодня!!!';

// console.log(string1.includes(blackListWord1));
// console.log(string1.includes(blackListWord2));

// console.log(string2.includes(blackListWord1));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blackListWord2));

//!СРАВНЕНИЕ ЧИСЕЛ
// console.log(5 < 10);

// const isEqual = false == 0;
// console.log(isEqual)

// const isEqual1 = 0 === 0;
// console.log(isEqual1);

// const isEqual2 = 1 !== 0;
// console.log(isEqual2);

//!BBOLEAN - FALSE/TRUE
// false
// console.log(Boolean(0));
// console.log(Boolean(NaN));

// true
// console.log(Boolean(1234));

//!ОПЕРАТОРЫ И/ИЛИ/НЕ
// console.log(5 && 6 && 7 && 'action');

// console.log(5 || 7 || 8);
// console.log(null || 7 || false);

// console.log(!0);

//!IF / ELSE
// const balance = -1000;
// let message;

// if (balance >= 0) {
//     message = 'POSITIVE BALANCE';
// } else {
//     message = 'NEGATIVE BALANCE';
// }

//? SECOND VARIENT
// const message = balance >= 0 ? "POSITIVE BALANCE" : "NEGATIVE BALANCE";

// console.log(message);

//! СКРИПТ ДЛЯ ОБРАБОТКИ ЗАКАЗА В МАГАЗИНЕ

// let balance = 10000;
// const payment = 2000;

// console.log(
//     `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );
// if (payment <= balance) {
//     console.log('Проводим оплату!');

//     balance -= payment;

//     console.log(
//         `На счету осталось ${balance} кредитов`);
// }
// else {
//     console.log(
//         `На вашем счету недостаточно средств`
//     );
// };

// console.log(
//     `Операция завершена`
// );

//! СКРИПТ ПОДСЧЕТА СУММЫ ПОКУПКИ С УЧЕТОМ ЦЕНЫ И СКИДОК

const totalSpent = 2000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log("Бронзовый призер, скидка 2%");
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log("Серебряный призер, скидка 5%");
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log("Золотой призер, скидка 10%");
  discount = 0.1;
} else {
  console.log("Не партнер, скидка 0%");
}

console.log(
  `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
);
