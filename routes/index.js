// set up router and api pathing
const router = require('express').Router();
const apiRoutes = require('./api');

//set up pathing so that /api is automatically at the beginning
router.use('/api', apiRoutes);

// export data for use elsewhere
module.exports = router;
