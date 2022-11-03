// require router to get paths to other files in api folder
const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const travellerRoutes = require('./travellerRoutes');
const tripRoutes = require('./tripRoutes');

// router usage applied to create RESTful api pathing
router.use('/locations', locationRoutes);
router.use('/travellers', travellerRoutes);
router.use('/trips', tripRoutes);

// export data for use elsewhere
module.exports = router;
