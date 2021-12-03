import React, { useState, useEffect } from "react";
import * as action from '../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

const Wishlist = () => {
    const [cartIds, setCartIds] = useState([])
    const WishlistFromStore = useSelector(action.getWishlist) 
    const cartFromStore = useSelector(action.getCart)
    const dispatch = useDispatch();

    
    useEffect(() => {
         let newCartIds = cartFromStore.map(element => element.id)
         setCartIds(newCartIds)
     }, [cartFromStore])

    const handleWishlist = (id) => {
        dispatch(action.RemoveFromWishlist(id))
    }

    return (
        <div className="cart">
            <div className="front-texts">
                <h1>Wishlist</h1>
                <p>Welcome to your Wishlist</p>
            </div>
            <div className="products">
            { (WishlistFromStore !== undefined) ?
            WishlistFromStore.map(product => {
                return (
                    <div key={product.id} className="product">
                        <img src={product.img}  alt="polo"/>
                                <div className="texts">
                                    <div className="name">
                                        <h2>{product.title}</h2>
                                        <h2>${product.price}</h2>
                                    </div>
                                    <div className="btn">
                                        {
                                                (cartIds.indexOf(product.id) !== -1) ?
                                                    <div className="cartBtn">
                                                        <button><a href="/cart">cart</a></button>
                                                    </div>
                                                :
                                                    <button onClick={() => dispatch(action.AddToCart(product.id, product.title, product.price, product.img, 1))}>
                                                        <FontAwesomeIcon icon={faShoppingCart}/>
                                                    </button> 
                                            }
                                        <FontAwesomeIcon icon={faTimes} onClick={() => handleWishlist(product.id)} />
                                    </div>
                                </div>
                    </div>
                )
            }) : <p>no product</p>
            }
                
            <a href="/cart" className="checkout">Proceed to Cart</a>
            </div>
        </div>
    )
}

export default Wishlist;