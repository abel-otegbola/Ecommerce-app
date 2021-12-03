import React from "react";


const Orders = ({ userProfile }) => {

    return (
        <div className="orders">
           <h1>Orders</h1>
        
           <table>
               <tbody>
                    <tr>
                        <th>S/N</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </tbody>
                <tbody>
                { (userProfile.orders === null)|| (userProfile.orders === undefined) || (userProfile.orders === "") ? <tr><td>You haven't placed an order <a href="/shop">Shop now</a></td></tr> :
                        userProfile.orders.map(order => {
                        return (
                                <tr>
                                    <td>{userProfile.orders.findIndex(item => item.title === order.title) + 1}</td>
                                    <td>{order.title}</td>
                                    <td>${order.price}</td>
                                    <td>{order.status}</td>        
                                </tr>
                            )
                    }) }
                </tbody>
            </table>
        </div>
    )
}

export default Orders