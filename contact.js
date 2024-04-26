document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form fields
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const inquiry = form.inquiry.value;

    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const inquiryError = document.getElementById('inquiry-error');

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    inquiryError.textContent = '';

    // Validation flags
    let valid = true;

    // Validate name
    if (!name.trim()) {
        nameError.textContent = 'Name is required.';
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format.';
        valid = false;
    }

    // Validate inquiry
    if (!inquiry.trim()) {
        inquiryError.textContent = 'Inquiry is required.';
        valid = false;
    }

    // If form is valid, submit and show confirmation message
    if (valid) {
        // For demo purposes, log form data (replace this with actual form submission)
        console.log('Form submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Inquiry:', inquiry);

        // Show confirmation message
        document.getElementById('confirmation').classList.remove('hidden');

        // Reset the form
        form.reset();
    }
});
