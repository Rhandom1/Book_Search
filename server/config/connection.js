const mongoose = require('mongoose');
require ("dotenv").config();
console.log(process.env.MONGODB_URI);
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';

console.log(`########%%%%%Connecte to ${mongoURI}********`)
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
