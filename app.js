var express = require('express');
const mongoose = require('mongoose');
var housesRouter = require('./routes/houses');
var usersRouter = require('./routes/users');
var ImagesRouter = require('./routes/Images');

var app = express();
app.use(express.json());
app.use('/houses', housesRouter);
app.use('/users', usersRouter);
app.use('/images', ImagesRouter);

mongoose.connect(`mongodb+srv://employeepaymentuser:i8PQeZX1bVovuUPi@cluster0.wgnqycb.mongodb.net/BetaHouse`)
.then(() => {
  app.listen(6000);
  console.log('Connected!')
}).catch((err) => {
  console.log(err);
}
);

module.exports = app;
