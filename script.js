console.log(1);

const burger = document.querySelector(".header__burger");
const burgerItems = document.querySelectorAll(".header__burger-item");

burger.addEventListener("click", () => {
  burgerItems.forEach((item) => {
    item.classList.toggle("open");
  });
});
// DROPDOWN
// const headerItems = document.querySelectorAll(".header__item-js");

// headerItems.forEach(function (item) {
//   const dropdown = item.querySelector(".header-dropdown-js");

//   item.addEventListener("click", function () {
//     const isActive = dropdown.classList.contains("header__dropdown-active");

//     const allDropdowns = document.querySelectorAll(".header-dropdown-js");
//     allDropdowns.forEach(function (dropdown) {
//       dropdown.classList.remove("header__dropdown-active");
//     });

//     if (isActive && item !== document.activeElement) {
//       dropdown.classList.remove("header__dropdown-active");
//     } else {
//       dropdown.classList.add("header__dropdown-active");
//     }
//   });
// });
// BURGER BTN

const button = document.querySelector(".burger-btn-js");
const burgerContainer = document.querySelector(".burger__container");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  burgerContainer.classList.toggle("burger-show");
});
//

const burgerList = document.querySelectorAll(".burger-item-js");

burgerList.forEach(function (item) {
  const subtitles = item.querySelector(".burger-list-item-js");

  item.addEventListener("click", function () {
    const isActive = item.classList.contains("active");

    const allSubtitles = document.querySelectorAll(".burger-list-item-js");
    allSubtitles.forEach(function (subtitle) {
      subtitle.classList.remove("burger__list-item--show");
    });

    if (isActive) {
      item.classList.remove("active");
      subtitles.classList.remove("burger__list-item--show");
    } else {
      item.classList.add("active");
      subtitles.classList.add("burger__list-item--show");
    }
  });
});

