var express = require('express');
var router = express.Router();

let nameController = require('../controllers/nameController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Work Board' });
});

router.get('/achu', nameController.name)

router.get('/about', nameController.getAbout)

router.get('/teacherpost',nameController.getTpost)

router.get('/signup', nameController.getSignup)

router.get('/login', (req, res) => {
  console.log("HITs")
  res.render('login');
})

router.get('/teacherview', nameController.getTeacher)
router.get('/userview', nameController.getStud)
router.get('/tfeedback', nameController.getTfeed)



module.exports = router;
