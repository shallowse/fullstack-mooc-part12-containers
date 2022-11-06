const express = require('express');
const router = express.Router();
const redis = require('../redis');

const configs = require('../util/config')

const KEY = 'RAND_KEY';

//let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  let visits = await redis.getAsync(KEY)
  if (!visits) {
    visits = 0;
  }
  await redis.setAsync(KEY, ++visits);

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  let visits = await redis.getAsync(KEY);
  if (!visits) {
    visits = 0;
  }
  res.send({ "added_todos": visits });
});

module.exports = router;
