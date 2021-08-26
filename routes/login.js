const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {

  router.get('/',(req, res) => {
    const ckv_fn = "";          //emptying cookie handling variables before login
    const ckv_id = "";
    res.render("login", {ckv_fn, ckv_id});
  });
//Logout
  router.post('/l', (req,res) => {
    req.session = null;         //handling logout button, deleting cookies
    res.redirect("/menu");
  });
//Login check
  router.post('/', (req, res) => {
    const inputEmail = req.body.emailx;
    const inputPassword = req.body.passwordx;
    db.query(`SELECT id, first_name, password from users where email = '${inputEmail}';`)
      .then(data => {
        const ourUser = data.rows;

        if (ourUser.length === 0) {         //email not found
          res.status(400).send("Invalid Credentials, Please try again");
        } else if (inputEmail === 'admin@gmail.com') {      //Admin login

          if (bcrypt.compareSync(inputPassword, ourUser[0].password))  {
            req.session.ck_fn = ourUser[0]["first_name"];     //Setting cookies for user
            req.session.ck_id = ourUser[0]["id"];
            res.redirect("/ownerorder");
          } else {
            res.status(400).send("Invalid Credentials, Please try again");
          }
        } else {       //Normal user login proceeded

          if (bcrypt.compareSync(inputPassword, ourUser[0].password))  {
            req.session.ck_fn = ourUser[0]["first_name"];
            req.session.ck_id = ourUser[0]["id"];
            res.redirect("/menu");
          } else {
            res.status(400).send("Invalid Credentials, Please try again");
          }
        }
      })
      .catch(err => {
        console.log("neww error", err);
      });
  });

  //To register new user
  router.post('/r', (req, res) => {
    db.query(`SELECT id, first_name from users where email = '${req.body.email}';`)
      .then(data => {
        const ourUser = data.rows;
        const salt = bcrypt.genSaltSync(10);
        const password =  bcrypt.hashSync(req.body.password,salt);      //enrypting password with bvrypt
        if (ourUser.length === 0) {           //  Verifies user does not exist till now
          db.query(`INSERT INTO users(first_name, last_name, mobile_number, email, password, address) VALUES ('${req.body.first_name}',
             '${req.body.last_name}',${req.body.mobile_number},'${req.body.email}','${password}','${req.body.address}') RETURNING *;`)
            .then(data1 => {                    //  updated users table with new user
              const newUser = data1.rows;
              req.session.ck_fn = req.body.first_name;
              req.session.ck_id = newUser[0]["id"];     //setting cookies
              res.redirect("/menu");
            })
            .catch(err => {
              console.log("whats error", err);
            });
        } else {
          res.status(400).send("Email already registered, Please try again");
        }
      });
  });
  return router;
};
