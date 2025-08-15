// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        body.style.overflow = '';
    }
});

// Select elements
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentSlide = 0;
const slideCount = slides.length;

// Function to go to a specific slide
function goToSlide(index) {
    // Wrap around if index is out of bounds
    if (index < 0) {
        index = slideCount - 1;
    } else if (index >= slideCount) {
        index = 0;
    }

    // Move the track to show the selected slide
    track.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

prevButton.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

// Auto-slide every 5 seconds
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);
