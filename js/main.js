// Main JavaScript file for Website Creator v1

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Creator v1 loaded successfully');
    
    // Add any interactive functionality here
    initializeAnimations();
});

/**
 * Initialize simple animations for the page
 */
function initializeAnimations() {
    const sections = document.querySelectorAll('section');
    
    // Add fade-in effect for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
}
