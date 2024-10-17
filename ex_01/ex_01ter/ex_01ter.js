function sendFormData() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const data = {
        form: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }
    };
    fetch('http://localhost:3000/validateForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    sendFormData();
});