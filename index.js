const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res
    .status(200)
    .send(`<h1 style='text-align:center'>Hello from server side</h1>`);
});

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
