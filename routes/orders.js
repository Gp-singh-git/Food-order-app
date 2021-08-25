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
    console.log(req.params.id, req.body.quantity);
    db.query(`select * from cart where user_id = ${req.session.ck_id} AND item_id = ${req.params.id}`)
      .then(datay => {
        const i = datay.rows[0];
        console.log("value returned =:", i)
        if(i) {
          db.query(`UPDATE cart SET quantity = ${req.body.quantity} WHERE user_id = ${req.session.ck_id} AND item_id = ${req.params.id}`)
        } else {


        db.query(`INSERT INTO cart(user_id, item_id, quantity) VALUES (${req.session.ck_id}, ${req.params.id}, ${req.body.quantity})`)
        .then( data => {
          console.log("inserted value in cart")
          db.query(`SELECT * FROM items;`)
          .then(data => {
            const items = data.rows;
            res.send("ok");
          })
        })
        .catch(err => {
          console.log("some error", err);
        });
        }

    })
  });

  router.get("/done", (req, res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;
    res.render("placeorder", {ckv_id, ckv_fn});
  })


  return router;
};
