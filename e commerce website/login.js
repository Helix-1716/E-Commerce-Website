// Get the login form elements
const loginForm = document.querySelector('.wrapper');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');
const loginButton = document.querySelector('.btn');
const registerLink = document.querySelector('.register-link a');

// Add event listener to the login button
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate the input fields
  if (username === '' || password === '') {
    alert('Please fill in both username and password');
    return;
  }

  // Simulate a login request (replace with your actual login API call)
  const userData = { username, password };
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // Login successful, redirect to the main website
      window.location.href = '/main';
    } else {
      alert('Invalid username or password');
    }
  })
  .catch((error) => console.error(error));
});

// Add event listener to the register link
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '/register';
});