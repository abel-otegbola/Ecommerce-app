import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from '../img/logo.svg'

import { Link } from "react-router-dom"

import * as action from '../redux/actions';
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartFromStore = useSelector(action.getCart)
    const WishlistFromStore = useSelector(action.getWishlist)
    const cartValue = cartFromStore

    const currentUser = useSelector(action.getUser)


    return (
        <div className="top-bar">
        <nav>
            <div className="brand">
                <img src={logo} alt="logo"/>
                <h1>Ingeni<span>o</span><span>s</span></h1>
            </div>
            <ul className="main-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/wishlist">wishlist<sup>{WishlistFromStore.length}</sup></a></li>
                <li>
                </li>
            </ul>
            <ul className="icons">
                <li>
                    <Link to={'/cart'}>
                        <FontAwesomeIcon icon={faShoppingCart} /><sup>{cartValue.length}</sup>
                    </Link> 
                    <Link to={(currentUser.user === null) ? "/loginPage" : "/dashboard"}>
                        {(currentUser.user !== null) ? <span className="user"><FontAwesomeIcon icon={faUser} />{currentUser.user}</span>: <span className="user">Login</span>}
                    </Link>
                </li>
            </ul>
            <a className="nav-button" href="/shop" title="shop">DISCOVER</a>
        </nav>

        <form className="search-bar" action="/search">
            <div className="search">
                <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                <input type="text" placeholder="Search..." name="searchInput"/>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
        </form>
        </div>
    )
}

export default Navbar;