import "./relatedProducts.css"
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'

const RelatedProducts = ({ category }) => {
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
        <>
        <h2 className="heading">Related Products</h2>
        <div className="relatedProducts products">
            {   (loading) ? 
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
                :
                products.filter(element => element.categories === category).map(product => { return (
                    <div key={product.id} className="product">
                        <Link to={`/single/?${product.id}`}>
                            <img src={`../${product.img}`}  alt={product.product}/>
                            <div className="texts">
                                <h3>{product.title}</h3>
                                <div className="star-rating">
                                    <FontAwesomeIcon icon={faStar} className={(product.star > 0)? "checked" : ""}/>
                                    <FontAwesomeIcon icon={faStar} className={(product.star > 1)? "checked" : ""}/>
                                    <FontAwesomeIcon icon={faStar} className={(product.star > 2)? "checked" : ""}/>
                                    <FontAwesomeIcon icon={faStar} className={(product.star > 3)? "checked" : ""}/>
                                    <FontAwesomeIcon icon={faStar} className={(product.star > 4)? "checked" : ""}/>
                                </div>
                                <p>{product.categories}</p>
                                <h3 className="price">$ {product.price}</h3>
                            </div>
                        </Link>
                    </div>
                ) })
            }
        </div>
        </>
    )
}

export default RelatedProducts