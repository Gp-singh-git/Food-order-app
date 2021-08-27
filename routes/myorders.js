const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;
//tables used: orders and reviews to see previous orders of user.
    db.query(`SELECT orders.id, order_time, order_date, total_price, rating, picked_at from orders FULL JOIN reviews ON orders.id = reviews.order_id WHERE orders.user_id = ${ckv_id} ORDER BY orders.id DESC;
    `)
      .then(data => {
        const items = data.rows;
        const promises = [];          //array to store all promises
        for (let i = 0; i < items.length; i++) {
          promises.push(db.query(`SELECT items.name, ordered_items.quantity from ordered_items JOIN items on ordered_items.item_id = items.id where order_id = ${items[i]["id"]};`));

        }
        Promise.all(promises)         //executing all promises to finished
          .then(values => {
            for (let i = 0; i < items.length; i++) {        //appending items to respective orders
              items[i]["details"] = values[i].rows;
            }
            res.render("myorders", {items, ckv_id, ckv_fn});
          });

      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

//getting to feedback page with details from order table
  router.get("/:id", (req, res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;
    db.query(`SELECT * from orders WHERE id = ${req.params.id};`)
      .then(data => {
        let items = data.rows;
        res.render("feedback", {items, ckv_id, ckv_fn});
      });
  });

// submitting user review to reviews table
  router.post("/o/:id", (req, res) => {
    const ckv_id = req.session.ck_id;
    db.query(`INSERT INTO reviews(user_id, order_id, rating, feedback) VALUES (${ckv_id}, ${req.params.id}, ${req.body.my_rating}, '${req.body.my_feedback}');`)
      .then(()=> {
        res.redirect("/myorders");
      })
      .catch(err => {
        console.log("whats error", err);
      });
  });

  return router;

};
