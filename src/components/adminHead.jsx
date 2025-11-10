import React from "react";
import { CustomLink } from "./Header";



function AdminHead(){

    return(
        <>

        <div className="container py-3">
            <div className="nav-wrapper">
                            <div className="logo">
                                <img src="images/Rettina.png" alt="Exclusive Travels" className="logo-img" />
                            </div>
                            <nav className="nav">
                                        <CustomLink to='/admin/UserManagement'>Booking</CustomLink>
                                        <CustomLink to='/Packages'>Packages</CustomLink>
                                        <CustomLink to='/Visa Application'>Users</CustomLink>
                            </nav>
             </div>
        </div>
            
        </>
    )
} 
export default AdminHead;
