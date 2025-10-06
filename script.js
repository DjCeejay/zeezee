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
// ...existing code...

// Select elements (guarded — carousel may not be present on every page)
const track = document.querySelector('.carousel-track');

if (track) {
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

    // Event listeners for navigation buttons (only attach if buttons exist)
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
        });
    }
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
        });
    }

    // Auto-slide every 5 seconds (only if there's more than one slide)
    if (slideCount > 1) {
        setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }
}

// ...existing code...

// =========================
// COLLECTION POPUPS
// =========================

// Grab all "View Collection" buttons
const exploreButtons = document.querySelectorAll(".explore-btn");
// Grab all modals
const modals = document.querySelectorAll(".collection-modal");
// Grab all close buttons
const closeButtons = document.querySelectorAll(".close-btn");

// Function to open modal
function openModal(category) {
    const modal = document.getElementById(`modal-${category}`);
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }
}

// Function to close modal
function closeModal(modal) {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Restore scroll
}

// Attach event listeners to "View Collection" buttons
exploreButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".category-card");
        const category = card.getAttribute("data-category");
        openModal(category);
    });
});

// Attach event listeners to close buttons
closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const modal = e.target.closest(".collection-modal");
        closeModal(modal);
    });
});

// Close modal when clicking outside modal content
modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});


