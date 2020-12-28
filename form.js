// creates error when an incorrect email addressed is typed

function emailError(emailInput, emailTest) {
  const error = document.getElementById('email_error');
  if (emailTest) {
    emailInput.className = 'valid';
    error.innerHTML = '';
  } else {
    emailInput.className = 'invalid';
    error.innerHTML = 'Please enter a valid e-mail address';
  }
}

// creates test for a valid email

function validateEmail(submit) {
  const emailInput = document.getElementById('email').value;
  const validEmail = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const emailTest = validEmail.test(emailInput);
  if (submit === false) {
    emailError(emailInput, emailTest);
  } else {
    submitError();
  }
}

// reviews email for validity when typed

function getEmail() {
  const email = document.getElementById('email');

  // designates that form has not yet been submitted when printing an error
  const submit = false;

  email.addEventListener('input', () => {
    validateEmail(submit);
  });
}

// displays error upon incorrect input

function countryError(countryInput, countryTest) {
  const error = document.getElementById('country_error');
  if (countryTest) {
    countryInput.className = 'valid';
    error.innerHTML = '';
  } else {
    countryInput.className = 'invalid';
    error.innerHTML = 'Please enter a country name';
  }
}

// validates correct country name input

function validateCountry(submit) {
  const countryInput = document.getElementById('country').value;
  const error = document.getElementById('country_error');
  if (submit === false) {
    if (countryInput.length >= 2 && country.length <= 74) {
      const validCountry = (/^[a-zA-Z0-9.&'_`-]*$/);
      const countryTest = validCountry.test(country); 
      countryError(countryInput, countryTest)
    } else {
      countryInput.className = 'invalid';
      error.innerHTML = 'Please enter a name between 2 and 74 characters';
    }
  } else {
    submitError();
  }
}

// registers country information upon input

function getCountry() {
  const country = document.getElementById('country');

  // designates that form has not yet been submitted when printing an error
  const submit = false;

  country.addEventListener('input', () => {
    validateCountry(submit);
  });
}

function getZipCode() {
  const zipCode = document.getElementById('zipcode');
  zipCode.addEventListener('input', () => {
    validateZipCode();
  });
}

function validateZipCode() {
  const zipCode = document.getElementById('zipcode').value;
  const error = document.getElementById('zipcode_error');
  if (zipCode.length >= 5 && zipCode.length <= 10) {
    const validZipCode = (/^[0-9-]*$/);
    const zipCodeTest = validZipCode.test(zipCode);
    if (zipCodeTest) {
      zipCode.className = 'valid';
      error.innerHTML = '';
    } else {
      zipCode.className = 'invalid';
      error.innerHTML = 'Please enter a valid numeric zipcode.';
    }
  } else {
    zipCode.className = 'invalid';
    error.innerHTML = 'Please enter a zip code between 5 and 10 characters.'
  }
}

function getPassword() {
  const password = document.getElementById('password');
  password.addEventListener('input', () => {
    validatePassword();
  });
}

function validatePassword() {
  const password = document.getElementById('password').value;
  const validPassword = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/);
  const passwordTest = validPassword.test(password);
  const error = document.getElementById('password_error');
  if (passwordTest) {
    password.className = 'valid';
    error.innerHTML = '';
  } else {
    password.className = 'invalid';
    error.innerHTML = 'Please enter a valid password';
  }
  getConfirm(password);
}

function getConfirm(password) {
  const confirm = document.getElementById('confirm');
  confirm.addEventListener('input', () => {
    validateConfirm(password);
  });
}

function validateConfirm(password) {
  const confirm = document.getElementById('confirm').value;
  const error = document.getElementById('confirm_error');
  if (confirm === password) {
    confirm.className = 'valid';
    error.innerHTML = '';
  } else {
    confirm.className = 'invalid';
    error.innerHTML = 'Passwords must match exactly.';
  }
}

// TODO: correct erasure of error messages upon submission

function selectSubmit() {
  console.log('select submit');
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    submitForm();
  });
}

function submitForm() {
  const submit = true;
  validateEmail(submit);
  validateCountry(submit);
}

function submitError() {
  const error = document.getElementById('submit_error');
  error.innerHTML = 'Please correct incomplete fields';
}

(function initializeValidation() {
  getEmail();
  getCountry();
  getZipCode();
  getPassword();
  selectSubmit();
}());
