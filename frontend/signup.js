document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signup-btn').addEventListener('click', async () => {
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value.trim();
        const error = document.getElementById('signup-error');

        if (name && email && password) {
            try {
                const response = await fetch('/api/user/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Sign Up Successful! Redirecting to Login page...');
                    error.style.display = 'none';
                    window.location.href = '/login';
                } else {
                    error.textContent = data.message || 'Sign Up Failed!';
                    error.style.display = 'block';
                }
            } catch (err) {
                error.textContent = 'An error occurred. Please try again later.';
                error.style.display = 'block';
            }
        } else {
            error.textContent = 'All fields are required!';
            error.style.display = 'block';
        }
    });
});