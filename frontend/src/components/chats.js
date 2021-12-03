import React from "react";

const Chats = ({ userProfile }) => {

    return (
        <div className="chats">
           <h1>Chats</h1>
           <div className="msg-box">
                <div className="msgs">
                    {
                        (userProfile.chats !== null) ?
                        userProfile.chats.map(chat => {
                            if(chat.sender === "admin") {
                                return (
                                    <div className="msg admin" key={chat.id}>
                                        <span>{chat.sender}</span>
                                        <p>{chat.msg}</p>
                                        <span className="date">{chat.date}</span>
                                    </div>
                                )
                            }   
                            else {
                               return (
                                    <div className="msg user" key={chat.id}>
                                        <span>{chat.sender}</span>
                                        <p>{chat.msg}</p>
                                        <span className="date">{chat.date}</span>
                                    </div>
                                )
                            } 
                        })
                        :
                        ""
                    }
                </div>
                <form className="msg-new" action="/chatMsg" method="POST">
                    <input type="text" placeholder="Type a message..." name="msg" />
                    <input type="text" defaultValue={userProfile.email} readOnly name="email" title="email" style={{ display: "none" }}/>
                    <button type="submit">Send</button>
                </form>
           </div>
        </div>
    )
}

export default Chats