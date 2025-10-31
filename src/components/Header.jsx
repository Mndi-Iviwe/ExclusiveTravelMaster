function Header() {
  

  return (
    <>

        <div className="container">
        
            <div className="nav-wrapper">
                <div className="logo">
                    <img src="images/logo.png" alt="Exclusive Travels" className="logo-img" />
                </div>
                <nav className="nav">
                    <a href="launch.html" className="nav-link">Home</a>
                    <a href="Packages.html" className="nav-link">Destinations</a>
                    <a href="visa.html" className="nav-link active">Visa Application</a>
                    <a href="AboutUs.html" className="nav-link">About Us</a>
                    <a href="ContactUs.html" className="nav-link">Contact</a>
                </nav>
                <div className="auth-buttons">
                    <button className="btn-login" >Login</button>
                    <button className="btn-register">Register</button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Header

