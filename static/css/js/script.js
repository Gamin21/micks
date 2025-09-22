// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Challenge button event listener (Gaming section)
    const challengeButton = document.querySelector('.challenge button');
    if (challengeButton) {
        challengeButton.addEventListener('click', function() {
            alert('Challenge accepted! Time to boot up EA FC. ⚽ vs 🥋 – Let the rivalry begin!');
            // Optional: Add confetti or sound effect here if you want to enhance
        });
    }

    // Animate gallery items and hero cards on load (staggered entrance)
    const animateElements = document.querySelectorAll('.gallery-item, .hero-card, .rivalry-card');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200); // Stagger by 200ms
    });

    // Mobile navigation toggle (if screen is small, add hamburger menu functionality)
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.createElement('button'); // Create toggle button if needed
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰'; // Hamburger icon
    navToggle.style.display = 'none'; // Hidden by default

    if (window.innerWidth <= 768) {
        const navContainer = document.querySelector('.nav-container');
        navContainer.insertBefore(navToggle, navMenu);
        navToggle.style.display = 'block';
        navMenu.style.display = 'none'; // Initially hidden on mobile

        navToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'none' ? 'flex' : 'none';
        });
    }

    // Close mobile menu on resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
            navToggle.style.display = 'none';
        }
    });

    // Optional: Add glow effect on hover for interactive elements
    const interactiveElements = document.querySelectorAll('.gallery-item, .hero-card, .rivalry-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(255, 0, 64, 0.6)'; // Neon red glow
        });
        el.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});