import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faComment, faIdCard, faMoneyBill, faStar } from '@fortawesome/free-solid-svg-icons'

const BottomBoard = () => {
    const [activities, setActivities] = useState()
    const [orders, setOrders] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setActivities([
            {
                id: 1,
                user: "Nikolia",
                activity: "Added a Review",
                icon: faStar,
                date: "42 min"
            },
            {
                id: 2,
                user: "Panshi",
                activity: "Sent a Message",
                icon: faComment,
                date: "50 min"
            },
            {
                id: 3,
                user: "Rasel",
                activity: "Placed an Order",
                icon: faShoppingCart,
                date: "2 hours"
            },
            {
                id: 4,
                user: "Reshmi",
                activity: "Updated Details",
                icon: faIdCard,
                date: "5 hours"
            },
            {
                id: 5,
                user: "Nikolia",
                activity: "Used a Coupon",
                icon: faMoneyBill,
                date: "1 day"
            }
        ])
        setOrders([
            {
                invoice: 12386,
                customer: "Charles Dues",
                product: "Black Polo",
                amount: 1,
                price: 90,
                status: "Process"
            },
            {
                invoice: 12387,
                customer: "Marko",
                product: "White Polo",
                amount: 1,
                price: 100,
                status: "Open"
            },
            {
                invoice: 12388,
                customer: "John Doe",
                product: "Flower Sublimation",
                amount: 3,
                price: 60,
                status: "OnHold"
            },
            {
                invoice: 12389,
                customer: "Amanda Grace",
                product: "Yellow Polo",
                amount: 2,
                price: 90,
                status: "Process"
            },
            {
                invoice: 12390,
                customer: "Eve Mary",
                product: "Black Hoodie",
                amount: 1,
                price: 90,
                status: "Open"
            },
            {
                invoice: 12391,
                customer: "Cynthia Morgan",
                product: "Authur sublimation",
                amount: 1,
                price: 100,
                status: "OnHold"
            }
        ])
        setLoading(false)
    }, [setActivities, setOrders])


    return (
        <div className="bottom-board">
            <div className="recent-activities">
                <p>Recent Activities</p>
                {
                    (loading) ?  
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div> :
                    activities.map(activity => {
                        return (
                            <div className="activity" id={`activity${activity.id}`} key={activity.id}>
                                <p className="date">{activity.date} Ago</p>
                                <FontAwesomeIcon icon={activity.icon} />
                                <div className="texts">
                                    <h2>{activity.activity}</h2>
                                    <p>{activity.user}</p>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
            <div className="order-status">
                <p>Order Status</p>
                {
                    (loading) ?  
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div> :
                    <table>
                        <thead>
                            <tr>
                                <th>INVOICE</th>
                                <th>CUSTOMER</th>
                                <th>PRODUCT</th>
                                <th>AMOUNT</th>
                                <th>PRICE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                        {orders.map(order => {
                            return (
                                <tr key={order.invoice}>
                                    <td>{order.invoice}</td>
                                    <td>{order.customer}</td>
                                    <td>{order.product}</td>
                                    <td>{order.amount}</td>
                                    <td>{order.price}</td>
                                    <td><button className={order.status}>{order.status}</button></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default BottomBoard