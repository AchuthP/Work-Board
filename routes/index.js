var express = require('express');
var router = express.Router();

let nameController = require('../controllers/nameController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Work Board' });
});

router.get('/:name', nameController.name)

module.exports = router;
