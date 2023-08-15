import React, { useState, useEffect } from 'react';
import "./register.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import sittingroom2 from "../../img/sittingroom2.jpg"


const Register = () => {
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Cpassword, setCPassword] = useState("")
    const [errObj, setErrObj] = useState([])
    const [errMsg, setMsg] = useState("")

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}errMsg`)
        .then((res) => res.json())
        .then((data) => {
            setMsg(data)
            console.log(data)
        })
        .catch(err => {console.log(err)});
    }, [])


    const handleRegister = (event) => {
        let errMsg = [];
        if(Fname.length < 4) {
            errMsg.push({
                id: 1,
                msg: "Firstname must be more than three characters"
            })
            setErrObj(errMsg)
        }
        if(Lname.length < 4) {  
            errMsg.push({
                id: 2,
                msg: "Lastname must be more than three characters"
            })
            setErrObj(errMsg)         
        }
        
        if(!/\S+@\S+\.\S+/.test(email)) {
            errMsg.push({
                id: 3,
                msg: "Email not valid"
            })
            setErrObj(errMsg) 
        }
        if(password.length < 6) {
            errMsg.push({
                id: 4,
                msg: "Password should be more than 6 characters"
            })
            setErrObj(errMsg) 
        }
        if(password !== Cpassword) {
            errMsg.push({
                id: 5,
                msg: "Passwords do not match"
            })
            setErrObj(errMsg) 
        }
        if(errMsg.length > 0) {
            event.preventDefault()
        }
        
    }

    const removeErrors = (id) => {
        let errArr = errObj.filter(err => err.id !== id)
        setErrObj(errArr)
    }

    return (
        <div className="login">
            <img src={sittingroom2} alt="sittingroom2"/>
            <aside>
                <div className='heading'>
                    <h1>Register</h1>
                    <p>Already have an account  <a href="/loginPage">Login!</a> </p>
                </div>
                <form method="POST" action={`${import.meta.env.VITE_SERVER_URL}users/registerhandler`}>
                    <div className="body">
                        <div className="field">
                            <div className="errs">
                                <p className="errs">{errMsg}</p>
                                {errObj.map(err => {
                                    return (<p key={err.id}>{err.msg} <FontAwesomeIcon icon={faTimes} onClick={() => removeErrors(err.id)} alt="clear" width="12" style={{ background: "none"}}/></p>)
                                })}
                            </div>
                            <label htmlFor="Firstname">
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" placeholder="Firstname" id="Firstname" name="Firstname" onChange={event => setFname(event.target.value)}/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="Lastname">
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" placeholder="Lastname" id="Lastname" name="Lastname" onChange={event => setLname(event.target.value)}/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="email">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="email" placeholder="Email" id="email" name="email" onChange={event => setEmail(event.target.value)}/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="Password">
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" placeholder="Password" id="Password" name="password" onChange={event => setPassword(event.target.value)}/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="password2">
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password"placeholder="Confirm Password" id="password2" name="password2" onChange={event => setCPassword(event.target.value)}/>
                            </label>
                        </div>
                        <button type="submit" onClick={event => handleRegister(event)}>Register</button>
                    </div>
                </form>
            </aside>
        </div>
    )
}

export default Register;