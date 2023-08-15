import React, { useState, useEffect } from 'react';
import "./login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import sittingroom2 from "../../img/sittingroom2.jpg"


const Login = () => {
    const [errMsg, setMsg] = useState("")

    useEffect(() => {
        setMsg([])
            fetch(`${import.meta.env.VITE_SERVER_URL}users/errMsg`)
            .then((res) => res.json())
            .then((data) => {
                setMsg(data)
            })
            .catch(err => {console.log(err)});
   }, [])


    return (
        <div className="login">
            <img src={sittingroom2} alt="sittingroom2"/>
            <aside>
                <div className='heading'>
                    <h1>Login</h1>
                    <p> Don't have an account  <a href="/register">Register!</a> </p>
                </div>
                <form method="POST" action={`${import.meta.env.VITE_SERVER_URL}users/login`}>
                    <div className="body">
                        <p className="errs">{errMsg}</p>
                            <label htmlFor="email">
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" id="email" name="email" placeholder="Email Address"/>
                            </label>
                            <label htmlFor="password">
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" id="password" name="password" placeholder="Password"/>
                            </label> 
                        <button type="submit">Login</button>
                        <p>Forgot <a href="/">Password?</a></p>
                    </div>
                </form>
            </aside>
        </div>
    )
}

export default Login;