// Строгий режим
"use strict";

/*
Задача №1
Що потрапить в консоль?

let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}
 */
//Відповідь: 1, тому що iнкремент ++ збільшує число на 1

/*
Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д.
 */
//Відповідь:
let someString = "Пункт №";
for (let i = 1; i <= 10; ++i) {
  console.log(someString + [i]);
}

/*
Задача №3
Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');

1.   40 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20"

2.   40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20"

3.   40 <= 10 || false && 10 <= "10" || 20 === "20"

4.   false || false && 10 <= "10" || 20 === "20"

5.   false || false && true || false

6.   false || false || false

7.   false || false

8.   false 
*/
//Відповідь: Інструкція if(...) обчислює умову в дужках і, якщо результат умови true, виконує блок коду. Результат false.

/*
Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку 
 */
function calcSum(a, b) {
  if (a / b === Infinity) {
    console.log(`На нуль ділити не можна`);
  } else if (typeof a !== "number" || typeof b !== "number") {
    console.log("Обидва значення мають бути числами");
  } else {
    console.log(`Результат ділення: ${a / b}`);
  }
}
calcSum(100, 2);
calcSum(100, 0);
calcSum("", "");
calcSum();

/*
let rez;
function calcSum(a, b) {
  if (a / b === Infinity) {
    console.log(`На нуль ділити не можна`);
  } else if (!isNaN(a) === true && !isNaN(a) === true) {
    //!isNaN(b) - true якщо не число
    console.log(`Результат ділення: ${a / b}`);
  } else if (!a === false || !b === false) {
    //!isNaN(b) - true якщо не число
    console.log(`Ви не ввели данних`);
  } else {
    console.log(`Ви ввели не число`);
  }
}
  */
//calcSum(100, 2);
//calcSum(100, 0);
//calcSum();
//calcSum("5", 2);
//calcSum("", "");
/*
Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

*/
let someArray = [11, "Жека", true, "Привіт!", 10];
someArray.forEach((item, index, array) => {
  if (item === 10) {
    console.log(`${item} має позицію ${index} в масиві ${array}`);
  }
});
