import logo from "../Assets/Images/logo.jpg"
import React, {useEffect, useState} from "react"
import { Link, useLocation, useNavigate} from "react-router-dom"
import "./style.css"

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("/")
    const location = useLocation()
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    useEffect(() => {
        setActiveLink(location.pathname)
    },[location])
    return (
        <>
        
        <div className="navbar">
            <div className="navbar-logo" onClick={goToHome}>
                {/* React Router */}
                <img src={logo} alt="" />
            </div>
            <ul className="navbar-menu">
                <li className={activeLink === '/' ? "active" : ""}>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className={activeLink === '/about' ? "active" : ""}>
                    <Link to={'/about'}>About Us</Link>
                </li>
                <li className={activeLink === '/products' ? "active" : ""}>
                    <Link to={'/products'}>Products</Link>
                </li>
                <li className={activeLink === '/contact' ? "active" : ""}>
                    <Link to={'/contact'}>Contact Us</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Navbar