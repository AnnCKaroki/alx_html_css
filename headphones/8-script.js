document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const navBar = document.querySelector('.nav-bar');

    toggleButton.addEventListener('click', () => {
        navBar.classList.toggle('menu-open');
    });
});
