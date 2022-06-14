import React, { useState, useEffect } from "react";
import "./wishlist.css"
import {Link} from "react-router-dom"
import * as action from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

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
        <div className="wishlist">
            <div className="front-texts">
                <h1>Wishlist</h1>
                <p>Welcome to your Wishlist</p>
            </div>
            <div className="products">
            { (WishlistFromStore !== undefined) ?
            WishlistFromStore.map(product => {
                return (
                    <div key={product.id} className="product">
                                <Link to={`/single/?${product.id}`}>
                                    <img src={product.img}  alt={product.product}/>
                                    <div className="texts">
                                        <h3>{product.title}</h3>
                                        <div className="star-rating">
                                            <FontAwesomeIcon icon={faStar} className={(product.star > 0)? "checked" : ""}/>
                                            <FontAwesomeIcon icon={faStar} className={(product.star > 1)? "checked" : ""}/>
                                            <FontAwesomeIcon icon={faStar} className={(product.star > 2)? "checked" : ""}/>
                                            <FontAwesomeIcon icon={faStar} className={(product.star > 3)? "checked" : ""}/>
                                            <FontAwesomeIcon icon={faStar} className={(product.star > 4)? "checked" : ""}/>
                                        </div>
                                        <p>{product.category}</p>
                                        <h3 className="price">$ {product.price}</h3>
                                    </div>
                                </Link>
                                <div className="btn">
                                        {
                                                (cartIds.indexOf(product.id) !== -1) ?
                                                    <div className="cartBtn">
                                                        <button><a href="/cart">Proceed to cart</a></button>
                                                    </div>
                                                :
                                                    <button onClick={() => dispatch(action.AddToCart(product.id, product.title, product.price, product.img, 1))}>
                                                        <FontAwesomeIcon icon={faShoppingCart}/>
                                                    </button> 
                                            }
                                        <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleWishlist(product.id)} />
                                </div>
                    </div>
                )
            }) : <p>no product</p>
            }
            </div>
        </div>
    )
}

export default Wishlist;