const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs")
const fs = require("fs")

const app = express();

//Bodyparser
app.use(express.urlencoded({ extended: true }));

//Create mysql database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "bos_unlimited",
    password: "1234",
    database: "bos_unlimited"
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("db Connected!");
  });
  
  //Create mysql database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE bos_unlimited';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
        console.log("db Created!");
    })
})

//Create mysql database table
app.get("/createTable", (req, res) => {
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, Firstname VARCHAR(255), Lastname VARCHAR(255), email VARCHAR(255), password VARCHAR(255), orders VARCHAR(255), messages VARCHAR(255), chats VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send("Users table created")
    })
})

app.get("/createProductsTable", (req, res) => {
    let sql = 'CREATE TABLE products(id int AUTO_INCREMENT, title VARCHAR(255), price VARCHAR(255), img VARCHAR(255), description VARCHAR(255), categories VARCHAR(255), tags VARCHAR(255), star VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send("Products table created")
    })
})

app.get("/createCategoriesTable", (req, res) => {
    let sql = 'CREATE TABLE categories(id int AUTO_INCREMENT, title VARCHAR(255), img VARCHAR(255), description VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send("Products table created")
    })
})

// Routes
app.use("/", require("./router/index"))
app.use("/users", require("./router/users"))
app.use("/chat", require("./router/chat"))
app.use("/products", require("./router/products"))


app.post("/editProfile/:id", (req, res) => {
    console.log(req.body)
    let sql = `UPDATE users SET Firstname = '${req.body.firstname}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, user, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send("user edited!!!")
    })
})

app.get("/delete/:id", (req, res) => {
    let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
    let query = db.query(sql, user, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send("user 1 added")
    })
})

app.get("/api", (req, res) => {
    res.json({ user })
})

const PORT = process.env.PORT || '3007'

app.listen(PORT, "localhost", () => {
    console.log(`server started on port ${PORT}`)
})
