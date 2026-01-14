// Main JavaScript file for Website Creator v1

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Creator v1 loaded successfully');
    
    // Add any interactive functionality here
    initializeAnimations();
    initializeContactForm();
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

/**
 * Initialize contact form handling
 */
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        const statusDiv = document.getElementById('form-status');
        const formData = new FormData(form);
        
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        statusDiv.style.display = 'none';
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success
                statusDiv.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
                statusDiv.className = 'form-status success';
                statusDiv.style.display = 'block';
                form.reset();
            } else {
                // Error from server
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Network error or other issues
            statusDiv.textContent = 'Oops! There was a problem sending your message. Please try again or contact me directly via email.';
            statusDiv.className = 'form-status error';
            statusDiv.style.display = 'block';
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
    
    // Add real-time validation feedback
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear invalid state when user starts typing
            if (this.classList.contains('invalid')) {
                this.classList.remove('invalid');
            }
        });
    });
}

/**
 * Validate individual form field
 */
function validateField(field) {
    if (field.hasAttribute('required') && !field.value.trim()) {
        field.classList.add('invalid');
        return false;
    }
    
    if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            field.classList.add('invalid');
            return false;
        }
    }
    
    field.classList.remove('invalid');
    return true;
}
