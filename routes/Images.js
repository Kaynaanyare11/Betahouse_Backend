var express = require('express');
var router = express.Router();
const ImagesControllers = require('../controller/Images');

/* GET home page. */
router.get('/',ImagesControllers.getImages);
router.get('/:id',ImagesControllers.getImagesById);
router.post('/',ImagesControllers.createImages);
router.put('/:id',ImagesControllers.PutImages);

module.exports = router;
