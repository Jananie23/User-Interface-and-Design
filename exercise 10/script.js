// script.js
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent form from submitting

    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');

    // Clear previous errors
    emailError.textContent = '';
    phoneError.textContent = '';

    let isValid = true;

    // Email validation
    if (!validator.isEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Phone validation
    if (!validator.isMobilePhone(phone, 'any')) {
        phoneError.textContent = 'Please enter a valid phone number.';
        isValid = false;
    }

    if (isValid) {
        console.log('Email:', email);
        console.log('Phone:', phone);
        alert('Form submitted successfully!');
        // You can reset form here if needed
        // document.getElementById('myForm').reset();
    }
});
