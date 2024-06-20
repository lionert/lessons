document.addEventListener("click", function (e) {
  const targetElement = e.target;
  if (targetElement.closest(".menu-icon")) {
    document.documentElement.classList.toggle("menu-open");
  }
});

let someVar = 0;
++someVar;

if (someVar) {
  console.log(someVar);
}
