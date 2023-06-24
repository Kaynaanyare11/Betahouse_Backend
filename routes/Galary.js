var express = require('express');
var router = express.Router();
const GalaryControllers = require('../controller/GalaryController');

/* GET home page. */
router.get('/',GalaryControllers.getGalary);
router.get('/:id',GalaryControllers.getGalaryById);
router.post('/',GalaryControllers.createGalary);
router.put('/:id',GalaryControllers.PutGalary);

module.exports = router;
