// displays error when incorrect information is displayed

function submitError() {
  const finalError = document.getElementById('submit_error');
  finalError.innerHTML = 'Please correct incomplete fields';
}

// creates error when an incorrect email addressed is typed

function emailError(emailInput, emailTest, submit) {
  const error = document.getElementById('email_error');
  if (emailTest) {
    emailInput.className = 'valid';
    error.innerHTML = '';
  } else {
    emailInput.className = 'invalid';
    error.innerHTML = 'Please enter a valid e-mail address';
    if (submit === true) {
      submitError();
    }
  }
}

// creates test for a valid email

function validateEmail(submit) {
  const emailInput = document.getElementById('email').value;
  const validEmail = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const emailTest = validEmail.test(emailInput);
  emailError(emailInput, emailTest, submit);
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

function countryError(countryInput, countryTest, submit) {
  const error = document.getElementById('country_error');
  if (countryTest) {
    countryInput.className = 'valid';
    error.innerHTML = '';
  } else {
    countryInput.className = 'invalid';
    error.innerHTML = 'Please enter a country name';
    if (submit === true) {
      submitError();
    }
  }
}

// validates correct country name input

function validateCountry(submit) {
  const countryInput = document.getElementById('country').value;
  const error = document.getElementById('country_error');
  if (countryInput.length >= 2 && countryInput.length <= 74) {
    const validCountry = (/^[a-zA-Z0-9.&'_`-]*$/);
    const countryTest = validCountry.test(countryInput);
    countryError(countryInput, countryTest, submit);
  } else {
    countryInput.className = 'invalid';
    error.innerHTML = 'Please enter a name between 2 and 74 characters';
    if (submit === true) {
      submitError();
    }
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

// registers error for invalid zip code

function zipCodeError(zipCodeTest, zipCode, submit) {
  const error = document.getElementById('zipcode_error');
  if (zipCodeTest) {
    zipCode.className = 'valid';
    error.innerHTML = '';
  } else {
    zipCode.className = 'invalid';
    error.innerHTML = 'Please enter a valid numeric zipcode.';
    if (submit === true) {
      submitError();
    }
  }
}

// defines test for a valid zip code

function validateZipCode(submit) {
  const zipCode = document.getElementById('zipcode').value;
  const error = document.getElementById('zipcode_error');
  if (zipCode.length >= 5 && zipCode.length <= 10) {
    const validZipCode = (/^[0-9-]*$/);
    const zipCodeTest = validZipCode.test(zipCode);
    zipCodeError(zipCodeTest, zipCode, submit);
  } else {
    zipCode.className = 'invalid';
    error.innerHTML = 'Please enter a zip code between 5 and 10 characters.';
    if (submit === true) {
      submitError();
    }
  }
}

// registers zip code upon input

function getZipCode() {
  const zipCode = document.getElementById('zipcode');

  // designates that form has not yet been submitted when printing an error
  const submit = false;

  zipCode.addEventListener('input', () => {
    validateZipCode(submit);
  });
}

// registers an error for incorrect password

function passwordError(passwordTest, password, submit) {
  const error = document.getElementById('password_error');
  if (passwordTest) {
    password.className = 'valid';
    error.innerHTML = '';
  } else {
    password.className = 'invalid';
    error.innerHTML = 'Please enter a valid password';
    if (submit === true) {
      submitError();
    }
  }
}

// tests password input for validity

function validatePassword(submit) {
  const password = document.getElementById('password').value;
  const validPassword = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/);
  const passwordTest = validPassword.test(password);
  passwordError(passwordTest, password, submit);
}

// registers input for password

function getPassword() {
  const password = document.getElementById('password');

  // designates that form has not yet been submitted when printing an error
  const submit = false;

  password.addEventListener('input', () => {
    validatePassword(submit);
  });
}

function confirmError(confirm, password, submit) {
  const error = document.getElementById('confirm_error');
  if (confirm === password) {
    confirm.className = 'valid';
    error.innerHTML = '';
  } else {
    confirm.className = 'invalid';
    error.innerHTML = 'Passwords must match exactly.';
    if (submit === true) {
      submitError();
    }
  }
}

// validate passwords match

function validateConfirm(submit) {
  const confirm = document.getElementById('confirm').value;
  const password = document.getElementById('password').value;
  confirmError(confirm, password, submit);
}

// retrieves password confirmation

function getConfirm() {
  const confirm = document.getElementById('confirm');

  // designates that form has not yet been submitted when printing an error
  const submit = false;

  confirm.addEventListener('input', () => {
    validateConfirm(submit);
  });
}

// validates all fields upon submission

function submitForm() {
  const submit = true;
  validateEmail(submit);
  validateCountry(submit);
  validateZipCode(submit);
  validatePassword(submit);
  validateConfirm(submit);
}

// selects submit form

function selectSubmit() {
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    submitForm();
  });
}

// activates fields in the form

(function initializeValidation() {
  getEmail();
  getCountry();
  getZipCode();
  getPassword();
  getConfirm();
  selectSubmit();
}());
