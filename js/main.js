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
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}
