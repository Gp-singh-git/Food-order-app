/*
 * All routes for Menus are defined here
 * Since this file is loaded in server.js into api/menu,
 *   these routes are mounted onto /menu
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // router.get("/", (req, res) => {
  //   let query = `SELECT * FROM items`;
  //   console.log(query);
  //   db.query(query)
  //     .then(data => {
  //       const menu = data.rows;
  //       res.json({ menu });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });


  // ----- gets all menu items ---- //

  router.get("/", (req,res) => {
    db.query(`
    SELECT *
    FROM items;
    `)
      .then(data => {
        console.log("my function is running");
        const items = data.rows;
        res.render("menu", { items});
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })

  // router.get("/users", (req,res) => {
  //   db.query(`
  //   SELECT *
  //   FROM users;
  //   `)
  //     .then(data => {
  //       console.log("my function is running")
  //       const users = data.rows;
  //       res.json({ users });
  //     })
  //         .catch(err => {
  //         res
  //           .status(500)
  //           .json({ error: err.message });
  //       });
  // });

  return router;
};


//   // ----- add a single menu item to the db ----- //

//   const addMenuItem = function (menuItem) {
//     return db.query(`
//     INSERT INTO items (
//       name, description, image, price)
//       VALUES ($1, $2, $3, $4) RETURNING *;
//     `, [menuItem.name, menuItem.description, menuItem.image, menuItem.price])
//       .then(res => res.rows[0]);
//   };
