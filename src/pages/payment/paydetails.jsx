function payDetail() {

    return (
        <>
        <div className="check-main-content ">
        <div className="checkout-container">
            <div className="checkout-section me-3">
                <h1>Checkout</h1>
                <p className="subtitle">Complete your booking for Mauritius Beach Escape</p>
                
                <div className="progress-bar">
                    <div className="progress-step active">
                        <div className="step-number">1</div>
                        <span>Traveler Details</span>
                    </div>
                    <div className="progress-step">
                        <div className="step-number">2</div>
                        <span>Payment</span>
                    </div>
                </div>
                
                <form id="traveler-form" className="traveler-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label for="first-name">First Name *</label>
                            <input type="text" id="first-name" placeholder="Enter your first name" required />
                        </div>
                        
                        <div className="form-group">
                            <label for="last-name">Last Name *</label>
                            <input type="text" id="last-name" placeholder="Enter your last name" required />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" placeholder="Enter your email address" required />
                        </div>
                        
                        <div className="form-group">
                            <label for="phone">Phone Number *</label>
                            <input type="tel" id="phone" placeholder="Enter your phone number" required />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label for="address">Address</label>
                        <input type="text" id="address" placeholder="Enter your street address" />
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" placeholder="Enter your city" />
                        </div>
                        
                        <div className="form-group">
                            <label for="postal-code">Postal Code</label>
                            <input type="text" id="postal-code" placeholder="Enter your postal code" />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label for="country">Country</label>
                        <select id="country">
                            <option value="">Select your country</option>
                            <option value="ZA">South Africa</option>
                            <option value="US">United States</option>
                            <option value="GB">United Kingdom</option>
                            <option value="AU">Australia</option>
                            <option value="CA">Canada</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="IT">Italy</option>
                            <option value="ES">Spain</option>
                            <option value="PT">Portugal</option>
                            <option value="NL">Netherlands</option>
                            <option value="BE">Belgium</option>
                            <option value="CH">Switzerland</option>
                            <option value="AT">Austria</option>
                            <option value="SE">Sweden</option>
                            <option value="NO">Norway</option>
                            <option value="DK">Denmark</option>
                            <option value="FI">Finland</option>
                            <option value="IE">Ireland</option>
                            <option value="NZ">New Zealand</option>
                            <option value="SG">Singapore</option>
                            <option value="MY">Malaysia</option>
                            <option value="TH">Thailand</option>
                            <option value="JP">Japan</option>
                            <option value="KR">South Korea</option>
                            <option value="CN">China</option>
                            <option value="IN">India</option>
                            <option value="BR">Brazil</option>
                            <option value="MX">Mexico</option>
                            <option value="AR">Argentina</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label for="special-requests">Special Requests</label>
                        <textarea id="special-requests" placeholder="Any special requests or requirements for your trip"></textarea>
                    </div>
                    
                    <div className="form-buttons">
                        <button type="submit" className="submit-btn">Continue to Payment</button>
                    </div>
                </form>
            </div>
            
            <div className="order-summary contact-info-card p-3">
                <h2>Order Summary</h2>
                <div className="order-item">
                    <img src="/images/Maldives.png" alt="Mauritius Beach Escape" />
                    <div className="order-details">
                        <h3>Mauritius Beach Escape</h3>
                        <p>8 Days / 7 Nights</p>
                        <p>Travelers: 1</p>
                        <p>Date: 11/13/2025</p>
                    </div>
                </div>
                
                <div className="price-breakdown">
                    <div className="price-row">
                        <span>Base Price (1 travelers)</span>
                        <span>R 16,999 × 1</span>
                    </div>
                    <div className="price-row">
                        <span>Taxes & Fees</span>
                        <span>Included</span>
                    </div>
                    <div className="total-row">
                        <span>Total</span>
                        <span>R 16,999</span>
                    </div>
                </div>
                
                <div className="insurance-section">
                    <h3>Travel Insurance</h3>
                    <p>We recommend adding travel insurance to protect your trip against unforeseen circumstances.</p>
                    <button className="insurance-btn">Add Insurance (+R399)</button>
                </div>
                
                <div className="summary-footer">
                    <p>By proceeding with this booking, you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
                    <p>Need assistance? Contact our customer support at 079 479 4133 or <a href="mailto:support@exclusivetravels.co.za">support@exclusivetravels.co.za</a></p>
                </div>
            </div>
        </div>
        </div>

        </>

    )
}

export default payDetail;

