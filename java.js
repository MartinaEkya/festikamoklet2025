javascript
// Add smooth scrolling for the scroll prompt
document.addEventListener('DOMContentLoaded', function() {
    const scrollPrompt = document.querySelector('.scroll-prompt');
    if (scrollPrompt) {
        scrollPrompt.addEventListener('click', function() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    }
});
// Redirect ke halaman login saat klik tombol login
document.getElementById('login-button').addEventListener('click', () => {
  window.location.href = 'login.html';
});
// Redirect ke halaman study options saat Start Here ditekan
document.getElementById('start-here-btn').addEventListener('click', () => {
  window.location.href = 'study-options.html';
});

