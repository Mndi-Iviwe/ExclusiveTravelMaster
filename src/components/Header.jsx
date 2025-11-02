import {Link, useMatch, useResolvedPath} from 'react-router-dom'

function Header() {
  

  return (
    <>

        <div className="container">
        
            <div className="nav-wrapper">
                <div className="logo">
                    <img src="images/logo.png" alt="Exclusive Travels" className="logo-img" />
                </div>
                <nav className="nav">
                            <CustomLink to='/launch'>Home</CustomLink>
                            <CustomLink to='/Packages'>Destinations</CustomLink>
                            <CustomLink to='/Visa Application'>Visa Application</CustomLink>
                            <CustomLink to='/AboutUs'>About Us</CustomLink>
                            <CustomLink to='/ContactUs'>Contact</CustomLink>
                </nav>
                <div className="auth-buttons">
                    <button className="btn-login" ><CustomLink to='/Login'>Login</CustomLink></button>
                    <button className="btn-register"><CustomLink to='/SignUp'>Register</CustomLink></button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Header

//linking function - uses window  data to refernece to different links/pages
export function CustomLink({to, children, ...props}) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : ""}>
             <Link to={to} {...props} className='text-decoration-none text-reset'>
                {children}
             </Link>
        </li>
    )
}