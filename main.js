// document.getElementById('scrollButton').addEventListener('click', function() {
//     document.querySelector('#info').scrollIntoView({ behavior: 'smooth' });
//   });

// function scrolToElement(button, scrollElemet) {
//   document
//     .getElementById(button)
//     .addEventListener("click", function () {
//       document.querySelector(scrolToElement).scrollIntoView({ behavior: "smooth" });
//     });
// }

const scrollers = document.querySelectorAll(".scroller");
const addAnimation = function () {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animaited", true);

    const scrollerInner = scroller.querySelector(".ticker");
    const tickerContent = Array.from(scrollerInner.children);

    tickerContent.forEach((item) => {
      const dublicatedItem = item.cloneNode(true);
      dublicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(dublicatedItem);
    });
  });
};
addAnimation();
// ----------

// const burgerMenu = document.querySelectorAll(".burger-n-open-menu");

// function openBurgerMenu() {
//   openButton.addEvent;
// }

// document.querySelectorAll(".open-menu").addEventListener("click", function () {
  
// });

const header = document.querySelector("header");
const openButton = document.querySelector(".open-menu");
openButton.addEventListener("click", () => header.classList.toggle("open"));
openButton.addEventListener("touchstart", () => header.classList.toggle("open"));