const form = document.getElementById('login-form');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const password = passwordInput.value;

    if (password === '1182008_Sheep') {
        window.location.href = 'https://creatomat.github.io/prototype/index.html';
    } else {
        alert('Incorrect password');
    }
});
