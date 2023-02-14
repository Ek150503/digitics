const { default: mongoose } = require('mongoose');

const dbConnect = (uri) => {
  try {
    mongoose.set('strictQuery', false);
    return mongoose.connect(uri);
  } catch (error) {
    console.log('Database connection error');
  }
};

module.exports = dbConnect;
