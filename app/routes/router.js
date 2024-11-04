//? Import express package
const express = require('express');




const router = express.Router();


router.use('/info', require('./api/animaroutes'));
router.use('/location', require('./api/stateroutes'))

module.exports = router;