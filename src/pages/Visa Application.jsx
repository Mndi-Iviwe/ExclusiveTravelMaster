import '../javascript/visa.js'


function VisaApplication() {


    return (
        <>
    <section className="visa-hero">
        <div className="container">
            <div className="visa-hero-content">
                <h1 className="visa-title">Visa Application Services</h1>
                <p className="visa-subtitle">Let us handle the complexities of visa applications for a smooth travel experience.</p>
            </div>
        </div>
    </section>

    <section className="visa-section">
        <div className="container">
          
            <div className="progress-steps">
                <div className="step active">
                    <div className="step-number">1</div>
                    <span className="step-text">Visa Information</span>
                </div>
                <div className="step">
                    <div className="step-number">2</div>
                    <span className="step-text">Application Form</span>
                </div>
            </div>

          
            <div className="application-form">
                <h2 className="form-main-title">Tourist Visa Application</h2>
                <p className="form-main-subtitle">Please complete the form below and upload the required documents.</p>

               
                <div className="form-section">
                    <h3 className="section-title">Personal Information</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label for="firstName" className="form-label">First Name *</label>
                            <input type="text" id="firstName" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label for="lastName" className="form-label">Last Name *</label>
                            <input type="text" id="lastName" className="form-input" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label for="email" className="form-label">Email *</label>
                            <input type="email" id="email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label for="phone" className="form-label">Phone Number *</label>
                            <input type="tel" id="phone" className="form-input" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label for="nationality" className="form-label">Nationality *</label>
                            <input type="text" id="nationality" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label for="passportNumber" className="form-label">Passport Number *</label>
                            <input type="text" id="passportNumber" className="form-input" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label for="passportExpiry" className="form-label">Passport Expiry Date *</label>
                            <input type="date" id="passportExpiry" className="form-input" required />
                        </div>
                        <div className="form-group"></div> 
                    </div>
                </div>

              
                <div className="form-section">
                    <h3 className="section-title">Travel Information</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label for="destination" className="form-label">Destination Country *</label>
                            <input type="text" id="destination" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label for="purpose" className="form-label">Purpose of Travel *</label>
                            <select id="purpose" className="form-select" required>
                                <option value="">Select purpose</option>
                                <option value="tourism">Tourism</option>
                                <option value="business">Business</option>
                                <option value="family">Family Visit</option>
                                <option value="education">Education</option>
                                <option value="medical">Medical</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label for="travelDate" className="form-label">Travel Date *</label>
                            <input type="date" id="travelDate" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label for="returnDate" className="form-label">Return Date *</label>
                            <input type="date" id="returnDate" className="form-input" required />
                        </div>
                    </div>
                    <div className="form-group full-width">
                        <label for="additionalInfo" className="form-label">Additional Information</label>
                        <textarea id="additionalInfo" className="form-textarea" rows="4"></textarea>
                    </div>
                </div>

                
                <div className="form-section">
                    <h3 className="section-title">Document Upload</h3>
                    <p className="section-subtitle">Please upload clear, high-resolution scans or photos of the required documents.</p>
                    
                    <div className="upload-grid">
                        <div className="upload-group">
                            <label for="passportCopy" className="upload-label">Passport Copy (Main Page) *</label>
                            <p className="upload-hint">PDF or image file (max 5MB)</p>
                            <input type="file" id="passportCopy" className="file-input" accept=".pdf,.jpg,.jpeg,.png" required />
                        </div>
                        <div className="upload-group">
                            <label for="passportPhoto" className="upload-label">Passport-sized Photo *</label>
                            <p className="upload-hint">JPEG or PNG (max 2MB)</p>
                            <input type="file" id="passportPhoto" className="file-input" accept=".jpg,.jpeg,.png" required />
                        </div>
                        <div className="upload-group">
                            <label for="flightItinerary" className="upload-label">Flight Itinerary</label>
                            <p className="upload-hint">PDF or image file (max 5MB)</p>
                            <input type="file" id="flightItinerary" className="file-input" accept=".pdf,.jpg,.jpeg,.png" />
                        </div>
                        <div className="upload-group">
                            <label for="accommodation" className="upload-label">Accommodation Proof</label>
                            <p className="upload-hint">PDF or image file (max 5MB)</p>
                            <input type="file" id="accommodation" className="file-input" accept=".pdf,.jpg,.jpeg,.png" />
                        </div>
                    </div>
                </div>

            
                <div className="form-actions">
                    <div className="terms-agreement">
                        <input type="checkbox" id="terms" className="terms-checkbox" required />
                        <label for="terms" className="terms-label">
                            I confirm that all information provided is accurate and complete. I understand that providing false information may result in the rejection of my visa application.
                        </label>
                    </div>
                    <div className="action-buttons">
                        <button type="button" className="btn-back" onclick="window.history.back()">Back to Information</button>
                        <button type="submit" className="btn-submit" id="submitApplication">Submit Application</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="assistance-section">
        <div className="container">
            <div className="assistance-content">
                <h2 className="assistance-title">Need Assistance?</h2>
                <p className="assistance-text">Our visa specialists are available to assist you with any questions regarding visa requirements, documentation, or application process.</p>
                <div className="assistance-buttons">
                    <button className="btn-chat">Live Chat</button>
                    <button className="btn-specialist">Contact Visa Specialist</button>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}
export default VisaApplication
    

