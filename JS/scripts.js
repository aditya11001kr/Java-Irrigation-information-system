document.getElementById('login-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    
    if (!email.validity.valid) {
        email.classList.add('is-invalid');
        event.preventDefault();
    } else {
        email.classList.remove('is-invalid');
    }

    if (password.value === '') {
        password.classList.add('is-invalid');
        event.preventDefault();
    } else {
        password.classList.remove('is-invalid');
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirm-password');

    if (name.value === '') {
        name.classList.add('is-invalid');
        event.preventDefault();
    } else {
        name.classList.remove('is-invalid');
    }

    if (!email.validity.valid) {
        email.classList.add('is-invalid');
        event.preventDefault();
    } else {
        email.classList.remove('is-invalid');
    }

    if (password.value === '') {
        password.classList.add('is-invalid');
        event.preventDefault();
    } else {
        password.classList.remove('is-invalid');
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        event.preventDefault();
    } else {
        confirmPassword.classList.remove('is-invalid');
    }
});
