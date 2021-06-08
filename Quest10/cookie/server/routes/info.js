const express = require('express');
const router = express.Router();
const fileModel = require('../model/fs');

router.get('/', function (req, res) {
  const user = req.user;

  let fileList, lastFile;
  try {
    const info = fileModel.getFileList(user.id);
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
