import '../javascript/destinations.js'

function Packages() {

    return (
        <>
            <section className="destinations-hero">
            <div className="hero-background">
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
                    {/*-- Packages will be dynamically loaded here --*/}
                </div>
                
               
                <div className="load-more-container">
                    <button className="btn-load-more" id="loadMoreBtn">Load More Packages</button>
                </div>
            </div>
        </section>

        <section className="custom-packages-section">
            <div className="container">
                <div className="custom-packages-content">
                    <h2 className="custom-title">Didn't Find What You're Looking For?</h2>
                    <p className="custom-text">Contact our travel specialists for a customized travel package tailored to your specific needs and preferences.</p>
                    <button className="btn-custom-packages" onclick="window.location.href='ContactUs.html?type=custom'">Contact Us for Custom Packages</button>
                </div>
            </div>
        </section>

    
        </>
    )
}
export default Packages

    

