const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;
    db.query(`SELECT * FROM items;`)
      .then(data => {
        const items = data.rows;
        res.render("order", {items, ckv_id, ckv_fn})
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.post("/:id", (req, res) => {
    // console.log(req.params.id, req.body.quantity);
    // const check = db.query(`select * from cart where user_id = ${req.params.id} AND item_id = ${req.body.quantity}`)
    //               .then(data => {
    //                 const i = data.rows;
    //                 return i;

    //               })
    //               .catch( err => {
    //                 console.log("check error:", err)
    //               });
    // console.log(check.status);
    console.log(req.body);
    db.query(`INSERT INTO cart(user_id, item_id, quantity) VALUES (${req.session.ck_id}, ${req.params.id}, ${req.body.quantity})`)
      .then( data => {
        console.log("inserted value in cart")
        db.query(`SELECT * FROM items;`)
      .then(data => {
        const items = data.rows;
        // res.redirect("/orders");
        res.send("ok");
      })
      })
      .catch(err => {
        console.log("some error", err);
      });
  });

  router.get("/done", (req, res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;
    res.render("placeorder", {ckv_id, ckv_fn});
  })


  return router;
};
