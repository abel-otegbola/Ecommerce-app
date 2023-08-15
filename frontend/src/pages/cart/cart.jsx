import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import "./cart.css"
import * as action from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { getCart } from '../../redux/actions'
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
            <section>
                <div className="products">
                { (cartFromStore !== undefined && cartFromStore.length !== 0) ?
                cartFromStore.map(product => {
                    return (
                        <div key={product.id} className="product">
                            <Link to={`/single/?${product.id}`}>
                                <img src={product.img}  alt="polo"/>
                            </Link>
                                <div className="texts">
                                    <div className="name">
                                        <Link to={`/single/?${product.id}`}>
                                            <h2>{product.title}</h2>
                                            <h2 className="price">${
                                                product.price    
                                            }</h2>
                                        </Link>
                                    </div>
                                    <div className="btn">
                                        <button className="incre" onClick={() => dispatch(action.increCart(product.id))}>+</button>
                                        <input type="number" value={product.amount} readOnly/>
                                        {
                                            (product.amount < 2) ?
                                            "" :
                                            <button className="decre" onClick={() => dispatch(action.decreCart(product.id))}>-</button>
                                        }
                                        <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleCart(product.id)} className="deleteProduct"/>
                                    </div>
                                </div>
                        </div>
                    )
                }) 
                : <p className="product">Cart is empty!. Visit the shop to add product <Link to={"/shop"} style={{ color: "rgb(237, 166, 60)" }}>Go to shop</Link></p>
                }
                    
                    
                <p className="product total"><h3>Total</h3><h3>${total}</h3></p>
                </div>


                
                <aside>
                    <h2>Checkout</h2>
                    <p>Fill your details here to order the products</p>

                    <div className="personal details">
                    </div>

                    
                </aside>
            </section>
        </div>
    )
}

export default Cart;