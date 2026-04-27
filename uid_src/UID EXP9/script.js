document.getElementById('myForm').addEventListener('submit', function (e) {
    // 1. Stop the page from reloading
    e.preventDefault();

    // 2. Select elements
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');

    // 3. Reset error messages
    emailError.textContent = '';
    phoneError.textContent = '';

    let isValid = true;

    // 4. Validate Email
    if (!validator.isEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // 5. Validate Phone (using 'any' for global formats)
    if (!validator.isMobilePhone(phone, 'any')) {
        phoneError.textContent = 'Please enter a valid phone number.';
        isValid = false;
    }

    // 6. Final Action
    if (isValid) {
        console.log('Form Submitted Successfully!');
        console.log('Email:', email);
        console.log('Phone:', phone);
        alert('Success! Check the console for data.');
        
        // Optional: clear the form
        // this.reset();
    }
});