// login.js
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Check if username and password match
    if (isValidLogin(username, password)) {
        message.textContent = '';
        // Redirect or do something else after successful login
    } else {
        message.textContent = 'Invalid username or password';
    }
});

function isValidLogin(username, password) {
    const validLogins = [
        { username: 'sanjay', password: 'sanjay123' },
        { username: 'rahul', password: 'rahul123' },
        { username: 'amit', password: 'amit123' },
        { username: 'prajwal', password: 'prajwal123' }
    ];

    return validLogins.some(login => login.username === username && login.password === password);
}
