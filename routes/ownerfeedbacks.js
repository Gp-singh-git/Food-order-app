const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;
//tables used: users and reviews
    db.query(`SELECT reviews.order_id, first_name, last_name, mobile_number, rating, feedback from reviews JOIN users ON reviews.user_id = users.id;  `)
      .then(data => {
        const items = data.rows;
        console.log(items);
        res.render("ownerfeedbacks", {items, ckv_id, ckv_fn});
      });

  });
  return router;

};
