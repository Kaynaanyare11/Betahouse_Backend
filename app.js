var express = require('express');
const mongoose = require('mongoose');
var housesRouter = require('./routes/houses');
var usersRouter = require('./routes/users');
var ImagesRouter = require('./routes/Images');
var InfoRouter = require('./routes/Info');
var GalaryRouter = require('./routes/Galary');
var ClientRouter = require('./routes/Client');
var ServiseRouter = require('./routes/Services');
var HomePageStaticPartsRouter = require('./routes/HomePageStaticPart');
const {MongoMemoryServer} =require("mongodb-memory-server-core");

var app = express();
app.use(express.json());
app.use('/houses', housesRouter);
app.use('/users', usersRouter);
app.use('/images', ImagesRouter);
app.use('/info', InfoRouter);
app.use('/galary', GalaryRouter);
app.use('/client', ClientRouter);
app.use('/service', ServiseRouter);
app.use('/herosection&footer', HomePageStaticPartsRouter);


const connectiondb =async ()=>{
  const createServer=await MongoMemoryServer.create();
  await mongoose.connect(createServer.getUri(),{dbName:"Betahouse"})
  .then(() => console.log('Connected!')).catch((err) => {
    console.log(err);
  }
  )
}
connectiondb();
// mongoose.set('strictQuery', false)
// mongoose.connect('mongodb://127.0.0.1:27017/BetaHouse')
//   .then(() => console.log('Connected!')).catch((err) => {
//   console.log(err);
// }
// );

module.exports = app;
