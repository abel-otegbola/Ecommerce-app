import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'


const Login = () => {
    const [errMsg, setMsg] = useState("")

    useEffect(() => {
        setMsg([])
            fetch('/users/errMsg')
            .then((res) => res.json())
            .then((data) => {
                setMsg(data)
            })
            .catch(err => {console.log(err)});
   }, [])


    return (
        <div className="login">
            <div className="front-texts">
                <h1>Login</h1>
                <p>
                    <a href="/register">Don't have an account Register!</a>
                </p>
            </div>
            <form method="POST" action="/users/login">
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
        </div>
    )
}

export default Login;