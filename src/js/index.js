(function () {
  var form = document.querySelector('.form');
  var input = document.querySelector('.form__input');
  var feedback = document.querySelector('.form__feedback');
  var regEx = /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

  function init() {
    form.addEventListener('submit', validateFields);
  }

  function validateFields(e) {
    e.preventDefault();

    var email = e.target.email.value;

    if (email.trim() === '') {
      feedback.innerHTML = 'Whoops! It looks like you forgot to add your email';
      input.classList.add('form--invalid');
      feedback.classList.add('form--active');
      return;
    }

    if (!regEx.test(email)) {
      feedback.innerHTML = 'Please provide a valid email address';
    }
  }

  init();
})();
