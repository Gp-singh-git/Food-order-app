const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;
    db.query(`SELECT items.name, items.image, items.price, cart.quantity FROM cart JOIN items on cart.item_id = items.id where cart.user_id = ${req.session.ck_id};`)
      .then(data => {
        const items = data.rows;
        let total;
        db.query(`select sum(price * quantity) from cart JOIN items on cart.item_id = items.id where cart.user_id = ${req.session.ck_id};`)
                      .then(data1 => {
                        total = data1.rows[0].sum;
                        console.log("total value", total)
                        res.render("placeorder", {items, total, ckv_id, ckv_fn} )
                      })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/done", (req, res) => {
    let date1 = new Date().toLocaleDateString();
    let d = new Date();
    let time1 = d.toTimeString();
    time1 = time1.split(' ')[0];
      console.log(date1, time1, req.body.total);
    db.query(`INSERT INTO orders(user_id, total_price, order_date, order_time) VALUES (${req.session.ck_id}, ${req.body.total}, '${date1}', '${time1}') RETURNING *;`)
    .then( function(data) {
      let x = data.rows[0];
      console.log("successful insertion ");
      // console.log(x);
      db.query(`SELECT item_id, quantity FROM cart where user_id = ${req.session.ck_id};`)
      .then(data2 => {
        let y = data2.rows;
        console.log("value of y is",y);
        for (let z of y) {
          db.query(`INSERT INTO ordered_items(order_id, item_id, quantity) VALUES (${x.id}, ${z.item_id}, ${z.quantity});`)
          .then()
        }
      })
      db.query(`delete from cart where user_id =${req.session.ck_id};`)
      .then()
      x["ckv_id"] = req.session.ck_id;
      x["ckv_fn"] = req.session.ck_fn;
      // console.log(x);
      res.render("thank_you", x)
    })
    .catch(err => {
      console.log("new error", err)
    })
  });




  return router;
};
