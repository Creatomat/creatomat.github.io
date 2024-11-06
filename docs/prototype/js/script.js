// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to HTML elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const registrationForm = document.getElementById('registrationForm');

// Handle form submission
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  // Create a new user
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User created successfully, redirect to login page or other desired page
      window.location.href = 'login.html';
      alert('Registration successful!');
    })
    .catch((error) => {
      // Handle errors here
      console.error(error);
      alert('Registration failed. Please check your input and try again.');
    });
});
