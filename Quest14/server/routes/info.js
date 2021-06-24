const express = require('express');
const router = express.Router();
const storage = require('../model/sequelize');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');

router.get('/', auth.verifyJWT, async function (req, res) {
  let fileList, lastFile;
  const token = req.token;
  const decoded = jwt.verify(token, 'jwSecret');

  try {
    const info = await storage.getFileList(decoded.id);

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
