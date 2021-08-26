const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;

    db.query(`SELECT orders.id, order_time, order_date, total_price, rating from orders FULL JOIN reviews ON orders.id = reviews.order_id WHERE orders.user_id = ${ckv_id} ORDER BY orders.id DESC;
    `)
      .then(data => {
        const items = data.rows;
        const promises=[];
        for (let i=0; i<items.length; i++) {
          promises.push(db.query(`SELECT items.name, ordered_items.quantity from ordered_items JOIN items on ordered_items.item_id = items.id where order_id = ${items[i]["id"]};`));

        }
        Promise.all(promises)
        .then(values => {
          // console.log(values);
          for (let i=0; i<items.length; i++) {
              items[i]["details"] = values[i].rows;
          }
          res.render("myorders", {items, ckv_id, ckv_fn})

        })
      // console.log(items);

    })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;
    console.log("in req params",req.params.id);
    db.query (`SELECT * from orders WHERE id = ${req.params.id};`)
    .then( data => {
      let items = data.rows;
      console.log("whats in items", items);
      res.render("feedback", {items, ckv_id, ckv_fn});
    })
  });

  router.post("/o/:id", (req, res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;
    db.query(`INSERT INTO reviews(user_id, order_id, rating, feedback) VALUES (${ckv_id}, ${req.params.id}, ${req.body.my_rating}, '${req.body.my_feedback}');`)
    .then( ()=> {
      res.redirect("/myorders");
    })
    .catch(err => {
      console.log("whats error", err);
    })
  });

return router;

}
