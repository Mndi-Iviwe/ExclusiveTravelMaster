

function ContactUs() {

    return (
        <>
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content">
                        <h1 className="contact-title">Contact Us</h1>
                        <p className="contact-subtitle">We work from Monday till Friday from 8:00 a.m. to 5:30 p.m.</p>
                    </div>
                </div>
            </section>

        
            <section className="contact-section">
                <div className="container">
                    <div className="contact-content">
                        
                        <div className="contact-form-container">
                            <div className="contact-form-card">
                                <h2 className="form-title">Get in Touch</h2>
                                <p className="form-subtitle">Fill out the form and we'll get back to you as soon as possible.</p>
                                
                                <form className="contact-form" id="contactForm">
                                    <div className="form-group">
                                        <label for="name" className="form-label">Your name</label>
                                        <input type="text" id="name" className="form-input" placeholder="John Doe" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="email" className="form-label">Your email</label>
                                        <input type="email" id="email" className="form-input" placeholder="john@example.com" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="subject" className="form-label">Subject</label>
                                        <input type="text" id="subject" className="form-input" placeholder="How can we help you?" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="message" className="form-label">Your message (optional)</label>
                                        <textarea id="message" className="form-textarea" placeholder="Please provide as much detail as possible." rows="5"></textarea>
                                    </div>
                                    
                                    <button type="submit" className="btn-send-message">Send Message</button>
                                </form>
                            </div>
                        </div>

                        <div className="contact-info-container">
                            <div className="contact-info-card">
                                <h2 className="info-title">Exclusive Travels</h2>
                                <p className="info-subtitle">We are glad you visited the site, for all enquiries kindly complete the form on your left and you'll be attended ASAP.</p>
                                
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#0B2A5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#0B2A5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="contact-text">
                                            <h3 className="contact-type">Our address</h3>
                                            <p className="contact-value">55 Frans Street</p>
                                        </div>
                                    </div>
                                    
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.271 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36163C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05834 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99523 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88793 9.9736 7.27692 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1859 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z" stroke="#0B2A5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="contact-text">
                                            <h3 className="contact-type">Phone</h3>
                                            <p className="contact-value">079 479 4133</p>
                                        </div>
                                    </div>
                                    
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#0B2A5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="#0B2A5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="contact-text">
                                            <h3 className="contact-type">Email</h3>
                                            <p className="contact-value">info@exclusivetravels.co.za</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="business-hours">
                                    <h3 className="hours-title">Business Hours</h3>
                                    <p className="hours-detail">Monday - Friday: 8:00 AM - 5:30 PM</p>
                                    <p className="hours-detail">Saturday - Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default ContactUs

    

