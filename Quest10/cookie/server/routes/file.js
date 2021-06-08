const express = require('express');
const router = express.Router();
const checker = require('../middleware/check');
const fileModel = require('../model/fs.js');

router.get('/', checker.fileName, function (req, res) {
  let content;
  const name = req.query.name;
  const user = req.user;

  try {
    content = fileModel.getFile(user.id, name);
  } catch (err) {
    console.log(err);
    res.status(404);
    res.send(err.toString());
    return;
  }

  res.status(200);
  res.json({
    name: name,
    content: content,
  });
});

router.post('/', checker.fileNameBody, function (req, res) {
  const { name, content } = req.body;
  const user = req.user;

  try {
    fileModel.createFile(user.id, name, content);
  } catch (err) {
    console.log(err);
    res.status(404);
    res.send(err.toString());
    return;
  }

  res.status(200);
  res.send();
});

router.put('/', checker.fileNameContent, function (req, res) {
  const { name, content } = req.body;
  const user = req.user;

  try {
    fileModel.editFile(user.id, name, content);
  } catch (err) {
    console.log(err);
    res.status(404);
    res.send(err.toString());
    return;
  }

  res.status(200);
  res.send();
});

router.delete('/', function (req, res) {
  const { name } = req.body;
  const user = req.user;

  try {
    fileModel.deleteFile(user.id, name);
  } catch (err) {
    console.log(err);
    res.status(404);
    res.send(err.toString());
    return;
  }

  res.status(200);
  res.send();
});

module.exports = router;
