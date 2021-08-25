/*
 * All routes for contact are defined here
 * Since this file is loaded in server.js into contact,
 *   these routes are mounted onto /contact
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get('/',function(req,res){
    const ckv_id = req.session.ck_id ? req.session.ck_id : "";
    const ckv_fn = req.session.ck_fn ? req.session.ck_fn : "";

    res.render("contact", {ckv_id, ckv_fn});
  });
  return router;
}
