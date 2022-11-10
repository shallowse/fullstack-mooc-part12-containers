const express = require('express');
const router = express.Router();

const data = require('../util/datafile.json');

router.get('/', (req, res) => {
  const obj = {
    error: 'No path to /',
    errorMsg: 'Use path /:city to search for cities. E.g. http://<URL>/helsinki',
  }
  res.status(400).json(obj);
});

router.get('/all', (req, res) => {
  console.log('tailla')
  res.json(data); 
});

router.get('/:city', (req, res) => {
  obj = req.params && req.params.city && data[req.params.city] ? data[req.params.city] : [];
  res.json(obj);
});

module.exports = router;
