var router = require('express').Router();

router.use('/equation', require('./eqution'));

module.exports = router;