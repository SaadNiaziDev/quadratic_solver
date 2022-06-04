var router = require('express').Router();

router.use('/equation', require('./equation'));

module.exports = router;