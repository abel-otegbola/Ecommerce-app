import React from "react";

const Messages = ({ userProfile }) => {

    return (
        <div className="chats">
           <h1>Messages</h1>
           <div className="msg-box">
                <div className="msgs">
                    {
                        (userProfile.messages !== null) ?
                        userProfile.messages.map(msg => {
                                return (
                                    <div className="msg admin" key={msg.id}>
                                        <span>{msg.date}</span>
                                        <p>{msg.msg}</p>
                                    </div>
                                )
                        })
                        :
                        ""
                    }
                </div>
           </div>
        </div>
    )
}

export default Messages