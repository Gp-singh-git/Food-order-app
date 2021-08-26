const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get('/',(req, res) => {
    const ckv_fn="";
    const ckv_id = "";
    res.render("login", {ckv_fn, ckv_id});
  });

  router.post('/l', (req,res) => {
    req.session=null;
    res.redirect("/menu");
  })




  router.post('/', (req, res) => {
    const inputEmail = req.body.emailx;
    console.log("our email",inputEmail, req.body.emailx);
    const inputPassword = req.body.passwordx;
    db.query(`SELECT id, first_name, password from users where email = '${inputEmail}';`)
    .then(data => {
      const ourUser = data.rows;
      console.log("var---------",ourUser);
      if (ourUser.length === 0) {

        res.status(400).send("Invalid Credentials, Please try again");
      } else if (inputEmail === 'admin@gmail.com') {
        req.session.ck_fn = ourUser[0]["first_name"];
        req.session.ck_id = ourUser[0]["id"];
        res.redirect("/ownerorder");
      } else {
        req.session.ck_fn = ourUser[0]["first_name"];
        req.session.ck_id = ourUser[0]["id"];

        res.redirect("/menu");
      }
    })
    .catch(err => {
      console.log("neww error", err);
    })
  })

  router.post('/r', (req, res) => {
    db.query(`SELECT id, first_name from users where email = '${req.body.email}';`)
      .then(data => {
        const ourUser = data.rows;
        if(ourUser.length === 0) {
          db.query(`INSERT INTO users(first_name, last_name, mobile_number, email, password, address) VALUES ('${req.body.first_name}',
             '${req.body.last_name}',${req.body.mobile_number},'${req.body.email}','${req.body.password}','${req.body.address}') RETURNING *;`)
            .then( data1 => {
              const newUser = data1.rows;
              req.session.ck_fn = req.body.first_name;
              req.session.ck_id = newUser[0]["id"];
              res.redirect("/menu");
            })
            .catch(err => {
              console.log("whats error", err);
            })
        } else {
          res.status(400).send("Email already registered, Please try again");
        }
      })
  })



  return router;
}
