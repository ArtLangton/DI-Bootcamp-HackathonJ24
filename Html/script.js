<script>
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById('email');
    const subscribeText = document.querySelector('.subscribe-text');

    emailInput.addEventListener('focus', function () {
        subscribeText.style.display = 'none';
    });

    emailInput.addEventListener('blur', function () 
    {
        if (!emailInput.value.trim()) {
            subscribeText.style.display = 'block';
        }
    });
});
