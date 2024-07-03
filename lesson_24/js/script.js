// Строгий режим
"use strict";

/*Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 
const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.addEventListener(`click`, () => item.classList.toggle("active"));
});
*/

/*
Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/
window.addEventListener("load", function () {
  document.body.classList.add("body-visible");
});

/*
Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/
/*
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.addEventListener("mouseover", () => {
  footer.style.backgroundColor = "pink";
});
header.addEventListener("mouseleave", () => {
  footer.style.backgroundColor = "";
});
*/
/*
Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
 */
