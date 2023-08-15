const express = require("express");
const mysql = require("mysql");
const multer = require('multer')
const fs = require('fs')
const path = require("path")

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
  

const router = express.Router();
const upload = multer({ dest: '../frontend/public' })

//register a product
router.post("/addProduct", upload.single("uploaded_file"), (req, res) => {
    console.log(req.body)
    console.log(req.file.filename)
    let product = {
        title: req.body.title,
        price: req.body.price,
        img: req.file.filename,
        description: req.body.description,
        categories: req.body.category,
        tags: req.body.tags,
        star: req.body.star
    }
    
    let findsql = `SELECT * FROM products WHERE title = '${req.body.title}'`;
            
    let query = db.query(findsql, (err, result) => {
        if (err) {
            console.log(err)
        }
        if(result.length < 1) {
            let sql = 'INSERT INTO products SET ?';
            let query = db.query(sql, product, (err) => {
                if (err) throw err;
                res.redirect("/shop")
            })
        }
        else {
            errMsg = "Product already exist"
            res.redirect('/dashboard')
        }
    })
})

router.get("/allproducts", (req, res) => {
    let sql = `SELECT * FROM products`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

router.get("/singleproduct/:id", (req, res) => {
    let sql = `SELECT * FROM products WHERE id = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

module.exports = router;
