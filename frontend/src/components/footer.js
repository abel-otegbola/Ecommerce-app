import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookmark, faComment, faEnvelope, faHeart, faHome, faIndustry, faMapMarker, faQuestion, faQuestionCircle, faList, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
            <div className="navigations">
                <ul>
                    <h3>PAGES</h3>
                    <li><a href="/"><FontAwesomeIcon icon={faHome}/> Home</a></li>
                    <li><a href="/about"><FontAwesomeIcon icon={faBook}/> About</a></li>
                    <li><a href="/shop"><FontAwesomeIcon icon={faIndustry}/> Shop</a></li>
                    <li><a href="/cart"><FontAwesomeIcon icon={faShoppingCart}/> Cart</a></li>
                    <li><a href="/wishlist"><FontAwesomeIcon icon={faHeart}/> Wishlist</a></li>
                </ul>
                <ul>
                    <h3>SERVICES</h3>
                    <li><a href="/"><FontAwesomeIcon icon={faBookmark}/> Orders</a></li>
                    <li><a href="/about"><FontAwesomeIcon icon={faQuestion}/> Help</a></li>
                    <li><a href="/shop"><FontAwesomeIcon icon={faComment}/> Messages</a></li>
                    <li><a href="/contacts"><FontAwesomeIcon icon={faEnvelope}/> Contacts</a></li>
                    <li><a href="/cart"><FontAwesomeIcon icon={faQuestionCircle}/> FAQs</a></li>
                    <li><a href="/wishlist"><FontAwesomeIcon icon={faList}/>Terms and conditions</a></li>
                </ul>
                <ul>
                    <h3>FOLLOW US</h3>
                    <li><a href="https://facebook.com/abel-otegbola-1"><FontAwesomeIcon icon={faFacebookF}/> Facebook</a></li>
                    <li><a href="https://twitter.com/abel-otegbola"><FontAwesomeIcon icon={faTwitter}/> Twitter</a></li>
                    <li><a href="https://instagram.com/abel-otegbola-1"><FontAwesomeIcon icon={faInstagram}/> Instagram</a></li>
                    <li><a href="https://dribbble.com/abdev"><FontAwesomeIcon icon={faDribbble}/> Dribbble</a></li>
                    <li><a href="https://github.com/abel-otegbola"><FontAwesomeIcon icon={faGithub}/> Github</a></li>
                    <li><FontAwesomeIcon icon={faMapMarker}/>+2347060989331 Lagos, Nigeria</li>
                </ul>
                <div className="newsletter">
                    <form action="" method="post">
                        <p>Subscribe to our newsletter</p>
                        <input type="email" name="email" placeholder="Enter your email..."/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="socials">
            </div>
            <div className="copyright">
                <a href="https://ingenios.com">Abel Otegbola</a> | Copyright &copy; {new Date().getFullYear()} 
            </div>
        </footer>
    )
}

export default Footer;