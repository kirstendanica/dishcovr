const express = require('express');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const pg = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Passport setup
passport.use(new LocalStrategy(
  function(username, password, done) {
    // Insert your logic here to check the user credentials
  }
));

// Postgres Connection
const Pool = pg.Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect()
  .then(client => {
    console.log("DB connected!");
  })
  .catch(err => console.log("DB connection error", err.stack));

//Routes
app.get('/', (req, res) => {
  res.send("Welcome to Dishcovr");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});