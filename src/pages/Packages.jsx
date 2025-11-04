import {CustomLink} from '../components/Header';

function Packages() {

const packagesData = [
        {
            id: 1,
            title: "Dubai Luxury Getaway",
            image: "/images/Dubai.png",
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



    return (
        <>
            <section className="destinations-hero">

            <div className="bg-background2">
                <img src="images/Second BG.png" alt="Travel Background" className="bg-image" />
            </div>

            <div className="container">
                <div className="destinations-hero-content">
                    <h1 className="destinations-title">Explore Our Travel Packages</h1>
                    <p className="destinations-subtitle">Discover our carefully curated selection of luxury travel experiences around the world.</p>
                </div>
            </div>
        </section>

        <section className="filters-section">
            <div className="container">
                <div className="filters-container">
                    <div className="filter-group">
                        <label className="filter-label">Region</label>
                        <div className="filter-select">
                            <select id="regionFilter">
                                <option value="">Choose option...</option>
                                <option value="middle-east">Middle East</option>
                                <option value="africa">Africa</option>
                                <option value="asia">Asia</option>
                                <option value="europe">Europe</option>
                                <option value="americas">Americas</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="filter-group">
                        <label className="filter-label">Price Range</label>
                        <div className="filter-select">
                            <select id="priceFilter">
                                <option value="">Choose option...</option>
                                <option value="budget">Budget (Under R10,000)</option>
                                <option value="mid-range">Mid-Range (R10,000 - R25,000)</option>
                                <option value="luxury">Luxury (R25,000+)</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="filter-group">
                        <label className="filter-label">Duration</label>
                        <div className="filter-select">
                            <select id="durationFilter">
                                <option value="">Choose option...</option>
                                <option value="short">Short (3-5 days)</option>
                                <option value="medium">Medium (6-8 days)</option>
                                <option value="long">Long (9+ days)</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="filter-group">
                        <label className="filter-label">Sort By</label>
                        <div className="filter-select">
                            <select id="sortFilter">
                                <option value="">Choose option...</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="duration">Duration</option>
                                <option value="popularity">Popularity</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
        <section className="packages-section">
            <div className="container">
                <div className="packages-header">
                    <span className="results-count">10 packages found</span>
                </div>
                
                <div className="packages-grid" id="packagesGrid">

                    {packagesData.map(pkg => (

                <div className="package-card" key={pkg.id}>

                <img src={pkg.image} alt={pkg.title} className="package-image" />
                <div className="package-overlay">
                    <div className="duration-badge">{pkg.duration}</div>
                    <div className="globe-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clip-path="url(#clip0)">
                                <path d="M7 12.8332C10.2217 12.8332 12.8333 10.2215 12.8333 6.99984C12.8333 3.77818 10.2217 1.1665 7 1.1665C3.77834 1.1665 1.16667 3.77818 1.16667 6.99984C1.16667 10.2215 3.77834 12.8332 7 12.8332Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.00001 1.1665C5.50214 2.73926 4.66667 4.82794 4.66667 6.99984C4.66667 9.17174 5.50214 11.2604 7.00001 12.8332C8.49787 11.2604 9.33334 9.17174 9.33334 6.99984C9.33334 4.82794 8.49787 2.73926 7.00001 1.1665Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.16667 7H12.8333" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="package-content">
                    <h3 className="package-title">{pkg.title}</h3>
                    <p className="package-description">{pkg.description}</p>
                    <div className="package-footer">
                        <div className="package-price">
                            <span className="price-currency">{pkg.price}</span>
                            <span className="price-note">per person</span>
                        </div>
                        <button className="btn-view-details" >View Details</button>
                    </div>
                </div>

            </div>


                
                ))}


                

            </div>    

            </div>
        </section>

        <section className="custom-packages-section">
            <div className="container">
                <div className="custom-packages-content">
                    <h2 className="custom-title">Didn't Find What You're Looking For?</h2>
                    <p className="custom-text">Contact our travel specialists for a customized travel package tailored to your specific needs and preferences.</p>
                    <button className="btn-custom-packages list-unstyled p-2" > <CustomLink to='/ContactUs'>Contact Us for Custom Packages</CustomLink></button>
                </div>
            </div>
        </section>

    
        </>
    )
}
export default Packages

    

