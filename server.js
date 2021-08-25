// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
const client = require('twilio')(accountSid, authToken);
// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const orderRoutes = require("./routes/orders")
const menuRoutes = require("./routes/menu");
const contactRoutes = require("./routes/contact");
const placeOrder = require("./routes/placeorder");
const ownerOrder = require("./routes/owner_orders");
const login = require("./routes/login");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/orders", orderRoutes(db));
app.use("/menu", menuRoutes(db));
app.use("/contact", contactRoutes(db));
app.use("/placeorder", placeOrder(db));
app.use("/ownerorder", ownerOrder(db));
app.use("/login", login(db));

// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  const ckv_id = req.session.ck_id ? req.session.ck_id : "";
  const ckv_fn = req.session.ck_fn ? req.session.ck_fn : "";
  res.render("index", {ckv_id, ckv_fn});
});

client.messages
  .create({
    to: '16478692189',
    from: '14083407572',
    body: 'Your order is ready'
  })
  .then(message => console.log(message))
  // here you can implement your fallback code
  .catch(error => console.log(error));




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

