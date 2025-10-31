// Registration form validation and functionality
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');
    
    // Form submission handler
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const termsAccepted = termsCheckbox.checked;
        
        // Clear previous errors
        clearAllErrors();
        
        // Validation
        let isValid = true;
        
        if (!firstName) {
            showError(firstNameInput, 'First name is required');
            isValid = false;
        }
        
        if (!lastName) {
            showError(lastNameInput, 'Last name is required');
            isValid = false;
        }
        
        if (!validateEmail(email)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (password.length < 8) {
            showError(passwordInput, 'Password must be at least 8 characters long');
            isValid = false;
        }
        
        if (password !== confirmPassword) {
            showError(confirmPasswordInput, 'Passwords do not match');
            isValid = false;
        }
        
        if (!termsAccepted) {
            showError(termsCheckbox, 'You must agree to the terms and conditions');
            isValid = false;
        }
        
        if (isValid) {
            simulateRegistration(firstName, lastName, email, password);
        }
    });
    
    // Real-time password validation
    passwordInput.addEventListener('input', function() {
        const password = this.value.trim();
        clearError(this);
        
        if (password.length > 0 && password.length < 8) {
            showError(this, 'Password must be at least 8 characters long');
        }
    });
    
    // Real-time password confirmation validation
    confirmPasswordInput.addEventListener('input', function() {
        const password = passwordInput.value.trim();
        const confirmPassword = this.value.trim();
        clearError(this);
        
        if (confirmPassword && password !== confirmPassword) {
            showError(this, 'Passwords do not match');
        }
    });
    
    // Clear errors on input
    const inputs = [firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput];
    inputs.forEach(input => {
        input.addEventListener('input', () => clearError(input));
    });
    
    termsCheckbox.addEventListener('change', () => clearError(termsCheckbox));
    
    // Social login buttons
    const googleBtn = document.querySelector('.btn-google');
    const facebookBtn = document.querySelector('.btn-facebook');
    
    googleBtn.addEventListener('click', function() {
        alert('Google registration would be implemented here');
        // In a real application, this would integrate with Google OAuth
    });
    
    facebookBtn.addEventListener('click', function() {
        alert('Facebook registration would be implemented here');
        // In a real application, this would integrate with Facebook OAuth
    });
    
    // Terms and Privacy links
    const termsLinks = document.querySelectorAll('.terms-link');
    termsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkType = this.textContent.toLowerCase();
            alert(`Opening ${linkType} in a new window...`);
            // In a real application, this would open the actual terms/privacy page
        });
    });
    
    // Helper functions
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(input, message) {
        clearError(input);
        
        if (input.type === 'checkbox') {
            input.style.outline = '2px solid #EF4444';
            input.style.outlineOffset = '2px';
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = '#EF4444';
            errorDiv.style.fontSize = '12px';
            errorDiv.style.marginTop = '4px';
            errorDiv.textContent = message;
            
            input.closest('.terms-agreement').appendChild(errorDiv);
        } else {
            input.style.borderColor = '#EF4444';
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = '#EF4444';
            errorDiv.style.fontSize = '12px';
            errorDiv.style.marginTop = '4px';
            errorDiv.textContent = message;
            
            input.parentNode.appendChild(errorDiv);
        }
    }
    
    function clearError(input) {
        if (input.type === 'checkbox') {
            input.style.outline = 'none';
            const parent = input.closest('.terms-agreement');
            if (parent) {
                const errorMessage = parent.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        } else {
            input.style.borderColor = 'black';
            const errorMessage = input.parentNode.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        }
    }
    
    function clearAllErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        inputs.forEach(input => {
            input.style.borderColor = 'black';
        });
        
        termsCheckbox.style.outline = 'none';
    }
    
    function simulateRegistration(firstName, lastName, email, password) {
        // Show loading state
        const submitBtn = registerForm.querySelector('.btn-create-account');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Creating Account...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // In a real application, this would be an actual API call
            console.log('Registration attempt:', { firstName, lastName, email, password });
            
            // For demo purposes, always succeed
            alert(`Welcome to Exclusive Travels, ${firstName}! Your account has been created successfully.`);
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // In a real application, you would redirect to dashboard or send verification email
            // window.location.href = '/dashboard';
            
        }, 2000);
    }
    
    // Password strength indicator (optional enhancement)
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strengthIndicator = document.getElementById('password-strength') || createPasswordStrengthIndicator();
        
        const strength = calculatePasswordStrength(password);
        updatePasswordStrengthIndicator(strengthIndicator, strength);
    });
    
    function createPasswordStrengthIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'password-strength';
        indicator.style.marginTop = '4px';
        indicator.style.fontSize = '12px';
        passwordInput.parentNode.appendChild(indicator);
        return indicator;
    }
    
    function calculatePasswordStrength(password) {
        let strength = 0;
        
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        
        return strength;
    }
    
    function updatePasswordStrengthIndicator(indicator, strength) {
        const levels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
        const colors = ['#EF4444', '#F59E0B', '#F59E0B', '#10B981', '#10B981', '#059669'];
        
        indicator.textContent = `Password Strength: ${levels[strength]}`;
        indicator.style.color = colors[strength];
    }
});

// Additional registration-specific functionality
const RegistrationManager = {
    init: function() {
        this.setupFormValidation();
        this.setupPasswordVisibility();
    },
    
    setupFormValidation: function() {
        // Additional validation rules can be added here
        console.log('Registration form validation setup complete');
    },
    
    setupPasswordVisibility: function() {
        // This would toggle password visibility (for future enhancement)
        console.log('Password visibility toggle ready for implementation');
    },
    
    validatePassword: function(password) {
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[^A-Za-z0-9]/.test(password)
        };
        
        return requirements;
    }
};

// Initialize registration functionality
RegistrationManager.init();