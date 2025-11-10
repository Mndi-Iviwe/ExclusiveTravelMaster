
function Booking() {

  return (
    <div className="main-content">
        <div className="success-container">
            <div className="success-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.329 30.0101C70.8513 37.4811 69.7664 45.2481 66.2552 52.016C62.744 58.7839 57.0187 64.1436 50.0341 67.2011C43.0495 70.2587 35.2278 70.8293 27.8734 68.818C20.5189 66.8066 14.0763 62.3347 9.61994 56.1481C5.16356 49.9615 2.96276 42.4342 3.38457 34.8213C3.80638 27.2085 6.82529 19.9704 11.9379 14.314C17.0504 8.65756 23.9476 4.92483 31.4792 3.73823C39.0109 2.55164 46.7216 3.98292 53.3257 7.79339" stroke="#22C55E" stroke-width="6.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.3335 40L36.6668 53.3333L76.6668 13.3333" stroke="#22C55E" stroke-width="6.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            
            <h1>Payment Successful!</h1>
            <p className="subtitle">Thank you for booking with Exclusive Travels. Your journey awaits!</p>
            
            <div className="booking-card">
                <h2>Booking Details</h2>
                <div className="booking-reference">
                    <span>Booking Reference:</span>
                    <span className="reference-number">ET435132</span>
                </div>
                
                <div className="booking-info">
                    <p>We've sent a confirmation email with all the details of your booking. Please check your inbox (and spam folder, just in case).</p>
                    <p>Our travel consultant will contact you within 24-48 hours to confirm your booking and assist with any additional requirements.</p>
                </div>
            </div>
            
            <div className="assistance-text">
                <p>Need assistance or have questions about your booking?</p>
            </div>
            
            <div className="cta-buttons">
                <button className="btn-primary text-nowrap">Contact Us</button>
                <button className="btn-primary text-nowrap">Explore More Packages</button>
            </div>
        </div>
    </div>

  )
}
export default Booking;

    

   

