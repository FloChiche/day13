function handleSubmit() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';
    if (firstname === '') {
        errorElement.textContent = "First name must not be empty";
        return false;
    }
    if (lastname === '') {
        errorElement.textContent = "Last name must not be empty";
        return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorElement.textContent = "Email is badly formatted";
        return false;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password.length <= 7 || !passwordPattern.test(password)) {
        errorElement.textContent = "Password must be at least 8 characters long and contain at least a letter and a number";
        return false;
    }

    return true;
}
