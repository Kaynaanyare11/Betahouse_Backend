var express = require('express');
var router = express.Router();
const housesControllers = require('../controller/HomeController');

/* GET home page. */
router.get('/',housesControllers.getHouses);
router.post('/',housesControllers.createHouse);

module.exports = router;
