'use strict';


(function () {
  var callRequest = document.querySelector('.main-nav__call');
  var closeButton = document.querySelector('.pop-up__close-icon');
  var overlay = document.querySelector('.intro__overlay');
  var contactForm = document.querySelector('.intro__form .pop-up');
  var body = document.querySelector('body');

  callRequest.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.remove('visually-hidden');
    document.querySelector('.pop-up__input').focus();
    body.classList.add('no-scroll');
  });

  closeButton.addEventListener('click', function () {
    overlay.classList.add('visually-hidden');
    body.classList.remove('no-scroll');
  });


  overlay.addEventListener('click', function () {
    overlay.classList.add('visually-hidden');
    body.classList.remove('no-scroll');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      overlay.classList.add('visually-hidden');
      body.classList.remove('no-scroll');
    }
  });

  contactForm.addEventListener('click', function (evt) {
    evt.stopPropagation();
  });

})();


(function () {
  var popUpTextInputs = document.querySelectorAll('.intro__form input[type="text"], .intro__form input[type="tel"], .intro__form textarea');

  popUpTextInputs.forEach(function (el) {
    el.addEventListener('keyup', function (event) {
      var val = event.target.value;
      var key = 'unsubmitted_' + event.target.name;
      localStorage.setItem(key, val);
    });
  });

  document.querySelector('.pop-up__submit').addEventListener('click', function () {
    popUpTextInputs.forEach(function (el) {
      var key = el.name;
      var val = el.value;
      localStorage.setItem(key, val);
    });
  });
})();


(function () {
  var popUpNumber = document.querySelector('.pop-up__input--phone');
  new Inputmask('\\+7 \\(999\\)-9999999').mask(popUpNumber);

  var questionFormNumber = document.querySelector('.question-form__input--tel');
  new Inputmask('\\+7 \\(999\\)-9999999').mask(questionFormNumber);
})();

