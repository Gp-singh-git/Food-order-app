const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get('/',function(req,res) {
    const ckv_id = req.session.ck_id ? req.session.ck_id : "";
    const ckv_fn = req.session.ck_fn ? req.session.ck_fn : "";

    res.render("contact", {ckv_id, ckv_fn});
  });
  return router;
};
