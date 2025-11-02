import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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

<section>
        <Tabs
      defaultActiveKey="visa-type"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="visa-type" title="Visa Application Info">
        <div className="visa-info-content">
                <h2 className="section-main-title">Our Visa Services</h2>
                <p className="section-main-subtitle">Exclusive Travels offers comprehensive visa application services to ensure a hassle-free travel experience. Our experienced team will guide you through the entire process, from documentation to submission.</p>

                <div className="info-notice">
                    <div className="notice-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0)">
                                <path d="M10 18.3337C14.6024 18.3337 18.3334 14.6027 18.3334 10.0003C18.3334 5.39795 14.6024 1.66699 10 1.66699C5.39765 1.66699 1.66669 5.39795 1.66669 10.0003C1.66669 14.6027 5.39765 18.3337 10 18.3337Z" stroke="#3B82F6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 6.66699V10.0003" stroke="#3B82F6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </div>
                    <p className="notice-text">Please note that visa approval is at the discretion of the respective embassy or consulate. We assist with the application process but cannot guarantee approval.</p>
                </div>

                <div className="visa-types-section">
                    <h3 className="section-title">Visa Types</h3>
                    <div className="visa-types-grid">
                    
                        <div className="visa-type-card selected" data-type="tourist">
                            <h4 className="visa-type-title">Tourist Visa</h4>
                            <p className="visa-type-description">For leisure travel, tourism, and visiting friends or family abroad.</p>
                            <div className="visa-details">
                                <div className="processing-time">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip1)">
                                            <path d="M8 14.6663C11.6819 14.6663 14.6667 11.6816 14.6667 7.99967C14.6667 4.31778 11.6819 1.33301 8 1.33301C4.3181 1.33301 1.33333 4.31778 1.33333 7.99967C1.33333 11.6816 4.3181 14.6663 8 14.6663Z" stroke="#4B5563" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8 4V8L10.6667 9.33333" stroke="#4B5563" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                    </svg>
                                    <span>5-7 working days</span>
                                </div>
                                <div className="visa-price">R750</div>
                            </div>
                        </div>

                   
                        <div className="visa-type-card" data-type="business">
                            <h4 className="visa-type-title">Business Visa</h4>
                            <p className="visa-type-description">For business meetings, conferences, and short-term work assignments.</p>
                            <div className="visa-details">
                                <div className="processing-time">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip2)">
                                            <path d="M8 14.6663C11.6819 14.6663 14.6667 11.6816 14.6667 7.99967C14.6667 4.31778 11.6819 1.33301 8 1.33301C4.3181 1.33301 1.33333 4.31778 1.33333 7.99967C1.33333 11.6816 4.3181 14.6663 8 14.6663Z" stroke="#4B5563" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8 4V8L10.6667 9.33333" stroke="#4B5563" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                    </svg>
                                    <span>7-10 working days</span>
                                </div>
                                <div className="visa-price">R1,200</div>
                            </div>
                        </div>

                        <div className="visa-type-card" data-type="study">
                            <h4 className="visa-type-title">Study Visa</h4>
                            <p className="visa-type-description">For students planning to study at educational institutions abroad.</p>
                            <div className="visa-details">
                                <div className="processing-time">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip3)">
                                            <path d="M8 14.6663C11.6819 14.6663 14.6667 11.6816 14.6667 7.99967C14.6667 4.31778 11.6819 1.33301 8 1.33301C4.3181 1.33301 1.33333 4.31778 1.33333 7.99967C1.33333 11.6816 4.3181 14.6663 8 14.6663Z" stroke="#4B5563" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8 4V8L10.6667 9.33333" stroke="#4B5563" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                    </svg>
                                    <span>10-15 working days</span>
                                </div>
                                <div className="visa-price">R1,500</div>
                            </div>
                        </div>

                        <div className="visa-type-card" data-type="work">
                            <h4 className="visa-type-title">Work Visa</h4>
                            <p className="visa-type-description">For those with job offers or employment contracts in foreign countries.</p>
                            <div className="visa-details">
                                <div className="processing-time">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip4)">
                                            <path d="M8 14.6663C11.6819 14.6663 14.6667 11.6816 14.6667 7.99967C14.6667 4.31778 11.6819 1.33301 8 1.33301C4.3181 1.33301 1.33333 4.31778 1.33333 7.99967C1.33333 11.6816 4.3181 14.6663 8 14.6663Z" stroke="#4B5563" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8 4V8L10.6667 9.33333" stroke="#4B5563" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                    </svg>
                                    <span>15-20 working days</span>
                                </div>
                                <div className="visa-price">R2,000</div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="selected-visa-details">
                    <div className="details-header">
                        <h3 className="details-title">Selected Visa:</h3>
                        <p className="visa-description">For leisure travel, tourism, and visiting friends or family abroad.</p>
                    </div>
                    
                    <div className="details-content">
                        <div className="required-documents">
                            <h4 className="documents-title">Required Documents</h4>
                            <ul className="documents-list">
                                <li>Valid passport (with at least 6 months validity)</li>
                                <li>Recent passport-sized photographs</li>
                                <li>Completed visa application form</li>
                                <li>Proof of travel arrangements (flight itinerary)</li>
                                <li>Proof of accommodation</li>
                            </ul>
                        </div>
                        
                        <div className="service-details">
                            <h4 className="service-title">Service Details</h4>
                            <div className="service-info">
                                <div className="info-row">
                                    <span className="info-label">Processing Time:</span>
                                    <span className="info-value">5-7 working days</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Service Fee:</span>
                                    <span className="info-value">R750</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Embassy Fee:</span>
                                    <span className="info-value">Varies by destination</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Express Processing:</span>
                                    <span className="info-value">Available at extra cost</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="btn-apply" onclick="window.location.href='visa-application.html'">Apply for Tourist Visa</button>
                </div>

                <div className="faq-section">
                    <h3 className="section-title">Frequently Asked Questions</h3>
                    
                    <div className="faq-item">
                        <h4 className="faq-question">How long does the visa application process take?</h4>
                        <p className="faq-answer">Processing times vary depending on the destination country and visa type. Generally, it takes between 5 to 20 working days, but may take longer in some cases.</p>
                    </div>
                    
                    <div className="faq-item">
                        <h4 className="faq-question">What happens if my visa is rejected?</h4>
                        <p className="faq-answer">If your visa is rejected, we'll guide you on the reason for rejection and assist with the reapplication process if possible. Please note that embassy fees are typically non-refundable in case of rejection.</p>
                    </div>
                    
                    <div className="faq-item">
                        <h4 className="faq-question">Do I need to visit your office in person?</h4>
                        <p className="faq-answer">In most cases, you can complete the entire process online. However, some visa applications require biometric data, which may necessitate a visit to our office or the respective embassy/visa center.</p>
                    </div>
                    
                    <div className="faq-item">
                        <h4 className="faq-question">Can you expedite my visa application?</h4>
                        <p className="faq-answer">Yes, we offer expedited processing services for urgent travel needs at an additional cost, subject to embassy availability.</p>
                    </div>
                    
                    <div className="faq-action">
                        <button className="btn-start-application" onclick="window.location.href='visa-application.html'">Start Your Visa Application</button>
                    </div>
                </div>
            </div>


      </Tab>
      <Tab eventKey="visa-form" title="Visa Application Form">

      <div className="visa-info-content">   
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

                <div className="form-actions py-4">
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
        
                
           
      </Tab>
    </Tabs>

</section>
          
         
            
<section class="assistance-section">
        <div class="container">
            <div class="assistance-content">
                <h2 class="assistance-title">Need Assistance?</h2>
                <p class="assistance-text">Our visa specialists are available to assist you with any questions regarding visa requirements, documentation, or application process.</p>
                <div class="assistance-buttons">
                    <button class="btn-chat" id="liveChatBtn">Live Chat</button>
                    <button class="btn-specialist" onclick="window.location.href='ContactUs.html?specialist=visa'">Contact Visa Specialist</button>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}
export default VisaApplication
    

