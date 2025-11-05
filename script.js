document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Simulate login logic and redirect
    window.location.href = 'dashboard.html';
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Simulate registration logic and redirect to login
    alert('Registration successful! Please log in.');
    window.location.href = 'index.html';
});