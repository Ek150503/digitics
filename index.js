// require module
const express = require('express');
const { errorHandler, notFound } = require('./middlewares/errorHandler');

// import routes
const authRoute = require('./routes/authRoute');

const app = express();

// register middleware
app.use(express.json());

// register routes
app.get('/', (req, res) => {
  res
    .status(200)
    .send(`<h1 style='text-align:center'>Hello from server side</h1>`);
});

app.use('/api/users', authRoute);

// error handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
