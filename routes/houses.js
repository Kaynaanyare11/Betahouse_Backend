var express = require('express');
var router = express.Router();
const housesControllers = require('../controller/HomeController');

/* GET home page. */
router.get('/',housesControllers.getHouses);
router.post('/',housesControllers.createHouse);
router.put('/:id',housesControllers.PutHouse);

module.exports = router;
