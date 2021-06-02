var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('file api is running!');
});

router.post('/', function (req, res, next) {
  res.send('file api is running!');
});

router.put('/', function (req, res, next) {
  res.send('file api is running!');
});

router.delete('/', function (req, res, next) {
  res.send('file api is running!');
});

module.exports = router;
