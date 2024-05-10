const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Check if username and password match
    if (username === 'sanjay' && password === 'sanjay123')
        
         {
        message.textContent = '';
        // Redirect or do something else after successful login
    } else {
        message.textContent = 'Invalid username or password';
    }
});
