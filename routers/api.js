var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');


//list movies
router.get('/movies', apiController.getMovies);

module.exports = router;