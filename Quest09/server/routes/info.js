const express = require('express');
const router = express.Router();
const fileModel = require('../model/fs');

router.get('/', function (req, res) {
  let fileList;
  try {
    fileList = fileModel.getFileList();
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
