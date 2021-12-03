const LocalStrategy = require("passport-local").Strategy;
const mysql = require("mysql")
const bcrypt = require("bcryptjs")

module.exports = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
            //Match user and password
            let sql = `SELECT * FROM users WHERE email = '${email}'`;
            let query = db.query(sql, (err, result) => {
                if (err) {
                    console.log(err)
                }
                if(result.length < 1) {
                    return done(null, false, { message: "Email or Password incorrect" })
                }
                bcrypt.compare(password, result.password, (err, isMatch) => {
                    if(err) throw err;

                    if(isMatch) {
                        return done(null, result)
                    }
                    else {
                        return done(null, false, { message: "Password incorrect" })
                    }
                })

            })
        })
    )

    passport.serializeUser(function(user, done) {
        done(null, user.id)
    })

    passport.deserializeUser(function(id, done) {
        let sql = `SELECT * FROM users WHERE id = '${id}'`;
        let query = db.query(sql, (err, result) => {
            done(err, result)    
        })
    })

}