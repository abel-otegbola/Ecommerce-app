import React from "react";
import avatar from '../img/avatar3.png'


const Profile = ({ userProfile }) => {

    return (
        <div className="profile">
           <h1>Profile</h1>
                    <form action={`/editProfile/${userProfile.id}`} method="POST">
                            <img src={(userProfile.img === undefined) ? avatar : userProfile.img} alt="avatar"/>
                            <h4> {userProfile.firstname} { userProfile.lastname}</h4>
                            <p> {userProfile.email} </p>
                    </form>
        </div>
    )
}

export default Profile