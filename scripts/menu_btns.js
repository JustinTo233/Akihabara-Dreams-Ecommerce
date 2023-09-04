const toggleBtn = document.getElementsByClassName('mobile-menu-icon')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
