import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBehanceSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
            <div className="navigations">
                <ul>
                    <h3 className='brand'>Adept Furnitures</h3>
                    <li>Providing high quality and modern furnitures.</li>
                    <li><a href="https://twitter.com/abel-otegbola"><FontAwesomeIcon icon={faTwitterSquare}/> Twitter</a></li>
                    <li><a href="https://github.com/abel-otegbola"><FontAwesomeIcon icon={faGithub}/> Github</a></li>
                    <li><a href="https://github.com/abel-otegbola"><FontAwesomeIcon icon={faBehanceSquare}/> Behance</a></li>
                    <li><FontAwesomeIcon icon={faMapMarkerAlt}/>+2347060989331 Lagos, Nigeria</li>
                </ul>
                <ul>
                    <h3>PAGES</h3>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/wishlist">Wishlist</a></li>
                </ul>
                <ul>
                    <h3>SERVICES</h3>
                    <li><a href="/">Orders</a></li>
                    <li><a href="/about">Help</a></li>
                    <li><a href="/shop">Messages</a></li>
                    <li><a href="/contacts">Contacts</a></li>
                </ul>
                
            </div>
            <div className="copyright">
                <a href="https://ingenios.com">Abel Otegbola</a> | Copyright &copy; {new Date().getFullYear()} 
            </div>
        </footer>
    )
}

export default Footer;