const Express = require('express');
require('dotenv').config();
const App = Express();
const cookieSession = require('cookie-session');
const path= require('path');

const PORT = 8080;
const sass = require("node-sass-middleware");
// Express Configuration
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json());
App.use(Express.static('public'));
App.use(morgan('dev'));


app.set("view engine", "ejs");
app.use(express.static("public"));


const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();
const { getAllSpecies } = require("./db/dbhelpers.js")(db);







// Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!",
// }));

// App.listen(PORT, () => {
  // eslint-disable-next-line no-console
//   console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
// });
