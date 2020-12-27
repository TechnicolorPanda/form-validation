function getEmail() {
  const email = document.getElementById('email');
  email.addEventListener('input', () => {
    validateEmail();
  });
}

function validateEmail() {
  const email = document.getElementById('email').value;
  const validEmail = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const emailTest = validEmail.test(email);
  const error = document.getElementById('email_error');
  if (emailTest) {
    email.className = 'valid';
    error.innerHTML = '';
  } else {
    email.className = 'invalid';
    error.innerHTML = 'Please enter a valid e-mail address';
  }
}

function getCountry() {
  const country = document.getElementById('country');
  country.addEventListener('input', () => {
    validateCountry();
  });
}

function validateCountry() {
  const country = document.getElementById('country').value;
  // TODO: add length requirement
  const validCountry = (/^[a-zA-Z0-9.&'_`-]*$/);
  const error = document.getElementById('country_error');
  if (validCountry === true) {
    country.className = 'valid';
    error.innerHTML = '';
  } else {
    country.className = 'invalid';
    error.innerHTML = 'Please enter a country name';
  }
}

function getZipCode() {
  const zipCode = document.getElementById('zipcode');
  zipCode.addEventListener('input', () => {
    validateZipCode();
  });
}

function validateZipCode() {
  const zipCode = document.getElementById('zipcode').value;
  const validZipCode = (/^[0-9-]*$/);
  const zipCodeTest = validZipCode.test(zipCode);
  const error = document.getElementById('zipcode_error');
  if (zipCodeTest) {
    zipCode.className = 'valid';
    error.innerHTML = '';
  } else {
    zipCode.className = 'invalid';
    error.innerHTML = 'Please enter a valid numeric zipcode';
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

function selectSubmit() {
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    submitForm();
  });
}

function submitForm() {
  const email = document.getElementById('email').value;
  const validEmail = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const emailTest = validEmail.test(email);
  const error = document.getElementById('email_error');

  // TODO: Create error upon incorrect submission
  if (emailTest === false) {
    email.className = 'valid';
    error.textContent = 'Invalid email address';
  } else {
    email.className = 'valid';
    error.textContent = '';
  }
}

(function initializeValidation() {
  getEmail();
  getCountry();
  getZipCode();
  getPassword();
  selectSubmit();
}());
