import React from "react";
import avatar from '../img/avatar3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons'

const Settings = ({ userProfile }) => {

    return (
        <div className="profile">
           <h1>Settings</h1>
                    <form action={`/editProfile/${userProfile.id}`} method="POST">
                            <img src={(userProfile.img === undefined) ? avatar : userProfile.img} alt="avatar"/>
                            <label className="edit" htmlFor="avatar">
                                <FontAwesomeIcon icon={faPenAlt}/> Edit image
                                <input type="file" name="avatar" id="avatar"/>
                            </label>
                            
                            <label htmlFor="firstname">
                                <h4>Firstname :<p> {userProfile.firstname} </p></h4>
                                <input type="text" name="firstname" placeholder="Change firstname" id="firstname"/>
                            </label>
                            
                            <label htmlFor="lastname">
                            <h4>Lastname :<p> {userProfile.lastname} </p></h4>
                                <input type="text" name="lastname" placeholder="Change lastname" id="lastname"/>
                            </label>
                            
                            <label htmlFor="email">
                                <h4>Email :<p> {userProfile.email} </p></h4>
                                <input type="email" name="email" placeholder="Change email" id="email"/>
                            </label>

                            <button type="submit">Save Changes</button>
                    </form>
        </div>
    )
}

export default Settings