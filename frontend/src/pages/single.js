import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import * as action from '../redux/actions';
import { useDispatch, useSelector } from "react-redux";

const Single = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [cartIds, setCartIds] = useState()
    const [wishIds, setWishIds] = useState()
    const dispatch = useDispatch();
    const cartFromStore = useSelector(action.getCart)
    const WishlistFromStore = useSelector(action.getWishlist) 

    useEffect(() => {
        let id = (window.location.search)
        let newId = parseFloat(id[1] + id[2])
        
        axios.get(`/products/singleproduct/${newId}`, {responseType: "json"})
            .then(res => {
                setProduct(res.data)
                setLoading(false)
            })     
            
            
        setCartIds(cartFromStore.map(element => element.id))
        setWishIds(WishlistFromStore.map(element => element.id))
    }, [cartFromStore, WishlistFromStore])

    return (
        <div className="single-product">
            {
            (loading) ? 
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
                    :
                product.map(item => {
                    return (
                        <div className="single__product" key={item.id}>
                            <img src={`../${item.img}`} alt="polo"/>
                            <div className="texts">
                                <h2>{item.title}</h2>
                                <div className={`star star${item.star}`}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="description">{item.description}</div>
                                <div className="price">CURRENT PRICE: <span>${item.price}</span></div>
                                <div className="about"><strong>91%</strong> of buyers enjoyed this product (<strong>87 votes</strong>)</div>
                                <div className="size">
                                    size: 
                                </div>
                                    {
                                        (cartIds.indexOf(item.id) !== -1) ?
                                            <button className="remove" onClick={() => dispatch(action.RemoveFromCart(item.id))}>
                                                <FontAwesomeIcon icon={faShoppingCart}/> Remove From Cart
                                            </button> 
                                        :
                                            <button onClick={() => dispatch(action.AddToCart(item.id, item.title, item.price, item.img, 1))}>
                                                <FontAwesomeIcon icon={faShoppingCart}/> Add To Cart
                                            </button> 
                                    }
                                    {
                                        (wishIds.indexOf(item.id) !== -1) ?
                                            <button className="wishlist" onClick={() => dispatch(action.RemoveFromWishlist(item.id))}><FontAwesomeIcon icon={faHeart}/> Remove from wishlist</button>
                                        :
                                            <button className="wishlist" onClick={() => dispatch(action.AddToWishlist(item.id, item.title, item.price, item.img, 1))}><FontAwesomeIcon icon={faHeart}/> Add to wishlist</button>
                                    }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Single;