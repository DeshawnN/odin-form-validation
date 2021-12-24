const [ email, country, zipCode, password, passwordConfirmation, submitButton ] = document.querySelectorAll('form input');

submitButton.addEventListener('click', function() {
    validateEmail();
    validateCountry();
    validateZipCode();
    validatePassword();
    validateConfirmation();
});


email.addEventListener('input', validateEmail);

country.addEventListener('input', validateCountry);

zipCode.addEventListener('input', validateZipCode);

password.addEventListener('input', validatePassword);

passwordConfirmation.addEventListener('input', validateConfirmation);



function validateEmail() {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid e-mail (e.g. johndoe@mail.com).");
    } else if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter an e-mail address.")
    } else {
        email.setCustomValidity("");
    }
}

function validateCountry() {
    if (country.validity.valueMissing) {
        country.setCustomValidity("Please enter a country.");
    } else {
        country.setCustomValidity("");
    }
}

function validateZipCode() {
    if (zipCode.validity.patternMismatch) {
        zipCode.setCustomValidity("Please enter a valid zipcode (12345 or 12345-6789).")
    } else if (zipCode.validity.valueMissing) {
        zipCode.setCustomValidity("Please enter a zipcode.");
    } else {
        zipCode.setCustomValidity("");
    }
}

function validatePassword() {
    if (password.validity.valueMissing) {
        password.setCustomValidity("Please enter a password.");
    } else {
        password.setCustomValidity("");
    }
}

function validateConfirmation() {
    if (passwordConfirmation.validity.valueMissing) {
        passwordConfirmation.setCustomValidity("Please enter a confirmation password.");
    } else if (passwordConfirmation.value !== password.value) {
        passwordConfirmation.setCustomValidity("Confirmation doesn't match password.");
    } else {
        passwordConfirmation.setCustomValidity("");
    }
}
