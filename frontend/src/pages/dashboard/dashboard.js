import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faUser, faList, faCog, faPlusCircle, faSignInAlt, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons'
import * as action from '../../redux/actions';

import Admin from '../../components/admin/admin'
import Addproduct from "../../components/products/products";
import Profile from "../../components/profile";
import Orders from "../../components/orders";
import Chats from "../../components/chats";
import Messages from "../../components/messages";
import Settings from "../../components/settings";

const Dashboard = () => {
    const currentUser = useSelector(action.getUser)
    const userProfile = useSelector(action.getProfile)
    const dispatch = useDispatch()
    const [display, setDisplay] = useState()
    const [active, setActive] = useState()

    useEffect(() => {
        fetch('/users/userlogin')
        .then((res) => res.json())
        .then((data) => {
            dispatch(action.userlogin(data.name))
            // localStorage.setItem("user", data.name)
            // localStorage.setItem("cartAmount", data.cartAmount)
        })
        .catch(err => {console.log(err)});

        setDisplay(["none", "none", " block", "none", "none", "none", "none" ])
        setActive(["", "", "active", "", "", "", "" ])

        fetch('/users/userProfile')
        .then((res) => res.json())
        .then((data) => {
            dispatch(action.profilelogin(data.id, data.firstname, data.lastname, data.email, data.orders, data.messages, data.chats))
        })
        .catch(err => {console.log(err)});

    }, [dispatch])

    const handleLogout = () => {
        dispatch(action.userlogout())    
        dispatch(action.profilelogout())    
        window.location.href = "./"
    }

    const handleDisplay = (id) => {
        switch (id) {
            case 0:
                setDisplay(["block", "none", "none", "none", "none", "none", "none" ])
                setActive(["active", "", "", "", "", "", "" ])
                break;
            case 1:
                setDisplay(["none", "block", "none", "none", "none", "none", "none" ])
                setActive(["", "active", "", "", "", "", "" ])
                break;
            case 3:
                setDisplay(["none", "none", "none", "block", "none", "none", "none" ])
                setActive(["", "", "", "active", "", "", "" ])
                break;
            case 4:
                setDisplay(["none", "none", "none", "none", "block", "none", "none" ])
                setActive(["", "", "", "", "active", "", "" ])
                break;
            case 5:
                setDisplay(["none", "none", "none", "none", "none", "block", "none" ])
                setActive(["", "", "", "", "", "active", "" ])
                break;
            case 6:
                setDisplay(["none", "none", "none", "none", "none", "none", "block" ])
                setActive(["", "", "", "", "", "", "active" ])
                break;
            default:
                setDisplay(["none", "none", "block", "none", "none", "none", "none" ])
                setActive(["", "", "active", "", "", "", "" ])
                break;
        }
    }

    return (
        <div className="dashboard">
             
             <section>
                 <div className="nav">
                    <h2>Dashboard</h2>
                    <ul>
                        {(currentUser.user === "Abel") ? <li className={(active !== undefined) ? active[0] : ""} onClick={() => handleDisplay(0)} ><FontAwesomeIcon icon={faUserShield} /> Admin</li> : ""}
                        {(currentUser.user === "Abel") ? <li className={(active !== undefined) ? active[1] : ""} onClick={() => handleDisplay(1)} ><FontAwesomeIcon icon={faPlusCircle}/>Products</li> : ""}
                        <li className={(active !== undefined) ? active[2] : ""} onClick={() => handleDisplay(2)} ><FontAwesomeIcon icon={faUser} />Profile</li>
                        <li className={(active !== undefined) ? active[3] : ""} onClick={() => handleDisplay(3)} ><FontAwesomeIcon icon={faList} />Orders</li>
                        <li className={(active !== undefined) ? active[4] : ""} onClick={() => handleDisplay(4)} ><FontAwesomeIcon icon={faEnvelope} />Messages</li>
                        <li className={(active !== undefined) ? active[5] : ""} onClick={() => handleDisplay(5)} ><FontAwesomeIcon icon={faComments} />Chats</li>
                        <li className={(active !== undefined) ? active[6] : ""} onClick={() => handleDisplay(6)} ><FontAwesomeIcon icon={faCog} />Settings</li>
                        <li className="logout" onClick={() => handleLogout()}><FontAwesomeIcon icon={faSignInAlt} />Logout</li>
                    </ul>
                 </div>
                 {
                     (userProfile.firstname === "Abel") ?
                     <aside id="admin" style={ {display: (display !== undefined) ? display[0] : "none"} }>
                        <Admin userProfile={userProfile} />
                     </aside> :
                     ""
                 }
                 <aside id="addProduct" style={ {display: (display !== undefined) ? display[1] : "none"} }>
                    <Addproduct />
                 </aside>
                 <aside id="profile" style={ {display: (display !== undefined) ? display[2] : "none"} }>
                    <Profile userProfile={userProfile} />
                 </aside>
                 <aside id="orders" style={ {display: (display !== undefined) ? display[3] : "none"} }>
                    <Orders userProfile={userProfile} />
                 </aside>
                 <aside id="messages" style={ {display: (display !== undefined) ? display[4] : "none"} }>
                    <Messages userProfile={userProfile} />
                 </aside>
                 <aside id="chats" style={ {display: (display !== undefined) ? display[5] : "none"} }>
                    <Chats userProfile={userProfile} />
                 </aside>
                 <aside style={ {display: (display !== undefined) ? display[6] : "none"} }>
                    <Settings userProfile={userProfile} />
                 </aside>
             </section>

             
        </div>
    )
}

export default Dashboard;