import React, { useState, useEffect } from "react";
import * as action from '../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { getCart } from '../redux/actions'
import shoppingCart from '../img/shopping-cart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    const [total, setTotal] = useState()
    const cartFromStore = useSelector(getCart) 
    const dispatch = useDispatch();

    const handleCart = (id) => {
        dispatch(action.RemoveFromCart(id))
    }

    useEffect(() => {
        let cartSum = cartFromStore.map(element => element.price * element.amount)
        let newsummation = cartSum.reduce((a, b) => {
            return a + b;
        }, 0)
        setTotal(newsummation)
    }, [cartFromStore])

    return (
        <div className="cart">
            <div className="front-texts">
                <h1>Cart</h1>
                <p>Welcome to your cart</p>
            </div>
            <div className="products">
            { (cartFromStore !== undefined) ?
            cartFromStore.map(product => {
                return (
                    <div key={product.id} className="product">
                        <img src={product.img}  alt="polo"/>
                                <div className="texts">
                                    <div className="name">
                                        <h2>{product.title}</h2>
                                        <h2 className="price">${
                                            product.price    
                                        }</h2>
                                    </div>
                                    <div className="btn">
                                        <button className="incre" onClick={() => dispatch(action.increCart(product.id))}>+</button>
                                        <input type="number" value={product.amount} readOnly/>
                                        {
                                            (product.amount < 2) ?
                                            "" :
                                            <button className="decre" onClick={() => dispatch(action.decreCart(product.id))}>-</button>
                                        }
                                        <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleCart(product.id)} />
                                    </div>
                                </div>
                    </div>
                )
            }) : <p>no product</p>
            }
                <div className="product total">
                    <div className="texts">
                    <h3>Total</h3>
                    <p>$ {total}</p>
                    </div>
                </div>
                
                <a href="/checkout" className="checkout">Proceed to Checkout</a>
                
            </div>
            <section>
                <img src={shoppingCart} alt="shoppingcart" width="250px"/>
            </section>
        </div>
    )
}

export default Cart;