// Destinations Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Package data
    const packagesData = [
        {
            id: 1,
            title: "Dubai Luxury Getaway",
            image: "images/Dubai.png",
            duration: "7 Days / 6 Nights",
            description: "Experience the height of luxury in Dubai with this exclusive 7-day package. Enjoy 5-star accommodation, desert safaris, and tours of Dubai's most iconic landmarks.",
            price: "R15,999",
            region: "middle-east",
            priceRange: "luxury",
            durationType: "medium",
            popularity: 95,
            details: {
                highlights: [
                    "Burj Khalifa observation deck visit",
                    "Desert safari with dinner",
                    "Palm Jumeirah tour",
                    "Dubai Mall shopping experience",
                    "Traditional dhow cruise"
                ],
                includes: [
                    "5-star hotel accommodation",
                    "Daily breakfast",
                    "Airport transfers",
                    "All tours and activities",
                    "Professional guide services"
                ],
                priceBreakdown: {
                    basePrice: "R12,999",
                    taxes: "R1,500",
                    serviceFee: "R1,500"
                }
            }
        },
        {
            id: 2,
            title: "Mauritius Beach Escape",
            image: "images/Mauritius.png",
            duration: "8 Days / 7 Nights",
            description: "Relax on the pristine beaches of Mauritius with this all-inclusive luxury package. Enjoy water sports, spa treatments, and the beautiful lagoons of this island paradise.",
            price: "R18,500",
            region: "africa",
            priceRange: "luxury",
            durationType: "medium",
            popularity: 88,
            details: {
                highlights: [
                    "Private beach access",
                    "Snorkeling and water sports",
                    "Luxury spa treatments",
                    "Island tour",
                    "Sunset catamaran cruise"
                ],
                includes: [
                    "All-inclusive resort stay",
                    "All meals and drinks",
                    "Water sports equipment",
                    "Airport transfers",
                    "Spa credit"
                ],
                priceBreakdown: {
                    basePrice: "R15,000",
                    taxes: "R2,000",
                    serviceFee: "R1,500"
                }
            }
        },
        {
            id: 3,
            title: "Zanzibar Island Adventure",
            image: "images/Zanzibar.png",
            duration: "6 Days / 5 Nights",
            description: "Discover the spice island of Zanzibar with this exotic package. Explore historic Stone Town, relax on white sand beaches, and experience the unique culture and cuisine.",
            price: "R12,750",
            region: "africa",
            priceRange: "mid-range",
            durationType: "short",
            popularity: 82,
            details: {
                highlights: [
                    "Stone Town historical tour",
                    "Spice plantation visit",
                    "Prison Island excursion",
                    "Jozani Forest exploration",
                    "Traditional Swahili dinner"
                ],
                includes: [
                    "Boutique hotel accommodation",
                    "Breakfast daily",
                    "All tours and activities",
                    "Local guide services",
                    "Airport transfers"
                ],
                priceBreakdown: {
                    basePrice: "R10,000",
                    taxes: "R1,500",
                    serviceFee: "R1,250"
                }
            }
        },
        {
            id: 4,
            title: "Bali Spiritual Retreat",
            image: "images/Bali.png",
            duration: "9 Days / 8 Nights",
            description: "Immerse yourself in the spiritual and cultural richness of Bali with this comprehensive package that combines luxury, wellness, and adventure.",
            price: "R14,999",
            region: "asia",
            priceRange: "mid-range",
            durationType: "long",
            popularity: 92,
            details: {
                highlights: [
                    "Traditional Balinese massage",
                    "Yoga and meditation sessions",
                    "Ubud cultural tour",
                    "Water temple visits",
                    "Rice terrace exploration"
                ],
                includes: [
                    "Luxury villa accommodation",
                    "Daily wellness activities",
                    "All meals",
                    "Airport transfers",
                    "Cultural experiences"
                ],
                priceBreakdown: {
                    basePrice: "R12,000",
                    taxes: "R1,500",
                    serviceFee: "R1,499"
                }
            }
        },
        {
            id: 5,
            title: "Maldives Water Villa Experience",
            image: "images/Maldives.png",
            duration: "5 Days / 4 Nights",
            description: "Indulge in the ultimate luxury with an overwater villa stay in the Maldives. Experience crystal-clear waters, world-class snorkeling, and unparalleled service.",
            price: "R25,000",
            region: "asia",
            priceRange: "luxury",
            durationType: "short",
            popularity: 98,
            details: {
                highlights: [
                    "Overwater villa accommodation",
                    "Private plunge pool",
                    "Coral reef snorkeling",
                    "Sunset dolphin cruise",
                    "Underwater restaurant dining"
                ],
                includes: [
                    "Luxury overwater villa",
                    "All-inclusive gourmet dining",
                    "Water sports equipment",
                    "Spa treatment",
                    "Seaplane transfers"
                ],
                priceBreakdown: {
                    basePrice: "R20,000",
                    taxes: "R3,000",
                    serviceFee: "R2,000"
                }
            }
        },
        {
            id: 6,
            title: "Serengeti Safari Adventure",
            image: "images/Serengeti.png",
            duration: "8 Days / 7 Nights",
            description: "Experience the breathtaking wildlife of Tanzania with this exclusive safari package. Witness the Great Migration, explore the vast plains of Serengeti, and discover the natural wonders of the Ngorongoro Crater.",
            price: "R22,500",
            region: "africa",
            priceRange: "luxury",
            durationType: "medium",
            popularity: 90,
            details: {
                highlights: [
                    "Great Migration viewing",
                    "Ngorongoro Crater safari",
                    "Balloon safari over Serengeti",
                    "Maasai village cultural experience",
                    "Big Five wildlife spotting"
                ],
                includes: [
                    "Luxury safari lodge accommodation",
                    "All game drives",
                    "Professional safari guide",
                    "All meals and drinks",
                    "Park entry fees"
                ],
                priceBreakdown: {
                    basePrice: "R18,000",
                    taxes: "R2,500",
                    serviceFee: "R2,000"
                }
            }
        },
        {
            id: 7,
            title: "Greek Islands Cruise",
            image: "images/Greek.png",
            duration: "7 Days / 6 Nights",
            description: "Island-hop through the stunning Greek Isles on this luxury cruise package. Visit Santorini, Mykonos, Rhodes, and more while enjoying the crystal-clear waters of the Aegean Sea.",
            price: "R16,800",
            region: "europe",
            priceRange: "luxury",
            durationType: "medium",
            popularity: 85,
            details: {
                highlights: [
                    "Santorini sunset views",
                    "Mykonos windmills and beaches",
                    "Ancient Rhodes exploration",
                    "Crete palace of Knossos",
                    "Traditional Greek cooking class"
                ],
                includes: [
                    "Luxury cruise accommodation",
                    "All onboard meals",
                    "Shore excursions",
                    "Port taxes and fees",
                    "Onboard entertainment"
                ],
                priceBreakdown: {
                    basePrice: "R13,500",
                    taxes: "R1,800",
                    serviceFee: "R1,500"
                }
            }
        },
        {
            id: 8,
            title: "Vietnam Cultural Journey",
            image: "images/Vietnam.png",
            duration: "10 Days / 9 Nights",
            description: "Immerse yourself in the rich culture and history of Vietnam. From the bustling streets of Hanoi to the serene beauty of Ha Long Bay, experience the best of this fascinating country.",
            price: "R13,200",
            region: "asia",
            priceRange: "mid-range",
            durationType: "long",
            popularity: 80,
            details: {
                highlights: [
                    "Ha Long Bay cruise",
                    "Hanoi Old Quarter exploration",
                    "Hoi An ancient town",
                    "Mekong Delta experience",
                    "Cu Chi Tunnels visit"
                ],
                includes: [
                    "4-star hotel accommodation",
                    "Domestic flights",
                    "All tours and activities",
                    "Most meals",
                    "English-speaking guides"
                ],
                priceBreakdown: {
                    basePrice: "R10,500",
                    taxes: "R1,200",
                    serviceFee: "R1,500"
                }
            }
        },
        {
            id: 9,
            title: "Peruvian Highlights",
            image: "images/Peruvian.png",
            duration: "9 Days / 8 Nights",
            description: "Journey through the ancient wonders and natural beauty of Peru. From the mysterious Machu Picchu to the stunning Sacred Valley and vibrant Lima, this package offers the best of Peru.",
            price: "R17,500",
            region: "americas",
            priceRange: "mid-range",
            durationType: "long",
            popularity: 87,
            details: {
                highlights: [
                    "Machu Picchu guided tour",
                    "Sacred Valley exploration",
                    "Cusco city tour",
                    "Rainbow Mountain trek",
                    "Lima culinary experience"
                ],
                includes: [
                    "Hotel accommodation",
                    "Train to Machu Picchu",
                    "All entrance fees",
                    "Most meals",
                    "Professional guides"
                ],
                priceBreakdown: {
                    basePrice: "R14,000",
                    taxes: "R2,000",
                    serviceFee: "R1,500"
                }
            }
        },
        {
            id: 10,
            title: "Canadian Rockies Explorer",
            image: "images/Canadian.png",
            duration: "7 Days / 6 Nights",
            description: "Discover the breathtaking beauty of the Canadian Rockies with this premium package. From the turquoise lakes of Banff to the alpine meadows of Jasper, experience Canada's natural splendor.",
            price: "R19,999",
            region: "americas",
            priceRange: "luxury",
            durationType: "medium",
            popularity: 83,
            details: {
                highlights: [
                    "Banff National Park exploration",
                    "Lake Louise and Moraine Lake",
                    "Columbia Icefield adventure",
                    "Jasper National Park wildlife",
                    "Rocky Mountaineer scenic journey"
                ],
                includes: [
                    "Luxury lodge accommodation",
                    "Scenic train journey",
                    "All national park fees",
                    "Most meals",
                    "Professional guide"
                ],
                priceBreakdown: {
                    basePrice: "R16,000",
                    taxes: "R2,499",
                    serviceFee: "R1,500"
                }
            }
        }
    ];

    // DOM Elements
    const packagesGrid = document.getElementById('packagesGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const packageModal = document.getElementById('packageModal');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    // Filter elements
    const regionFilter = document.getElementById('regionFilter');
    const priceFilter = document.getElementById('priceFilter');
    const durationFilter = document.getElementById('durationFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    // State
    
    let displayedCount = 6;
    let filteredPackages = [...packagesData];

    // Initialize
    function init() {
        renderPackages();
        setupEventListeners();
        updateResultsCount();
    }

    function setupEventListeners() {
        // Filter event listeners
        regionFilter.addEventListener('change', applyFilters);
        priceFilter.addEventListener('change', applyFilters);
        durationFilter.addEventListener('change', applyFilters);
        sortFilter.addEventListener('change', applyFilters);
        
        // Load more button
        loadMoreBtn.addEventListener('click', loadMorePackages);
        
        // Modal close
        modalClose.addEventListener('click', closeModal);
        packageModal.addEventListener('click', function(e) {
            if (e.target === packageModal) {
                closeModal();
            }
        });
        
        // Escape key to close modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    function applyFilters() {
        const regionValue = regionFilter.value;
        const priceValue = priceFilter.value;
        const durationValue = durationFilter.value;
        const sortValue = sortFilter.value;
        
        // Filter packages
        filteredPackages = packagesData.filter(pkg => {
            let matches = true;
            
            if (regionValue && pkg.region !== regionValue) {
                matches = false;
            }
            
            if (priceValue && pkg.priceRange !== priceValue) {
                matches = false;
            }
            
            if (durationValue && pkg.durationType !== durationValue) {
                matches = false;
            }
            
            return matches;
        });

        // Sort packages
        if (sortValue) {
            switch(sortValue) {
                case 'price-low':
                    filteredPackages.sort((a, b) => parseFloat(a.price.replace('R', '').replace(',', '')) - parseFloat(b.price.replace('R', '').replace(',', '')));
                    break;
                case 'price-high':
                    filteredPackages.sort((a, b) => parseFloat(b.price.replace('R', '').replace(',', '')) - parseFloat(a.price.replace('R', '').replace(',', '')));
                    break;
                case 'duration':
                    filteredPackages.sort((a, b) => {
                        const aDays = parseInt(a.duration);
                        const bDays = parseInt(b.duration);
                        return aDays - bDays;
                    });
                    break;
                case 'popularity':
                    filteredPackages.sort((a, b) => b.popularity - a.popularity);
                    break;
            }
        }
        
        // Reset displayed count
        displayedCount = 6;
        
        // Update results count
        updateResultsCount();
        
        // Re-render packages
        renderPackages();
        
        // Show/hide load more button
        toggleLoadMoreButton();
    }

    function renderPackages() {
        const packagesToShow = filteredPackages.slice(0, displayedCount);
        
        if (packagesToShow.length === 0) {
            packagesGrid.innerHTML = `
                <div class="no-results">
                    <h3>No packages found</h3>
                    <p>Try adjusting your filters to see more results.</p>
                </div>
            `;
            return;
        }
        
        packagesGrid.innerHTML = packagesToShow.map(pkg => `
            <div class="package-card" data-package-id="${pkg.id}">
                <img src="${pkg.image}" alt="${pkg.title}" class="package-image">
                <div class="package-overlay">
                    <div class="duration-badge">${pkg.duration}</div>
                    <div class="globe-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clip-path="url(#clip0)">
                                <path d="M7 12.8332C10.2217 12.8332 12.8333 10.2215 12.8333 6.99984C12.8333 3.77818 10.2217 1.1665 7 1.1665C3.77834 1.1665 1.16667 3.77818 1.16667 6.99984C1.16667 10.2215 3.77834 12.8332 7 12.8332Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.00001 1.1665C5.50214 2.73926 4.66667 4.82794 4.66667 6.99984C4.66667 9.17174 5.50214 11.2604 7.00001 12.8332C8.49787 11.2604 9.33334 9.17174 9.33334 6.99984C9.33334 4.82794 8.49787 2.73926 7.00001 1.1665Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.16667 7H12.8333" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="package-content">
                    <h3 class="package-title">${pkg.title}</h3>
                    <p class="package-description">${pkg.description}</p>
                    <div class="package-footer">
                        <div class="package-price">
                            <span class="price-currency">${pkg.price}</span>
                            <span class="price-note">per person</span>
                        </div>
                        <button class="btn-view-details" onclick="openPackageModal(${pkg.id})">View Details</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add click event to package cards
        packagesGrid.querySelectorAll('.package-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.classList.contains('btn-view-details')) {
                    const packageId = this.getAttribute('data-package-id');
                    openPackageModal(parseInt(packageId));
                }
            });
        });
    }

    function loadMorePackages() {
        displayedCount += 3;
        renderPackages();
        toggleLoadMoreButton();
    }

    function toggleLoadMoreButton() {
        if (displayedCount >= filteredPackages.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    function updateResultsCount() {
        const resultsCount = document.querySelector('.results-count');
        resultsCount.textContent = `${filteredPackages.length} package${filteredPackages.length !== 1 ? 's' : ''} found`;
    }

    function openPackageModal(packageId) {
        const selectedPackage = packagesData.find(p => p.id === packageId);
        if (!selectedPackage) return;
        
        modalTitle.textContent = selectedPackage.title;
        modalBody.innerHTML = `
            <div class="modal-package-details">
                <div class="modal-image">
                    <img src="${selectedPackage.image}" alt="${selectedPackage.title}">
                </div>
                <div class="modal-info">
                    <div class="modal-duration">
                        <span class="duration-badge">${selectedPackage.duration}</span>
                    </div>
                    <p class="modal-description">${selectedPackage.description}</p>
                    
                    <div class="modal-highlights">
                        <h4>Package Highlights</h4>
                        <ul>
                            ${selectedPackage.details.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="modal-includes">
                        <h4>What's Included</h4>
                        <ul>
                            ${selectedPackage.details.includes.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="modal-pricing">
                        <h4>Price Breakdown</h4>
                        <div class="price-details">
                            <div class="price-row">
                                <span>Base Package:</span>
                                <span>${selectedPackage.details.priceBreakdown.basePrice}</span>
                            </div>
                            <div class="price-row">
                                <span>Taxes & Fees:</span>
                                <span>${selectedPackage.details.priceBreakdown.taxes}</span>
                            </div>
                            <div class="price-row">
                                <span>Service Fee:</span>
                                <span>${selectedPackage.details.priceBreakdown.serviceFee}</span>
                            </div>
                            <div class="price-row total">
                                <span>Total:</span>
                                <span>${selectedPackage.price}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-actions">
                        <button class="btn-book-now" onclick="bookPackage(${selectedPackage.id})">Book Now</button>
                        <button class="btn-contact" onclick="contactAboutPackage(${selectedPackage.id})">Contact for Customization</button>
                    </div>
                </div>
            </div>
        `;
        
        packageModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        packageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Global functions for modal actions
    window.openPackageModal = openPackageModal;
    window.closeModal = closeModal;

    window.bookPackage = function(packageId) {
        const pkg = packagesData.find(p => p.id === packageId);
        alert(`Booking ${pkg.title} - This would redirect to booking page in a real implementation.`);
        closeModal();
    };

    window.contactAboutPackage = function(packageId) {
        const pkg = packagesData.find(p => p.id === packageId);
        window.location.href = `ContactUs.html?package=${packageId}&title=${encodeURIComponent(pkg.title)}`;
    };

    // Initialize the page
    init();
});