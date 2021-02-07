'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.pop-up__close-icon');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });




let callRequest = document.querySelector(".main-nav__call");
let closeButton = document.querySelector(".pop-up__close-icon");
let overlay = document.querySelector(".intro__overlay");
let contactForm = document.querySelector(".intro__form .pop-up");


callRequest.addEventListener("click", function () {
  overlay.classList.remove("visually-hidden");
  document.querySelector(".pop-up__input").focus();
});

closeButton.addEventListener("click", function () {
  overlay.classList.add("visually-hidden");
});


overlay.addEventListener("click", function () {
  overlay.classList.add("visually-hidden");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    overlay.classList.add("visually-hidden");
  }
});


contactForm.addEventListener("click", function (evt) {
  evt.stopPropagation();
});




let popUpTextInputs = document.querySelectorAll('.intro__form input[type="text"], .intro__form input[type="tel"], .intro__form textarea');

popUpTextInputs.forEach(function (el) {
  el.addEventListener("keyup", function (event) {
    let val = event.target.value;
    let key = "unsubmitted_" + event.target.name;
    console.log("change", val, key);
    localStorage.setItem(key, val);
  })
});

document.querySelector(".pop-up__submit").addEventListener("click", function () {
  popUpTextInputs.forEach(function (el) {
    let key = el.name;
    let val = el.value;
    localStorage.setItem(key, val);
  });
});



let selector = document.querySelector(".pop-up__input--phone");
new Inputmask("\\+7 \\(999\\)-9999999").mask(selector);
