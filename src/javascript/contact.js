// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();
        
        // Clear previous errors
        clearAllErrors();
        
        // Validation
        let isValid = true;
        
        if (!name) {
            showError(nameInput, 'Please enter your name');
            isValid = false;
        }
        
        if (!validateEmail(email)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!subject) {
            showError(subjectInput, 'Please enter a subject');
            isValid = false;
        }
        
        if (isValid) {
            submitContactForm(name, email, subject, message);
        }
    });
    
    // Real-time validation
    const inputs = [nameInput, emailInput, subjectInput, messageInput];
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearError(this);
        });
    });
    
    // Field-specific validation
    emailInput.addEventListener('blur', function() {
        if (this.value.trim() && !validateEmail(this.value.trim())) {
            showError(this, 'Please enter a valid email address');
        }
    });
    
    // Validation functions
    function validateField(field) {
        const value = field.value.trim();
        
        switch(field.id) {
            case 'name':
                if (!value) {
                    showError(field, 'Please enter your name');
                    return false;
                }
                break;
                
            case 'email':
                if (!value) {
                    showError(field, 'Please enter your email address');
                    return false;
                }
                if (!validateEmail(value)) {
                    showError(field, 'Please enter a valid email address');
                    return false;
                }
                break;
                
            case 'subject':
                if (!value) {
                    showError(field, 'Please enter a subject');
                    return false;
                }
                break;
        }
        
        clearError(field);
        return true;
    }
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(field, message) {
        field.classList.add('error');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add new error message
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }
    
    function clearError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    function clearAllErrors() {
        const errorFields = document.querySelectorAll('.form-input.error, .form-textarea.error');
        errorFields.forEach(field => {
            clearError(field);
        });
        
        const successMessages = document.querySelectorAll('.success-message');
        successMessages.forEach(message => {
            message.remove();
        });
    }
    
    function submitContactForm(name, email, subject, message) {
        // Show loading state
        const submitButton = contactForm.querySelector('.btn-send-message');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call (replace with actual API endpoint)
        setTimeout(() => {
            // In a real application, you would send the data to your server here
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            showSuccessMessage('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Scroll to success message
            const successMessage = document.querySelector('.success-message');
            if (successMessage) {
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 1500);
    }
    
    function showSuccessMessage(message) {
        // Remove existing success message
        const existingSuccess = document.querySelector('.success-message');
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        // Create success message
        const successElement = document.createElement('div');
        successElement.className = 'success-message';
        successElement.textContent = message;
        
        // Insert after the form
        contactForm.parentNode.insertBefore(successElement, contactForm.nextSibling);
        
        // Auto-remove success message after 5 seconds
        setTimeout(() => {
            if (successElement.parentNode) {
                successElement.remove();
            }
        }, 5000);
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects for contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1.05)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Form input styling on focus
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#0B2A5B';
            this.style.boxShadow = '0 0 0 3px rgba(11, 42, 91, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
    });
});