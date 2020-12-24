(function initializeValidation() {
  getEmail();
  getCountry();
//   getZipCode();
//   getPassword();
//   getConfirm();
  selectSubmit();
}) ();

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
  let error = document.getElementById('email_error');
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
  // TODO: correct test for valid country name
  const validCountry = country.length >= 2 && country.length <= 74 && /[a-zA-Z.-]/;
  let error = document.getElementById('country_error');
  if (validCountry === true) {
    country.className = 'valid';
    error.innerHTML = '';
  } else {
    country.className = 'invalid';
    error.innerHTML = 'Please enter a country name';
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
  let error = document.getElementById('email_error');

  // TODO: Create error upon incorrect submission
  if (emailTest === false) {
    email.className = 'valid';
    error.textContent = 'Invalid email address';
  } else {
    email.className = 'valid';
    error.textContent = '';
  }
}
