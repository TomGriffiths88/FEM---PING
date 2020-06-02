(function () {
  var form = document.querySelector('.form');
  var input = document.querySelector('.form__input');
  var feedback = document.querySelector('.form__feedback');
  var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function init() {
    form.addEventListener('submit', validateFields);
  }

  function validateFields(e) {
    e.preventDefault();
    resetFormStyles();

    var email = e.target.email.value;

    if (email.trim() === '') {
      markFormInvalid('Whoops! It looks like you forgot to add your email');
      return;
    }

    if (!regEx.test(email)) {
      markFormInvalid('Please provide a valid email address');
    } else {
      markFormSuccess('Thanks for subscribing!');
    }
  }

  function markFormInvalid(message) {
    input.classList.add('form--invalid');
    feedback.classList.add('form--input-invalid');
    feedback.innerHTML = message;
  }

  function markFormSuccess(message) {
    feedback.innerHTML = message;
    feedback.classList.add('form--input-success');
  }

  function resetFormStyles() {
    feedback.innerHTML = '';
    feedback.classList.remove('form--input-success');
    feedback.classList.remove('form--input-invalid');
    input.classList.remove('form--invalid');
  }

  init();
})();
