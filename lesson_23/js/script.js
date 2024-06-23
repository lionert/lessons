// Строгий режим
"use strict";

//Задача №1
//Отримати в константу елемент <body>
//const bodyElement = document.body;
//console.log(bodyElement);

//Задача №2
//Написати функцію, яка додає в <body> список UL
//з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
/*
let newElement = document.createElement("ul");
newElement.innerHTML = `<li>Привіт!</li>`;

const page = document.querySelector(`.page`);
page.prepend(newElement);

function addUl(a = 1) {
  // Якщо параметр функції Infinity або NaN - зупинити функцію
  if (a === Infinity || a === NaN) return;

  const newElement = document.createElement("ul");

  for (let i = 0; i < a; i++) {
    const item = document.createElement("li");
    item.textContent = "Привіт!";
    newElement.prepend(item);
  }
  document.body.prepend(newElement);
}

//addUl(5);
//addUl(0);
//addUl(d);
addUl(10);
*/

//Задача №3
//Додати до елементу <body> класс loaded.
//Потім перевірити чи є клас loaded у елемента <body>
//і, якщо є, додати стиль кольору тесту зедлений.
/*
const bodyElement = document.body;
bodyElement.classList.add(`loaded`);
if (bodyElement.classList.contains(`loaded`)) {
  bodyElement.style.color = `green`;
}
*/
/*Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)"
 */
/*
const listElement = document.querySelectorAll(".item");

if (listElement) {
  listElement.forEach((item, index) => {
    item.classList.add("active");
    item.textContent = `Елемент №${index + 1}`;
  });
}
*/
/* 
Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки


const button = document.querySelector(".button");

if (button) {
  button.scrollIntoView({
    block: "center",
  });
}
  */

/* 
Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
*/
/*
const list = document.querySelector(".link");

list.setAttribute("name", parseFloat(100));
if (list.getAttribute("name") < 200) {
  list.style.color = `red`;
}
  */
