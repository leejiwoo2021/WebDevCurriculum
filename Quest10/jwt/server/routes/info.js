const express = require('express');
const router = express.Router();
const fileModel = require('../model/fs');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');

router.get('/', auth.verifyJWT, function (req, res) {
  let fileList;
  const token = req.get('token');
  const decoded = jwt.verify(token, 'jwSecret');

  try {
    fileList = fileModel.getFileList(decoded.id);
  } catch (err) {
    console.log(err);
    res.send(err);
    return;
  }

  res.json({
    list: fileList,
  });
});

module.exports = router;
