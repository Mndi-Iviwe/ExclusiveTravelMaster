import '../javascript/script.js'

function LogIn() {

    return (
        <>
            <div className="container">
            <div className="login-section">
                <h1 className="welcome-title">Welcome Back</h1>
                <p className="welcome-subtitle">Sign in to access your exclusive travel account</p>
                
                <div className="login-card">
                    <form className="login-form" id="loginForm">
                        <div className="form-group">
                            <label for="email" className="form-label">Email Address</label>
                            <input type="email" id="email" className="form-input" placeholder="you@example.com" required />
                        </div>
                        
                        <div className="form-group">
                            <div className="password-header">
                                <label for="password" className="form-label">Password</label>
                                <a href="#" className="forgot-password">Forgot password?</a>
                            </div>
                            <input type="password" id="password" className="form-input" placeholder="••••••••" required />
                        </div>
                        
                        <div className="remember-me">
                            <input type="checkbox" id="remember" className="checkbox" />
                            <label for="remember" className="checkbox-label">Remember me</label>
                        </div>
                        
                        <button type="submit" className="btn-signin">Sign In</button>
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
                    
                    <p className="signup-link">
                        Don't have an account? <a href="#" className="signup-text">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default LogIn
  
        


