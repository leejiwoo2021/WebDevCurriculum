import express from 'express';
const router = express.Router();
import * as storage from '../model/sequelize.js';
import * as auth from '../middleware/auth.js';
import jwt from 'jsonwebtoken';

router.get('/', auth.verifyJWT, async function (req, res) {
  let fileList, lastFile;
  const token = req.token;

  try {
    if (token) {
      const decoded = jwt.verify(token, 'jwSecret') as jwt.JwtPayload;
      const info = await storage.getFileList(decoded.id);

      fileList = info.fileList;
      lastFile = info.lastFile;
    }
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
