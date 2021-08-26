const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // ----- gets all menu items ---- //

  router.get("/", (req,res) => {
    const ckv_id = req.session.ck_id;
    const ckv_fn = req.session.ck_fn;
    db.query(`
    SELECT *
    FROM items;
    `)
      .then(data => {
        console.log("my function is running");
        const items = data.rows;
        res.render("menu", { items, ckv_id, ckv_fn });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
