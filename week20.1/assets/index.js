const form  = document.forms.my_form;
console.log(1, form);

const email = document.getElementById('email');
console.log(2, email);
const emailError = document.getElementById('email__error');
const age = document.getElementById('age');
console.log(4, age);
const ageError = document.getElementById('age__error');
const name1 = document.getElementById('name');
console.log(7, name1);
const name1Error = document.getElementById('name__error');
console.log(11, name1);



email.addEventListener('input', function (event) {
  // Каждый раз, когда пользователь что-то вводит,
  // мы проверяем, являются ли поля формы валидными

  if (email.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    emailError.textContent = ''; // Сбросить содержимое сообщения
    emailError.className = 'error'; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    showErrorEmail();
  }
});

age.addEventListener('input', function (event) {
  // Каждый раз, когда пользователь что-то вводит,
  // мы проверяем, являются ли поля формы валидными

  if (age.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    ageError.textContent = ''; // Сбросить содержимое сообщения
    ageError.className = 'error'; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    showErrorAge();
  }
});

name1.addEventListener('input', function (event) {
  // Каждый раз, когда пользователь что-то вводит,
  // мы проверяем, являются ли поля формы валидными

  if (name1.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    name1Error.textContent = ''; // Сбросить содержимое сообщения
    name1Error.className = 'error'; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    showErrorName1();
  }
});

form.addEventListener('submit', function (event) {
  console.log(3, email.value);
  console.log(5, age.value);
  console.log(6, name1.value);
  // Если поле email валдно, позволяем форме отправляться

  if(!email.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showErrorEmail();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
  if(!age.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showErrorAge();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();

  }
  if(!name1.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showErrorName1();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
});

function showErrorEmail() {
  if(email.validity.valueMissing) {
    // Если поле пустое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    // Если поле содержит не email-адрес,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    // Если содержимое слишком короткое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;

    emailError.className = 'error active';
  }}

function showErrorAge() {
  if(age.validity.valueMissing) {
    // Если поле пустое,
    // отображаем следующее сообщение об ошибке
    ageError.textContent = 'You need to enter your age';

    ageError.className = 'error active';
  }}

function showErrorName1() {
  if(name1.validity.valueMissing) {
    // Если поле пустое,
    // отображаем следующее сообщение об ошибке
    name1Error.textContent = 'You need to enter Name';
  } else if(name1.validity.patternMismatch) {
    // Если поле содержит не email-адрес,
    // отображаем следующее сообщение об ошибке
    name1Error.textContent = 'It is allowed to use only spaces and Russian letters';
  } else if(name1.validity.tooShort) {
    // Если содержимое слишком короткое,
    // отображаем следующее сообщение об ошибке
    name1Error.textContent = `name should be at least ${name1.minLength} characters; you entered ${name1.value.length }.`;}
    name1Error.className = 'error active';
  }



