const express = require('express');
const router = express.Router();
const checker = require('../middleware/check');
const fileModel = require('../model/fs.js');

router.get('/', checker.fileName, function (req, res, next) {
  let data;
  const name = req.query.name;

  try {
    data = fileModel.getFile(name);
  } catch (err) {
    console.log(err);
    res.status(404);
    res.end('there is no file');
    return;
  }

  res.status(200);
  res.json({
    name: name,
    data: data,
  });
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
