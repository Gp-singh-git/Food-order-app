const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT items.name, items.image, items.price, cart.quantity FROM cart JOIN items on cart.item_id = items.id where cart.user_id = 2;`)
      .then(data => {
        const items = data.rows;
        let total;
        db.query(`select sum(price * quantity) from cart JOIN items on cart.item_id = items.id where cart.user_id = 2;`)
                      .then(data1 => {
                        total = data1.rows[0].sum;
                        console.log("total value", total)
                        res.render("placeorder", {items, total} )

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
    db.query(`INSERT INTO orders(user_id, total_price, order_date, order_time) VALUES (2, ${req.body.total}, '${date1}', '${time1}') RETURNING *;`)
    .then( function(data) {
      let x = data.rows[0];
      console.log("successful insertion ");
      console.log(x);

      db.query(`delete from cart where user_id =2;`)
      .then()

      console.log(x);
      res.render("thank_you", x)
    })
    .catch(err => {
      console.log("new error", err)
    })
  });




  return router;
};
