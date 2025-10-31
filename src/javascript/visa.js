// Visa Application Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const visaForm = document.querySelector('.application-form');
    const submitButton = document.getElementById('submitApplication');
    const termsCheckbox = document.getElementById('terms');
    
    // Form submission handler
    visaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitApplication();
        }
    });
    
    // Real-time validation
    const formInputs = visaForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearError(this);
        });
    });
    
    // File input validation
    const fileInputs = visaForm.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            validateFile(this);
        });
    });
    
    // Date validation
    const travelDate = document.getElementById('travelDate');
    const returnDate = document.getElementById('returnDate');
    const passportExpiry = document.getElementById('passportExpiry');
    
    [travelDate, returnDate, passportExpiry].forEach(dateInput => {
        dateInput.addEventListener('change', function() {
            validateDate(this);
        });
    });
    
    // Validation functions
    function validateForm() {
        let isValid = true;
        clearAllErrors();
        
        // Validate all required fields
        const requiredFields = visaForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        // Validate terms agreement
        if (!termsCheckbox.checked) {
            showError(termsCheckbox, 'You must agree to the terms and conditions');
            isValid = false;
        }
        
        // Validate date logic
        if (travelDate.value && returnDate.value) {
            const travel = new Date(travelDate.value);
            const return_ = new Date(returnDate.value);
            
            if (return_ <= travel) {
                showError(returnDate, 'Return date must be after travel date');
                isValid = false;
            }
        }
        
        // Validate passport expiry
        if (passportExpiry.value) {
            const expiry = new Date(passportExpiry.value);
            const sixMonthsFromNow = new Date();
            sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
            
            if (expiry <= sixMonthsFromNow) {
                showError(passportExpiry, 'Passport must be valid for at least 6 months from travel date');
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        
        switch(field.type) {
            case 'email':
                if (!isValidEmail(value)) {
                    showError(field, 'Please enter a valid email address');
                    isValid = false;
                }
                break;
                
            case 'tel':
                if (!isValidPhone(value)) {
                    showError(field, 'Please enter a valid phone number');
                    isValid = false;
                }
                break;
                
            case 'text':
                if (field.id === 'passportNumber' && !isValidPassport(value)) {
                    showError(field, 'Please enter a valid passport number');
                    isValid = false;
                }
                break;
        }
        
        if (field.required && !value) {
            showError(field, 'This field is required');
            isValid = false;
        }
        
        if (isValid) {
            clearError(field);
        }
        
        return isValid;
    }
    
    function validateFile(fileInput) {
        if (!fileInput.required && !fileInput.files.length) {
            return true;
        }
        
        if (fileInput.required && !fileInput.files.length) {
            showError(fileInput, 'This file is required');
            return false;
        }
        
        const file = fileInput.files[0];
        const maxSize = fileInput.id === 'passportPhoto' ? 2 * 1024 * 1024 : 5 * 1024 * 1024; // 2MB or 5MB
        
        if (file.size > maxSize) {
            showError(fileInput, `File size must be less than ${maxSize / 1024 / 1024}MB`);
            return false;
        }
        
        clearError(fileInput);
        return true;
    }
    
    function validateDate(dateInput) {
        const value = dateInput.value;
        if (!value) return true;
        
        const date = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (dateInput.id === 'travelDate' && date < today) {
            showError(dateInput, 'Travel date cannot be in the past');
            return false;
        }
        
        clearError(dateInput);
        return true;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        const phoneRegex = /^[/+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-/(/)]/g, ''));
    }
    
    function isValidPassport(passport) {
        return passport.length >= 6 && passport.length <= 12;
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
        const errorFields = visaForm.querySelectorAll('.error');
        errorFields.forEach(field => {
            clearError(field);
        });
    }
    
    function submitApplication() {
        // Show loading state
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        
        // Collect form data
        const applicationData = {
            personalInfo: {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                nationality: document.getElementById('nationality').value,
                passportNumber: document.getElementById('passportNumber').value,
                passportExpiry: document.getElementById('passportExpiry').value
            },
            travelInfo: {
                destination: document.getElementById('destination').value,
                purpose: document.getElementById('purpose').value,
                travelDate: document.getElementById('travelDate').value,
                returnDate: document.getElementById('returnDate').value,
                additionalInfo: document.getElementById('additionalInfo').value
            }
        };
        
        // Simulate API call
        setTimeout(() => {
            console.log('Visa application submitted:', applicationData);
            
            // Show success message
            showSuccessMessage('Your visa application has been submitted successfully! We will contact you within 24 hours.');
            
            // Reset form
            visaForm.reset();
            
            // Reset button
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
            
            // Scroll to success message
            const successMessage = document.querySelector('.success-message');
            if (successMessage) {
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 2000);
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
        
        // Insert before the form
        visaForm.parentNode.insertBefore(successElement, visaForm);
        
        // Auto-remove success message after 5 seconds
        setTimeout(() => {
            if (successElement.parentNode) {
                successElement.remove();
            }
        }, 5000);
    }
    
    // Live chat functionality
    const liveChatBtn = document.querySelector('.btn-chat');
    if (liveChatBtn) {
        liveChatBtn.addEventListener('click', function() {
            alert('Live chat feature would open here. In a real implementation, this would connect to a chat service.');
        });
    }
    
    // Contact specialist functionality
    const specialistBtn = document.querySelector('.btn-specialist');
    if (specialistBtn) {
        specialistBtn.addEventListener('click', function() {
            window.location.href = 'ContactUs.html?specialist=visa';
        });
    }
});
