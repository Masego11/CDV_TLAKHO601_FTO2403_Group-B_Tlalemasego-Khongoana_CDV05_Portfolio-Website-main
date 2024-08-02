// Selecting the navigation toggle button and all navigation links 

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

// Event listener to toggle Navigation
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Event listener to close navigation on click
navLinks.forEach(link => {
    link.addEventListener ('click', () => {
        document.body.classList.remove('nav-open');
    });
});

