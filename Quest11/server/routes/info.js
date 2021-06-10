const express = require('express');
const router = express.Router();
const fileModel = require('../model/fs');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');

router.get('/', auth.verifyJWT, function (req, res) {
  let fileList, lastFile;
  const token = req.token;
  const decoded = jwt.verify(token, 'jwSecret');
  try {
    const info = fileModel.getFileList(decoded.id);
    fileList = info.fileList;
    lastFile = info.lastFile;
  } catch (err) {
    console.log(err);
    res.send(err);
    return;
  }
  res.json({
    list: fileList,
    lastFile,
  });
});

module.exports = router;
