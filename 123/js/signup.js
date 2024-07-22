document.addEventListener('DOMContentLoaded', function() {
    var eye = document.getElementById('eye');
    eye.addEventListener('click', function() {
        this.classList.toggle('open');
        var icon = this.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
        var passwordInput = this.previousElementSibling;
        if (this.classList.contains('open')) {
            passwordInput.type = 'password';
        } else {
            passwordInput.type = 'password';
        }
    });
});