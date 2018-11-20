const express = require('express');
const router = express.Router();

if (process.env.NODE_ENV !== 'production') require('../secrets.json');

router.get('/', (req, res, next) => {
  res.json('hi');
});

module.exports = router;
