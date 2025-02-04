const express = require('express');
const { getData } = require('../controllers/databasecontroller');

const router = express.Router();

// API route to fetch data
router.get('/data', getData);

module.exports = router;
