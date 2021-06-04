const express = require('express');
const router = express.Router();
const checker = require('../middleware/check');
const fileModel = require('../model/fs.js');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');

router.get('/', auth.verifyJWT, checker.fileName, function (req, res) {
  let content;
  const name = req.query.name;
  const token = req.get('token');
  const decoded = jwt.verify(token, 'jwSecret');

  try {
    content = fileModel.getFile(decoded.id, name);
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

router.post('/', auth.verifyJWT, checker.fileNameBody, function (req, res) {
  const { name, content } = req.body;
  const token = req.get('token');
  const decoded = jwt.verify(token, 'jwSecret');
  try {
    fileModel.createFile(decoded.id, name, content);
  } catch (err) {
    console.log(err);
    res.status(404);
    res.send(err.toString());
    return;
  }

  res.status(200);
  res.send();
});

router.put('/', auth.verifyJWT, checker.fileNameContent, function (req, res) {
  const { name, content } = req.body;
  const token = req.get('token');
  const decoded = jwt.verify(token, 'jwSecret');

  try {
    fileModel.editFile(decoded.id, name, content);
  } catch (err) {
    console.log(err);
    res.status(404);
    res.send(err.toString());
    return;
  }

  res.status(200);
  res.send();
});

router.delete('/', auth.verifyJWT, function (req, res) {
  const { name } = req.body;
  const token = req.get('token');
  const decoded = jwt.verify(token, 'jwSecret');

  try {
    fileModel.deleteFile(decoded.id, name);
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
