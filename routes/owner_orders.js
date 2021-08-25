const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT users.first_name, users.last_name, orders.id, orders.order_time, orders.ready_by, orders.picked_at from orders JOIN users ON orders.user_id = users.id ORDER BY id;
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
          res.render("owner_orders", {items})

        })
      // console.log(items);

    })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  router.post("/:tm", (req,res) => {
    db.query(`UPDATE orders SET ready_by = '${req.body.ready_value}' WHERE id = ${req.params.tm}`)
    .then( () => {
      res.status(200);
      res.redirect('/ownerorder');
    });
  });

  router.post("/u/:pk", (req,res) => {
  console.log("recd val: ",req.body.picked_value,"params pk: ",req.params.pk );
  db.query(`UPDATE orders SET picked_at = '${req.body.picked_value}' WHERE id = ${req.params.pk}`)
  .then( () => {
    res.redirect('/ownerorder');
  })
  })

return router;
}
