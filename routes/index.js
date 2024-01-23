var CyclicDB = require('@cyclic.sh/dynamodb');
var db = CyclicDB(process.env.CYCLIC_DB);
var Content = db.collection('content');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let list = await Content.list();
  res.send(list);
});

router.post('/', async function(req, res, next) {
  const { content } = req.body;
  await Content.set(content)
  res.end();
});

module.exports = router;
