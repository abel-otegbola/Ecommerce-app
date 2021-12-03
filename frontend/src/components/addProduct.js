import React, { useState, useEffect } from "react";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Addproduct = () => {
    const [materials, setMaterials] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("/products/allproducts", {responseType: "json"})
            .then(res => {
                setMaterials(res.data)
                setLoading(false)
            })
    })

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>S/N</th>
                        <th>Products</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </tbody>
                    
                <tbody>
                { (loading) ? <tr></tr> :
                        materials.map(polo => {
                        return (
                                <tr key={materials.findIndex(item => item.title === polo.title) + 1}>
                                    <td>{materials.findIndex(item => item.title === polo.title) + 1}</td>
                                    <td>{polo.title}</td>
                                    <img src={polo.img} alt="cloth" width="40" style={{margin: 10}}/>
                                    <td>${polo.price}</td>
                                    <td className="edit">
                                        <a href="/">Edit</a>
                                    </td>        
                                </tr>
                            )
                    }) }
                </tbody>
            </table>
            <form action="/products/addProduct" encType="multipart/form-data" method="POST">
                <h1>Add New Product</h1>
                <input type="text" name="title" placeholder="Product name"/>
                <input type="text" name="price" placeholder="Price"/>
                <input type="file" name="uploaded_file" placeholder="Add image"/>
                <input type="text" name="description" placeholder="Description"/>
                <input type="number" name="star" placeholder="star" min="0" max="5"/>
                <button type="submit">Add product<FontAwesomeIcon icon={faPlusCircle} /></button>
            </form>
        </div>
    )
}

export default Addproduct