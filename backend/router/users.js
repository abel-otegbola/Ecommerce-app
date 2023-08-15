const express = require("express")
const mysql = require("mysql");
const bcrypt = require("bcryptjs")

const router = express.Router()

//Create mysql database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "Abel",
    password: "1234",
    database: "Bos_unlimited"
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("db Connected!");
  });
  

//Register a user
router.post("/registerhandler", (req, res) => {
    //Hash password
    bcrypt.genSalt(10, (err, salt) => 
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) throw err;
            hashedPassword = hash
            let user = {
                Firstname: req.body.Firstname,
                Lastname: req.body.Lastname,
                email: req.body.email,
                password: hash,
                orders: "",
                messages: `{id: 1, date:  "${ new Date().getHours()} :${ new Date().getMinutes()} - ${ new Date().getDate()} | ${ new Date().getMonth()} | ${ new Date().getFullYear()}" , msg:"Welcome to Bos unlimited where we offer amazing t-shirt customization at affordable price"}`,
                chats: `{id: 1, sender: "admin", msg: "Hi ${req.body.Firstname} You can contact us here through this chat",  date:  "${ new Date().getHours()} :${ new Date().getMinutes()} - ${ new Date().getDate()} | ${ new Date().getMonth()} | ${ new Date().getFullYear()}" }`
            }
            
            let findsql = `SELECT * FROM users WHERE email = '${user.email}'`;
            
            let query = db.query(findsql, (err, result) => {
                if (err) {
                    console.log(err)
                }
                if(result.length < 1) {
                    let sql = 'INSERT INTO users SET ?';
                    let query = db.query(sql, user, (err) => {
                        if (err) throw err;
                        errMsg = "Registered succesfully please login to continue"
                        userlogin = {name: user.Firstname}
                        res.redirect(`http://localhost:5173/LoginPage`)
                    })
                }
                else {
                    userlogin = {name: null}
                    errMsg = "Email already registered"
                    res.redirect(`http://localhost:5173/register`)
                }
            })
})
)

})


let userlogin, userProfile, errMsg;
//Handle a user login
router.post("/login", (req, res) => {
    let user1;
    if(req.body === "") {
        user1 = {email: null, password: null}
    }
    else {
        user1 = req.body
    }
    let sql = `SELECT * FROM users WHERE email = '${user1.email}'`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        if(result.length < 1) {
            let user = {
                name: null,
                cartAmount: null
            }
            userlogin = user
            errMsg = "Email incorrect"
            res.redirect(`http://localhost:5173/loginPage`)
        }
        else {
            bcrypt.compare(user1.password, result[0].password, (err, isMatch) => {
                if(err) throw err;

                if(isMatch) { 
                    let user = {
                        name: result[0].Firstname
                    }
                    let profile = {
                        id: result[0].id,
                        firstname: result[0].Firstname,
                        lastname: result[0].Lastname,
                        email: result[0].email,
                        orders: result[0].orders,
                        messages: [eval("("+ result[0].messages +")")],
                        chats: [eval("("+ result[0].chats +")")]
                    }
                    userProfile = profile;
                    userlogin = user
                    res.redirect(`http://localhost:5173/dashboard`)
                }
                else {
                    errMsg = "Password incorrect"
                    res.redirect(`http://localhost:5173/loginPage`)
                }
          
        })
        }
    })
})

router.get('/userlogout', (req, res) => {
    user = {name: null, cartAmount: null}
    res.send(user)
})

router.get('/userlogin', (req, res) => {
    res.send(userlogin)
})

router.get('/userProfile', (req, res) => {
    res.send(userProfile)
})

router.get('/errMsg', (req, res) => {
    res.json(errMsg)
})

module.exports = router;
