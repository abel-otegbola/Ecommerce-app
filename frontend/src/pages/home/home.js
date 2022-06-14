import "./home.css"
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from 'axios'
import sittingroom3 from "../../img/sittingroom2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCocktail, faEnvelope, faFistRaised, faStar } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get("/products/allproducts", {responseType: "json"})
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            })
    }, [])

    return (
        <div className="home">
            <header>
                <div className="header-texts">
                    <h1>Find a comfortable furniture to suit your taste</h1>
                    <p>Amazing furnitures with modern designs and awesome convenience for the whole family.</p>
                    <a href="/shop">Visit the shop now</a>
                </div>
            </header>
            <section>
                <div className="heading">
                    <h2>Best Selling Products</h2>
                    <p>Here are our top sold products for last week</p>
                </div>
                <div className="products">
                    {   (loading) ? 
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                        :
                        products.filter(element => (element.star > 2 && element.id < products[0].id+5)).map(product => { return (
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
                            </div>
                        ) })
                    }
                </div>
            </section>

            <section>
                <div className="features">
                    <img src={sittingroom3} alt="sofa01"/>
                    <div className="texts">
                        <div className="heading">
                            <h2>Flexibility and awesome features to suit your lifestyle.</h2>
                            <p>There are unique features for everyone as everyone is unique to us.</p>
                        </div>
                        <div className="features-list">
                            <div className="features-list__feature">
                                <FontAwesomeIcon icon={faCocktail} />
                                <div className="features-list__feature--texts">
                                    <h4>convenient and comfortable materials</h4>
                                    <p>High quality materials from the best manufacturers to produce the best products</p>
                                </div>
                            </div>
                            <div className="features-list__feature">
                                <FontAwesomeIcon icon={faFistRaised} />
                                <div className="features-list__feature--texts">
                                    <h4>Strong and long-lasting materials</h4>
                                    <p>High quality materials from the best manufacturers to produce the best products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="heading">
                    <h2>Newest Arrivals</h2>
                    <p>Classy products that have just arrived</p>
                </div>
                <div className="products">
                {   (loading) ? 
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                        :
                        products.filter(element => element.id > products[products.length-1].id-4).map(product => { return (
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
                            </div>
                        ) })
                    }
                </div>

            </section>

            <section>
                <div className="heading">
                    <h2>Our Newsletter</h2>
                    <p>Enter your e-mail to receive informations on discounts, promos and other incentives.</p>
                </div>
                <form className="newsletter">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="email" name="newsletterEmail" autoComplete="true" placeholder="Enter email..."/>
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        </div>
    )
}

export default Home;