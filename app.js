// JAVASCRIPT

const get = (element) => document.getElementById(element);

const nav = get("nav");
const open = get("menu-btn");
const close = get("exit-btn");

open.addEventListener("click", () => {
  nav.classList.add("active-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("active-nav");
});
