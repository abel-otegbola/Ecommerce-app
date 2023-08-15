const express = require("express");
const router = express.Router();
const mysql = require("mysql");

//Create mysql database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "Abel",
    password: "1234",
    database: "bos_unlimited"
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("db Connected!");
  });
 

//chat messages
router.post('/chatMsg', (req, res) => {
    // userProfile.chat.push({
    //     id: 2,
    //     sender: "user", 
    //     msg: req.body.msg,  
    //     date:  `${ new Date().getHours()} :${ new Date().getMinutes()} - ${ new Date().getDate()} | ${ new Date().getMonth()} | ${ new Date().getFullYear()}`
    // })let sql = `SELECT * FROM users WHERE email = '${user1.email}'`;
    let sql = `SELECT * FROM users WHERE email = '${req.body.email}'`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            let profile = {
                id: result[0].id,
                firstname: result[0].Firstname,
                lastname: result[0].Lastname,
                email: result[0].email,
                orders: result[0].orders,
                messages: [eval("("+ result[0].messages +")")],
                chats: [eval("("+ result[0].chats +")")]
            }
            profile.chats.push({
                id: 2,
                sender: "user", 
                msg: req.body.msg,  
                date:  `${ new Date().getHours()} :${ new Date().getMinutes()} - ${ new Date().getDate()} | ${ new Date().getMonth()} | ${ new Date().getFullYear()}`

            })
            let sql = `UPDATE users SET chats = '${profile.chats.toString()}' WHERE id = ${profile.id}`;
            let query = db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result)
            })
        }
    })
})

module.exports = router;