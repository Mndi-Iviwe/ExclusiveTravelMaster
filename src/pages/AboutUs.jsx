import '../javascript/about.js'

function AboutUs() {
  return (
    <>

    <section className="about-hero">
        <div className="container">
            <div className="hero-content">
                <h1 className="hero-title">About Exclusive Travels</h1>
                <p className="hero-subtitle">Welcome to the home of Leisure and Travel. We are experts in Travel Management Services and Organized Tours.</p>
            </div>
        </div>
    </section>

    <section className="our-story">
        <div className="container">
            <div className="story-content">
                <div className="story-text">
                    <h2 className="section-title">Our Story</h2>
                    <div className="story-paragraphs">
                        <p>Exclusive Travels is a Level 01 BBBEE company registered with the Department of Trade and Industry in the Republic of South Africa. The company conforms to all the Trade and tax Laws of South Africa and its trade partners. Exclusive Travels is One Hundred Percent owned and managed by a young black woman from a previously disadvantaged background.</p>
                        
                        <p>The core strength of this company comes from the Manager's vast knowledge of the Travel and Tourism Industry. After working for a period of 05 years for a Travel Agency in Cape town, Miss Mpho Mphadzha took a brave decision to move back to Gauteng and apply the skills and knowledge she had gathered from working as a Manager for all those years. In 2021 Exclusive Travels was born. The company holds a strong client base and 03 permanent staff members.</p>
                    </div>
                    <button className="btn-contact" >Contact Us</button>
                </div>
                <div className="story-image">
                    <img src="images/Mpho-M.jpg" alt="Mpho Mphadzha - Founder of Exclusive Travels" className="founder-image" />
                </div>
            </div>
        </div>
    </section>

    <section className="our-values">
        <div className="container">
            <h2 className="values-title">Our Values</h2>
            <div className="values-grid">
                <div className="value-card">
                    <h3 className="value-title">Excellence</h3>
                    <p className="value-description">We strive for excellence in every aspect of our service, ensuring that our clients receive the best possible travel experiences.</p>
                </div>
                <div className="value-card">
                    <h3 className="value-title">Integrity</h3>
                    <p className="value-description">We conduct our business with the highest level of integrity and transparency, building trust with our clients and partners.</p>
                </div>
                <div className="value-card">
                    <h3 className="value-title">Customer Focus</h3>
                    <p className="value-description">Our clients are at the heart of everything we do. We tailor our services to meet their unique needs and expectations.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <div className="cta-content">
                <h2 className="cta-title">Ready to Experience Our Service?</h2>
                <p className="cta-subtitle">Let us help you plan your next adventure with our expert travel management services.</p>
                <div className="cta-buttons">
                    <button className="btn-primary" >Explore Our Packages</button>
                    <button className="btn-secondary">Get in Touch</button>
                </div>
            </div>
        </div>
    </section>

    </>
  ) 
}
export default AboutUs

    

