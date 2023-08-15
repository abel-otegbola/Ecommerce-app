import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from 'axios'
import "./shop.css"
import * as action from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faShoppingCart, faCheck, faMinusSquare } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from "react-redux";


const Shop = () => {

    const [materials, setMaterials] = useState({})
    const [cartIds, setCartIds] = useState()
    const [wishIds, setWishIds] = useState()
    const [loading, setLoading] = useState(true)
    const cartFromStore = useSelector(action.getCart)
    const WishlistFromStore = useSelector(action.getWishlist) 
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("/products/allproducts", {responseType: "json"})
            .then(res => {
                setMaterials(res.data)
                setLoading(false)
            })
        
        setCartIds(cartFromStore.map(element => element.id))
        setWishIds(WishlistFromStore.map(element => element.id))
    }, [cartFromStore, WishlistFromStore])

    return (
        <div className="shop">
            <div className="front-texts">
                <h1>Shop</h1>
            </div>
            <div className="shop-products">
                <div className="shopnav">
                    <h4>CATEGORY</h4>
                    <ul>
                        <p>Material</p>
                        <li className="checked"><FontAwesomeIcon icon={faCheck}/>Hoodie</li>
                        <li className="checked"><FontAwesomeIcon icon={faCheck}/>Polo</li>
                        <li className="checked"><FontAwesomeIcon icon={faCheck}/>T-Shirt</li>
                        <li className="checked"><FontAwesomeIcon icon={faCheck}/>Joggers</li>
                    </ul>
                    <ul>
                        <p>Design</p>
                        <li className="checked"><FontAwesomeIcon icon={faCheck}/>Brand</li>
                        <li className="checked"><FontAwesomeIcon icon={faCheck}/>Sublimation</li>
                        <li className="checked"><FontAwesomeIcon icon={faCheck}/>Cartoon</li>
                        <li className="checked"><FontAwesomeIcon icon={faCheck}/>Quotes</li>
                    </ul>
                    <button>FILTER</button>
                </div>
            
                <div className="products">
                    <div className="polo">
                        { (loading) ? 
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                        :
                            materials.map(polo => {
                            return (
                                <div className="product" key={polo.id}>
                                    
                                    <img src={polo.img} loading="lazy"
                                        alt={`polo${materials.findIndex(item => item.title === polo.title)}`}
                                    />
                                    <div className="texts">
                                        <Link to={`/single/?${polo.id}`} className="name__price">
                                            <h2>{polo.title}</h2>
                                        </Link>
                                            
                                            {
                                                    (wishIds.indexOf(polo.id) !== -1) ?
                                                        <button className="wishlist" title="Remove from wishlist" onClick={() => dispatch(action.RemoveFromWishlist(polo.id))}><FontAwesomeIcon icon={faHeart}/></button>
                                                    :
                                                        <button className="added" title="Add to wishlist" onClick={() => dispatch(action.AddToWishlist(polo.id, polo.title, polo.price, polo.img, 1))}><FontAwesomeIcon icon={faHeart}/></button>
                                                }
                                        <div className="price__star">
                                            <h2 className="price">${polo.price}</h2>
                                            <div className={`star star${polo.star}`}>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        </div>  
                                            
                                    </div>
                                    <div className="btn">
                                                {
                                                    (cartIds.indexOf(polo.id) !== -1) ?
                                                        <button className="remove" onClick={() => dispatch(action.RemoveFromCart(polo.id))}>
                                                            <FontAwesomeIcon icon={faMinusSquare} />
                                                        </button> 
                                                    :
                                                        <button onClick={() => dispatch(action.AddToCart(polo.id, polo.title, polo.price, polo.img, 1))}>
                                                            <FontAwesomeIcon icon={faShoppingCart}/>
                                                        </button> 
                                                }
                                            </div>
                                </div>
                                )
                        }) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;