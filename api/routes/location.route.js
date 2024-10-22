var express = require('express');
var router = express.Router();
const locationController = require('../controllers/location.controller')



router.get('/', locationController.getLocations);


router.post('/create-location', locationController.createLocation);


router.delete('/delete-locations', locationController.deleteAllLocation);

module.exports = router;
