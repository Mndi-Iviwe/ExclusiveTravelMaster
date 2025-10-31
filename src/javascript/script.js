// Form validation and functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');
    
    // Check if user has saved login credentials
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');
    const rememberMe = localStorage.getItem('rememberMe');
    
    if (rememberMe === 'true' && savedEmail && savedPassword) {
        emailInput.value = savedEmail;
        passwordInput.value = savedPassword;
        rememberCheckbox.checked = true;
    }
    
    // Form submission handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const remember = rememberCheckbox.checked;
        
        // Basic validation
        if (!validateEmail(email)) {
            showError(emailInput, 'Please enter a valid email address');
            return;
        }
        
        if (password.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters long');
            return;
        }
        
        // Save credentials if "Remember me" is checked
        if (remember) {
            localStorage.setItem('savedEmail', email);
            localStorage.setItem('savedPassword', password);
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('savedEmail');
            localStorage.removeItem('savedPassword');
            localStorage.removeItem('rememberMe');
        }
        
        // Simulate login process
        simulateLogin(email, password);
    });
    
    // Clear errors on input
    emailInput.addEventListener('input', () => clearError(emailInput));
    passwordInput.addEventListener('input', () => clearError(passwordInput));
    
    // Social login buttons
    const googleBtn = document.querySelector('.btn-google');
    const facebookBtn = document.querySelector('.btn-facebook');
    
    googleBtn.addEventListener('click', function() {
        alert('Google login would be implemented here');
        // In a real application, this would integrate with Google OAuth
    });
    
    facebookBtn.addEventListener('click', function() {
        alert('Facebook login would be implemented here');
        // In a real application, this would integrate with Facebook OAuth
    });
    
    // Forgot password link
    const forgotPassword = document.querySelector('.forgot-password');
    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        const email = prompt('Please enter your email address to reset your password:');
        if (email && validateEmail(email)) {
            alert(`Password reset instructions have been sent to ${email}`);
        } else if (email) {
            alert('Please enter a valid email address');
        }
    });
    
    // Sign up link
    const signupLink = document.querySelector('.signup-text');
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to registration page...');
        // In a real application, this would navigate to the registration page
    });
    
    // Helper functions
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(input, message) {
        clearError(input);
        input.style.borderColor = '#EF4444';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#EF4444';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '4px';
        errorDiv.textContent = message;
        
        input.parentNode.appendChild(errorDiv);
    }
    
    function clearError(input) {
        input.style.borderColor = 'black';
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    
    function simulateLogin(email, password) {
        // Show loading state
        const submitBtn = loginForm.querySelector('.btn-signin');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Signing in...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // In a real application, this would be an actual API call
            console.log('Login attempt:', { email, password });
            
            // For demo purposes, always succeed
            alert('Login successful! Welcome back to Exclusive Travels.');
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // In a real application, you would redirect to dashboard
            // window.location.href = '/dashboard';
            
        }, 1500);
    }
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.textContent.toLowerCase();
            alert(`Navigating to ${section} section...`);
            // In a real application, this would navigate to the appropriate page
        });
    });
    
    // Header auth buttons
    const headerLoginBtn = document.querySelector('.btn-login');
    const headerRegisterBtn = document.querySelector('.btn-register');
    
    headerLoginBtn.addEventListener('click', function() {
        // Already on login page, just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    headerRegisterBtn.addEventListener('click', function() {
        alert('Redirecting to registration page...');
        // In a real application, this would navigate to the registration page
    });
});

// Additional utility functions for the travel website
const TravelWebsite = {
    // Initialize the website
    init: function() {
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.setupNewsletter();
    },
    
    // Smooth scrolling for anchor links
    setupSmoothScrolling: function() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },
    
    // Mobile menu functionality (for future responsive implementation)
    setupMobileMenu: function() {
        // This would be implemented when adding mobile menu toggle
        console.log('Mobile menu setup ready for implementation');
    },
    
    // Newsletter signup (for future implementation)
    setupNewsletter: function() {
        // This would handle newsletter signup functionality
        console.log('Newsletter setup ready for implementation');
    },
    
    // Destination search functionality (for future implementation)
    searchDestinations: function(query) {
        // This would filter destinations based on search query
        console.log('Searching destinations for:', query);
    },
    
    // Package booking functionality (for future implementation)
    bookPackage: function(packageId) {
        // This would handle package booking process
        console.log('Booking package:', packageId);
    }
};

// Initialize the website
TravelWebsite.init();