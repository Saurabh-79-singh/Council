function showTab(tab) {
    document.getElementById('login-form').style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById('signup-form').style.display = tab === 'signup' ? 'block' : 'none';
    document.getElementById('forgot-form').style.display = tab === 'forgot' ? 'block' : 'none';

    document.getElementById('login-tab').classList.toggle('active', tab === 'login');
    document.getElementById('signup-tab').classList.toggle('active', tab === 'signup');
    document.getElementById('forgot-tab').classList.toggle('active', tab === 'forgot');
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    // Basic validation
    if (!username || !password) {
        errorDiv.textContent = 'Please fill in both fields.';
        return;
    }

    // Mock authentication
    if (username === 'admin' && password === 'password123') {
      //  alert('Login successful!');
        errorDiv.textContent = '';
        // Redirect to another HTML page
        window.location.href = 'dashboard.html'; // Replace with your target HTML page
    } else {
        errorDiv.textContent = 'Invalid username or password.';
    }
}

