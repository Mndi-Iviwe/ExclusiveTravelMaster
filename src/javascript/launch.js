// Package data
// Package data


// DOM Elements
const packagesGrid = document.getElementById('packages-grid');
const searchButton = document.querySelector('.search-button');
const destinationInput = document.getElementById('destination');
const travelDateInput = document.getElementById('travel-date');
const durationSelect = document.getElementById('duration');
const viewAllButton = document.querySelector('.btn-view-all');
const loginButton = document.querySelector('.btn-login');
const registerButton = document.querySelector('.btn-register');
const explorePackagesButton = document.querySelector('.btn-primary');
const contactUsButton = document.querySelector('.btn-secondary');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load packages
    renderPackages(packagesData);
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize date picker for travel date
    initializeDatePicker();
});

// Render packages to the grid
export function renderPackages(pkg) {
    
    pkg.forEach(pkg => {
        const packageCard = document.createElement('div');
        packageCard.className = 'package-card';
        packageCard.innerHTML = `
            
        `;
        packagesGrid.appendChild(packageCard);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.btn-view-details').forEach(button => {
        button.addEventListener('click', function() {
            const packageId = this.getAttribute('data-id');
            viewPackageDetails(packageId);
        });
    });
}

// Set up event listeners
export function setupEventListeners() {
    // Search button
    searchButton.addEventListener('click', handleSearch);
    
    // View all packages button
    if (viewAllButton) {
        viewAllButton.addEventListener('click', function() {
            alert('Viewing all packages. This would typically navigate to a packages page.');
        });
    }
    
    // Login button
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            alert('Login functionality would be implemented here.');
        });
    }
    
    // Register button
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            alert('Registration functionality would be implemented here.');
        });
    }
    
    // Explore packages button
    if (explorePackagesButton) {
        explorePackagesButton.addEventListener('click', function() {
            document.querySelector('.packages-section').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Contact us button
    if (contactUsButton) {
        contactUsButton.addEventListener('click', function() {
            alert('Contact form would be displayed here.');
        });
    }
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target === '#') {
                // For demo purposes, just show an alert
                alert(`Navigating to ${this.textContent}`);
            } else {
                // In a real implementation, this would navigate to the appropriate page
                window.location.href = target;
            }
        });
    });
    
    // Footer links
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`Navigating to ${this.textContent}`);
        });
    });
}

// Initialize date picker
export function initializeDatePicker() {
    // In a real implementation, you would use a date picker library
    // For this demo, we'll just set it as a text input
    travelDateInput.setAttribute('type', 'text');
    travelDateInput.setAttribute('placeholder', 'Select date');
    
    // Add a simple date picker functionality
    travelDateInput.addEventListener('focus', function() {
        this.setAttribute('type', 'date');
    });
    
    travelDateInput.addEventListener('blur', function() {
        if (!this.value) {
            this.setAttribute('type', 'text');
        }
    });
}

// Handle search functionality
export function handleSearch() {
    const destination = destinationInput.value.toLowerCase();
    const duration = durationSelect.value;
    
    let filteredPackages = packagesData;
    
    // Filter by destination
    if (destination) {
        filteredPackages = filteredPackages.filter(pkg => 
            pkg.title.toLowerCase().includes(destination) || 
            pkg.location.toLowerCase().includes(destination)
        );
    }
    
    // Filter by duration
    if (duration) {
        filteredPackages = filteredPackages.filter(pkg => {
            const days = parseInt(pkg.duration);
            if (duration === '3-5') return days >= 3 && days <= 5;
            if (duration === '5-7') return days >= 5 && days <= 7;
            if (duration === '7-10') return days >= 7 && days <= 10;
            if (duration === '10+') return days >= 10;
            return true;
        });
    }
    
    // Render filtered packages
    renderPackages(filteredPackages);
    
    // Show message if no packages found
    if (filteredPackages.length === 0) {
        packagesGrid.innerHTML = `
            <div class="no-packages">
                <h3>No packages found matching your criteria</h3>
                <p>Try adjusting your search filters</p>
            </div>
        `;
    }
}

// View package details
export function viewPackageDetails(packageId) {
    const selectedPackage = packagesData.find(pkg => pkg.id == packageId);
    if (selectedPackage) {
        // In a real implementation, this would navigate to a details page
        // For this demo, we'll show an alert with package details
        alert(`Package Details:\n\n${selectedPackage.title}\n${selectedPackage.duration}\n${selectedPackage.description}\nPrice: ${selectedPackage.price} per person`);
    }
}

// Add some CSS for the no packages message
const style = document.createElement('style');
style.textContent = `
    .no-packages {
        grid-column: 1 / -1;
        text-align: center;
        padding: 40px;
        color: #6B7280;
    }
    
    .no-packages h3 {
        margin-bottom: 16px;
        color: #0F3460;
    }
`;
document.head.appendChild(style);