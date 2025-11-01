

function SignUp() {

    return (
        <>
            <div className="container">
            <div className="register-section">
                <h1 className="register-title">Create Your Account</h1>
                <p className="register-subtitle">Join Exclusive Travels for personalized travel experiences</p>
                
                <div className="register-card">
                    <form className="register-form" id="registerForm">
                        <div className="form-row">
                            <div className="form-group">
                                <label for="firstName" className="form-label">First Name</label>
                                <input type="text" id="firstName" className="form-input" placeholder="Enter your first name" required />
                            </div>
                            <div className="form-group">
                                <label for="lastName" className="form-label">Last Name</label>
                                <input type="text" id="lastName" className="form-input" placeholder="Enter your last name" required />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label for="email" className="form-label">Email Address</label>
                            <input type="email" id="email" className="form-input" placeholder="you@example.com" required />
                        </div>
                        
                        <div className="form-group">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" id="password" className="form-input" placeholder="••••••••" required />
                            <div className="password-hint">Password must be at least 8 characters long.</div>
                        </div>
                        
                        <div className="form-group">
                            <label for="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" id="confirmPassword" className="form-input" placeholder="••••••••" required />
                        </div>
                        
                        <div className="terms-agreement">
                            <input type="checkbox" id="terms" className="checkbox" required />
                            <label for="terms" className="checkbox-label">
                                I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>
                            </label>
                        </div>
                        
                        <button type="submit" className="btn-create-account">Create Account</button>
                    </form>
                    
                    <div className="divider">
                        <span className="divider-text">Or continue with</span>
                    </div>
                    
                    <div className="social-login">
                        <button className="btn-social btn-google">
                            <img src="images/google.png" alt="Google" className="social-icon" />
                            Google
                        </button>
                        <button className="btn-social btn-facebook">
                            <img src="images/facebook.png" alt="Facebook" className="social-icon" />
                            Facebook
                        </button>
                    </div>
                    
                    <p className="login-link">
                        Already have an account? <a href="LogIn.html" className="login-text">Sign in</a>
                    </p>
                </div>
            </div>
        </div>

        </>
    )
}
export default SignUp


        

