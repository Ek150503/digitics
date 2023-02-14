const dbConnect = require('./config/dbConnect');
require('dotenv').config();

const app = require('./index');

// import env variables
const PORT = process.env.PORT || 4001;
const MONGODB_URI = process.env.MONGODB_URI;

const start = async (uri) => {
  await dbConnect(uri);
  app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  });
};

start(MONGODB_URI);
