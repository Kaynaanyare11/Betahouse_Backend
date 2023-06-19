var express = require('express');
var router = express.Router();
const ImagesControllers = require('../controller/Images');

/* GET home page. */
router.get('/',ImagesControllers.getImages);
router.post('/',ImagesControllers.createImages);

module.exports = router;
