// require module
const express = require('express');

// import routes
const authRoute = require('./routes/authRoute');

const app = express();

// register routes
app.get('/', (req, res) => {
  res
    .status(200)
    .send(`<h1 style='text-align:center'>Hello from server side</h1>`);
});

app.use('api/users', authRoute);

module.exports = app;
