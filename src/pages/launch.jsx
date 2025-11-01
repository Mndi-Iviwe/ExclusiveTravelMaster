import React from 'react';

function launch() {




    return (
        <>
            <section className="hero">
        <div className="hero-background">
            <img src="images/First BG.png" alt="Beautiful travel destination" className="hero-image" />
            <div className="hero-overlay">
                <div className="container">
                    <h1 className="hero-title">Discover the World with</h1>
                    <p className="hero-subtitle">Experience luxury travel packages, personalized service, and unforgettable adventures.</p>
                    
       
                    <div className="search-container">
                        <div className="search-form">
                            <div className="search-field">
                                <label for="destination">Destination</label>
                                <div className="input-container">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5795 4.16475C10.7877 4.26879 11.0173 4.32295 11.25 4.32295C11.4827 4.32295 11.7123 4.26879 11.9205 4.16475L14.6648 2.79225C14.7792 2.73507 14.9063 2.70811 15.0341 2.71393C15.1619 2.71975 15.2861 2.75815 15.3948 2.8255C15.5036 2.89284 15.5933 2.98689 15.6555 3.09869C15.7177 3.21049 15.7502 3.33633 15.75 3.46425V13.0373C15.7499 13.1765 15.7111 13.313 15.6378 13.4314C15.5646 13.5498 15.4598 13.6455 15.3353 13.7078L11.9205 15.4155C11.7123 15.5195 11.4827 15.5737 11.25 15.5737C11.0173 15.5737 10.7877 15.5195 10.5795 15.4155L7.4205 13.836C7.2123 13.732 6.98275 13.6778 6.75 13.6778C6.51726 13.6778 6.2877 13.732 6.0795 13.836L3.33525 15.2085C3.22077 15.2657 3.09354 15.2927 2.96569 15.2868C2.83784 15.281 2.71362 15.2425 2.60484 15.1751C2.49606 15.1076 2.40635 15.0135 2.34424 14.9016C2.28213 14.7897 2.24969 14.6637 2.25 14.5358V4.9635C2.25008 4.82425 2.28891 4.68778 2.36217 4.56936C2.43542 4.45093 2.54019 4.35524 2.66475 4.293L6.0795 2.58525C6.2877 2.48121 6.51726 2.42705 6.75 2.42705C6.98275 2.42705 7.2123 2.48121 7.4205 2.58525L10.5795 4.16475Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.25 4.323V15.573" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.75 2.427V13.677" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <input type="text" id="destination" placeholder="Where do you want to go?" />
                                </div>
                            </div>
                            
                            <div className="search-field">
                                <label for="travel-date">Travel Date</label>
                                <div className="input-container">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 1.5V4.5" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 1.5V4.5" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.25 7.5H15.75" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <input type="text" id="travel-date" placeholder="Select date" />
                                </div>
                            </div>
                            
                            <div className="search-field">
                                <label for="duration">Duration</label>
                                <div className="input-container">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_33_1733)">
                                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 4.5V9L12 10.5" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_33_1733">
                                        <rect width="18" height="18" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <select id="duration">
                                        <option value="">Choose option...</option>
                                        <option value="3-5">3-5 Days</option>
                                        <option value="5-7">5-7 Days</option>
                                        <option value="7-10">7-10 Days</option>
                                        <option value="10+">10+ Days</option>
                                    </select>
                                    <svg className="dropdown-arrow" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1H1L5 9L9 1Z" stroke="black"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <button className="search-button">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#F8FAFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.75 15.75L12.525 12.525" stroke="#F8FAFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="packages-section">
        <div className="container">
            <h2 className="section-title">Featured Travel Packages</h2>
            <p className="section-subtitle">Explore our handpicked selection of luxury travel experiences at exceptional destinations around the world.</p>
            
            <div className="packages-grid" id="packages-grid">
                {/* Packages will be dynamically loaded here*/}
            </div>
            
            <div className="view-all-container">
                <button className="btn-view-all">View All Packages</button>
            </div>
        </div>
    </section>

    <section className="why-choose-section">
        <div className="container">
            <h2 className="section-title">Why Choose Exclusive Travels</h2>
            <p className="section-subtitle">We pride ourselves on delivering exceptional service and unforgettable travel experiences.</p>
            
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">
                        <div className="icon-bg">
                            <img src="images/Profile.png" alt="Personalized Service" />
                        </div>
                    </div>
                    <h3>Personalized Service</h3>
                    <p>Tailored travel experiences designed to meet your unique preferences and needs.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        <div className="icon-bg">
                            <img src="images/Star.png" alt="Luxury Accommodations" />
                        </div>
                    </div>
                    <h3>Luxury Accommodations</h3>
                    <p>Partner with the finest hotels and resorts to ensure your comfort and satisfaction.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        <div className="icon-bg">
                            <img src="images/Ask.png" alt="Expert Guidance" />
                        </div>
                    </div>
                    <h3>Expert Guidance</h3>
                    <p>Our experienced travel consultants provide knowledgeable advice and insider tips.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        <div className="icon-bg">
                            <img src="images/Phone.png" alt="24/7 Support" />
                        </div>
                    </div>
                    <h3>24/7 Support</h3>
                    <p>Round-the-clock assistance to ensure your journey is smooth and worry-free.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2 className="cta-title">Ready to Begin Your Journey?</h2>
            <p className="cta-subtitle">Let us help you plan your perfect getaway with exclusive packages and personalized service.</p>
            
            <div className="cta-buttons">
                <button className="btn-primary">Explore Packages</button>
                <button className="btn-secondary">Contact Us</button>
            </div>
        </div>
    </section>

        </>

        )
}
export default launch

    

