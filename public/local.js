// // Add event listener for the signup button
// document.getElementById('signup-btn').addEventListener('click', async () => {
//     // Get input values and trim whitespace
//     const name = document.getElementById('signup-name').value.trim();
//     const email = document.getElementById('signup-email').value.trim();
//     const password = document.getElementById('signup-password').value.trim();
//     const error = document.getElementById('signup-error');

//     // Check if all fields are filled
//     if (name && email && password) {
//         try {
//             // Send POST request to signup API
//             const response = await fetch('http://localhost:4000/api/user/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, email, password }),
//             });

//             // Parse the JSON response
//             const data = await response.json();

//             if (response.ok) {
//                 // On success, show alert and reset form
//                 alert('Sign Up Successful! Redirecting to Login page...');
//                 document.getElementById('signup-name').value = '';
//                 document.getElementById('signup-email').value = '';
//                 document.getElementById('signup-password').value = '';
//                 error.style.display = 'none';
//                 // Hide signup form and show login form
//                 document.getElementById('signup').classList.add('hidden');
//                 document.getElementById('login').classList.remove('hidden');
//             } else {
//                 // Display error message from server
//                 error.textContent = data.message || 'Sign Up Failed!';
//                 error.style.display = 'block';
//             }
//         } catch (err) {
//             // Handle network or other errors
//             error.textContent = 'An error occurred. Please try again later.';
//             error.style.display = 'block';
//         }
//     } else {
//         // Show error if fields are missing
//         error.textContent = 'All fields are required!';
//         error.style.display = 'block';
//     }
// });

// // Add event listener for the login button
// document.getElementById('login-btn').addEventListener('click', async () => {
//     // Get input values and trim whitespace
//     const email = document.getElementById('login-email').value.trim();
//     const password = document.getElementById('login-password').value.trim();
//     const error = document.getElementById('login-error');

//     // Check if both fields are filled
//     if (email && password) {
//         try {
//             // Send POST request to login API
//             const response = await fetch('http://localhost:4000/api/user/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             // Parse the JSON response
//             const data = await response.json();

//             if (response.ok) {
//                 // On success, show welcome alert and store user data
//                 alert(`Welcome back, ${data.user.name}!`);
//                 error.style.display = 'none';
//                 localStorage.setItem('user', JSON.stringify(data));

//                 // Redirect to homepage
//                 window.location.href = './index.html';
//             } else {
//                 // Display error message from server
//                 error.textContent = data.message || 'Invalid email or password.';
//                 error.style.display = 'block';
//             }
//         } catch (err) {
//             // Handle network or other errors
//             error.textContent = 'An error occurred. Please try again later.';
//             error.style.display = 'block';
//         }
//     } else {
//         // Show error if fields are missing
//         error.textContent = 'All fields are required!';
//         error.style.display = 'block';
//     }
// });