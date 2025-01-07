document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');

    if (signupBtn) {
        signupBtn.addEventListener('click', async () => {
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
                    console.error('Sign Up error:', err);
                    error.textContent = 'An error occurred. Please try again later.';
                    error.style.display = 'block';
                }
            } else {
                error.textContent = 'All fields are required!';
                error.style.display = 'block';
            }
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();
            const error = document.getElementById('login-error');

            if (email && password) {
                try {
                    const response = await fetch('/api/user/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                        credentials: 'include'
                    });

                    console.log('Response status:', response.status);

                    const contentType = response.headers.get('content-type');
                    let data;

                    if (contentType && contentType.includes('application/json')) {
                        data = await response.json();
                    } else {
                        throw new Error('Server returned non-JSON response');
                    }

                    console.log('Response data:', data);

                    if (response.ok) {
                        localStorage.setItem('user', JSON.stringify(data));
                        window.location.href = '/';
                    } else {
                        error.textContent = data.message || 'Login failed';
                        error.style.display = 'block';
                    }
                } catch (err) {
                    console.error('Login error:', err);
                    error.textContent = 'An error occurred. Please try again later.';
                    error.style.display = 'block';
                }
            } else {
                error.textContent = 'All fields are required!';
                error.style.display = 'block';
            }
        });
    }
});