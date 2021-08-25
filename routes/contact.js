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
    res.render("contact");
  });
  return router;
}
