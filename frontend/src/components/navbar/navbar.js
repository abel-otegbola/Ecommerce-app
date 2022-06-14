import React, { useState } from 'react'
import "./navbar.css"
import Search from "../search/search"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faUser, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom"

import * as action from '../../redux/actions';
import { useSelector } from 'react-redux'

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState("")
    const [search, setSearch] = useState("")
    const cartFromStore = useSelector(action.getCart)
    const WishlistFromStore = useSelector(action.getWishlist)
    const cartValue = cartFromStore

    const currentUser = useSelector(action.getUser)


    return (
        <div className="top-bar">
        <nav>
            <div className="brand">
                <h1><span>Adept</span> Furnitures</h1>
            </div>
            <ul className={`main-nav ${menuToggle} `}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/wishlist">wishlist<sup>{WishlistFromStore.length}</sup></a></li>
                <li>
                </li>
            </ul>
            <ul className={`icons ${menuToggle} `}>
                <li>
                    <Link to={'/cart'}>
                        <FontAwesomeIcon icon={faShoppingBasket} /><sup>{cartValue.length}</sup>
                    </Link> 
                    <Link to={(currentUser.user === null) ? "/loginPage" : "/dashboard"}>
                        {(currentUser.user !== null) ? <span className="user"><FontAwesomeIcon icon={faUser} />{currentUser.user}</span>: <span className="user">Login</span>}
                    </Link>
                </li>
            </ul>
            <button className="nav-button" href="/" title="search store" onClick={() => setSearch((search === "open")? "" : "open")}><FontAwesomeIcon icon={faSearch} /></button>
            <Search search={search} setSearch={setSearch}/>
            <FontAwesomeIcon icon={(menuToggle === "block")? faTimes : faBars} className="navicon" onClick={() => setMenuToggle((menuToggle === "none")?"block":"none")}/>
        </nav>
        </div>
    )
}

export default Navbar;