import express from 'express';
const router = express.Router();
import * as checker from '../middleware/check.js';
import * as auth from '../middleware/auth.js';
import jwt from 'jsonwebtoken';
import * as storage from '../model/sequelize.js';

router.get('/', auth.verifyJWT, checker.fileName, async function (req: express.Request, res: express.Response) {
  let content;
  const name = req.query.name;
  const token = req.token;
  try {
    if (token) {
      const decoded = jwt.verify(token, 'jwSecret') as jwt.JwtPayload;
      content = await storage.getFile(decoded.id, name as string);
    }
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
  const token = req.token;
  try {
    if (token) {
      const decoded = jwt.verify(token, 'jwSecret') as jwt.JwtPayload;
      storage.createFile(decoded.id, name, content);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
    res.send(err.toString());
    return;
  }

  res.status(200);
  res.json({
    msg: 'success',
  });
});

router.put('/', auth.verifyJWT, checker.fileNameContent, function (req, res) {
  const { name, content } = req.body;
  const token = req.token;

  try {
    if (token) {
      const decoded = jwt.verify(token, 'jwSecret') as jwt.JwtPayload;
      storage.updateFile(decoded.id, name, content);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
    res.send(err.toString());
    return;
  }

  res.status(200);
  res.json({
    msg: 'success',
  });
});

// router.delete('/', auth.verifyJWT, function (req, res) {
//   const { name } = req.body;
//   const token = req.token;
//   const decoded = jwt.verify(token, 'jwSecret');

//   try {
//     // fileModel.deleteFile(decoded.id, name);
//   } catch (err) {
//     console.log(err);
//     res.status(404);
//     res.send(err.toString());
//     return;
//   }

//   res.status(200);
//   res.json({
//     msg: 'success',
//   });
// });

module.exports = router;
